import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import gsap from 'gsap';
import { database } from './firebase-config.js';
import { ref, set, get } from "firebase/database";
import { fetchAndUpdateScore, subscribeToMatchScore, getNextMatch } from './scorecard-service.js';
import 'webxr-polyfill';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Add at the top of the file with other global variables
let lastFirebaseCall = 0;
const FIREBASE_CALL_INTERVAL = 10000; // 10 seconds in milliseconds
let isFirebaseCallInProgress = false;
let firebaseCallTimeout = null;

// Function to check if user is on iOS
function isIOSDevice() {
    const platform = navigator.userAgent.includes('iPhone') || 
                    navigator.userAgent.includes('iPad') || 
                    (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);
    return platform;
}

// Function to create message container
function createMessageContainer(isIOS) {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    container.style.padding = '20px';
    container.style.borderRadius = '12px';
    container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    container.style.textAlign = 'center';
    container.style.maxWidth = '80%';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.zIndex = '1000';

    if (isIOS) {
        container.innerHTML = `
            <h3 style="color: #1a73e8; margin-bottom: 15px;">WebXR Setup Required</h3>
            <p style="margin-bottom: 15px;">Please follow these steps:</p>
            <ol style="text-align: left; margin-bottom: 15px;">
                <li style="margin-bottom: 10px;">
                    <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056" 
                       target="_blank" 
                       style="color: #1a73e8; text-decoration: none; font-weight: bold;">
                       Download WebXR Viewer from the App Store
                    </a>
                </li>
                <li style="margin-bottom: 10px;">
                    Open the WebXR Viewer app and enter this URL:
                    <div style="background: #f5f5f5; padding: 10px; margin-top: 5px; border-radius: 5px;">
                        https://communications-aagnyasoft.github.io/ipl-demo/
                    </div>
                </li>
            </ol>`;
    } else {
        container.textContent = 'WEBXR NOT AVAILABLE';
    }

    return container;
}

// Initialize WebXR polyfill
if (window.isSecureContext) {
    // Check if WebXR is supported
    if ('xr' in navigator) {
        console.log('WebXR is supported');
    } else {
        console.log('WebXR is not supported, using polyfill');
        const isIOS = isIOSDevice();
        const messageContainer = createMessageContainer(isIOS);
        document.body.appendChild(messageContainer);
        // Stop further execution since WebXR is not available
        throw new Error('WebXR not available');
    }
} else {
    console.warn('WebXR requires a secure context (HTTPS)');
}

// First, make sure Three.js is properly imported
console.log('Three.js Version:', THREE.REVISION); // This will verify Three.js is loaded

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
});

// Enhanced renderer settings for better AR compatibility
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.xr.enabled = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;

// Modify AR button creation with required features
const arButton = ARButton.createButton(renderer, {
    requiredFeatures: ['hit-test', 'dom-overlay'],
    domOverlay: { root: document.body },
    optionalFeatures: ['dom-overlay', 'depth-sensing', 'light-estimation']
});

// Enhanced AR button styling
arButton.style.backgroundColor = '#1a73e8';
arButton.style.padding = '16px 24px';
arButton.style.border = 'none';
arButton.style.borderRadius = '24px';
arButton.style.color = 'white';
arButton.style.fontSize = '16px';
arButton.style.fontWeight = '500';
arButton.style.transition = 'all 0.3s ease';
arButton.style.bottom = '24px';
document.body.appendChild(arButton);

// Add WebXR session event listeners with position reset
renderer.xr.addEventListener('sessionstart', () => {
    console.log('AR session started');
    // Reset scoreboard position when AR session starts
    scoreboardGroup.position.set(0, 0, -0.5);
    scoreboardGroup.rotation.set(0, Math.PI, 0);
    // Remove the AR button when session starts
    if (arButton && arButton.parentNode) {
        arButton.parentNode.removeChild(arButton);
    }
});

renderer.xr.addEventListener('sessionend', () => {
    console.log('AR session ended');
    // Re-add the AR button when session ends
    if (arButton && !arButton.parentNode) {
        document.body.appendChild(arButton);
    }
});

document.body.appendChild(renderer.domElement);

// Create scoreboard group with improved positioning
const scoreboardGroup = new THREE.Group();
scoreboardGroup.position.set(0, 0, -0.5);
scoreboardGroup.rotation.set(0, Math.PI, 0);
scene.add(scoreboardGroup);

// Create main plate with improved material settings
const plateGeometry = new THREE.BoxGeometry(0.6, 0.3, 0.02);
const plateMaterial = new THREE.MeshPhysicalMaterial({ 
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.1,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide,
    envMapIntensity: 1.5,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1
}); 
const plate = new THREE.Mesh(plateGeometry, plateMaterial);
plate.castShadow = true;
plate.receiveShadow = true;
scoreboardGroup.add(plate);

// Add subtle background glow
const glowGeometry = new THREE.BoxGeometry(0.62, 0.32, 0.01);
const glowMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1a73e8,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
    emissive: 0x1a73e8,
    emissiveIntensity: 0.5
});
const glow = new THREE.Mesh(glowGeometry, glowMaterial);
glow.position.z = -0.01;
scoreboardGroup.add(glow);

// Enhanced lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
mainLight.position.set(2, 5, 2);
mainLight.castShadow = true;
scene.add(mainLight);

// Add subtle rim light for depth
const rimLight = new THREE.DirectionalLight(0x1a73e8, 0.4);
rimLight.position.set(0, 0, -3);
scene.add(rimLight);

// Create score display with enhanced typography
function createScoreText(matchData) {
    const fontLoader = new FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        // Clear existing text from scoreboardGroup
        while(scoreboardGroup.children.length > 2) { // Keep plate and glow
            scoreboardGroup.remove(scoreboardGroup.children[2]);
        }

        if (matchData) {
            // Format: "Team1 vs Team2"
            createTextLine(`${matchData.team1} vs ${matchData.team2}`, font, 0.06, 0x1a73e8, 0.08, 0);
            
            // Score if available
            if (matchData.score) {
                createTextLine(matchData.score, font, 0.06, 0x000000, 0, 0);
            }
            
            // Match time/date
            createTextLine(matchData.dateTime, font, 0.03, 0x666666, -0.08, 0);
        } else {
            // Default display if no data
            createTextLine("Loading match data...", font, 0.04, 0x1a73e8, 0, 0);
        }
    });
}

// Function to create text line
function createTextLine(text, font, size, color, yPos, shouldWrap = false) {
    if (shouldWrap) {
        // Split text into words
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];
        const maxCharsPerLine = 20;

        for (let i = 1; i < words.length; i++) {
            if ((currentLine + ' ' + words[i]).length <= maxCharsPerLine) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);

        // Create multiple text lines
        const textMeshes = [];
        const lineSpacing = 0.03; // Space between lines
        lines.forEach((line, index) => {
            const geometry = new TextGeometry(line, {
                font: font,
                size: size,
                height: 0.001,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 0,
                bevelSize: 0,
                bevelSegments: 0
            });

            geometry.computeBoundingBox();
            geometry.center();

            const material = new THREE.MeshPhysicalMaterial({ 
                color: color,
                metalness: 0.2,
                roughness: 0.4
            });
            
            const textMesh = new THREE.Mesh(geometry, material);
            textMesh.position.set(0, yPos - (index * lineSpacing), -0.013);
            textMesh.rotation.set(0, Math.PI, 0);
            textMesh.scale.set(0.7, 0.7, 0.0001);
            textMesh.castShadow = true;
            
            scoreboardGroup.add(textMesh);
            textMeshes.push(textMesh);
        });
        return textMeshes;
    } else {
        const geometry = new TextGeometry(text, {
            font: font,
            size: size,
            height: 0.001,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 0,
            bevelSize: 0,
            bevelSegments: 0
        });

        geometry.computeBoundingBox();
        geometry.center();

        const material = new THREE.MeshPhysicalMaterial({ 
            color: color,
            metalness: 0.2,
            roughness: 0.4
        });
        
        const textMesh = new THREE.Mesh(geometry, material);
        textMesh.position.set(0, yPos, -0.013);
        textMesh.rotation.set(0, Math.PI, 0);
        textMesh.scale.set(0.7, 0.7, 0.0001);
        textMesh.castShadow = true;
        
        scoreboardGroup.add(textMesh);
        return textMesh;
    }
}

// Add interaction feedback
let isHovered = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

// Add these variables at the top level
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationSpeed = { x: 0, y: 0 };
let autoRotate = true;

// Add these variables at the top level of your file
let mouseX = 0;
let mouseY = 0;

// Update the mouse position tracking
function onPointerMove(event) {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    pointer.x = mouseX;
    pointer.y = mouseY;

    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        rotationSpeed.x = deltaMove.y * 0.005;
        rotationSpeed.y = deltaMove.x * 0.005;
    }

    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(plate);

    if (intersects.length > 0 && !isHovered) {
        isHovered = true;
        autoRotate = false;
        
        // Enhanced hover animation
        gsap.to(scoreboardGroup.scale, {
            x: 1.05,
            y: 1.05,
            z: 1.05,
            duration: 0.4,
            ease: "power2.out"
        });
        
        // Subtle glow animation
        gsap.to(glowMaterial, {
            opacity: 0.25,
            emissiveIntensity: 0.8,
            duration: 0.4
        });
        
        document.body.style.cursor = 'grab';
    } else if (intersects.length === 0 && isHovered) {
        isHovered = false;
        autoRotate = true;
        
        gsap.to(scoreboardGroup.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.4,
            ease: "power2.out"
        });
        
        gsap.to(glowMaterial, {
            opacity: 0.15,
            emissiveIntensity: 0.5,
            duration: 0.4
        });
        
        document.body.style.cursor = 'default';
    }
}

// Enhanced drag interaction
function onPointerDown(event) {
    isDragging = true;
    autoRotate = false;
    document.body.style.cursor = 'grabbing';
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

function onPointerUp() {
    isDragging = false;
    autoRotate = true;
    document.body.style.cursor = isHovered ? 'grab' : 'default';
    rotationSpeed = { x: 0, y: 0 };
}

// Then initialize your controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.5;        // Reduce overall rotation speed
controls.enableDamping = true;     // Add smooth movement
controls.dampingFactor = 0.1;      // Increase damping for smoother movement
controls.maxPolarAngle = Math.PI * 0.4;
controls.minPolarAngle = Math.PI * 0.6;
controls.enableZoom = false;
controls.enablePan = false;

// Modify the existing animate function to include controls update
function animate() {
    renderer.setAnimationLoop((timestamp, frame) => {
        if (frame) {
            const referenceSpace = renderer.xr.getReferenceSpace();
            if (referenceSpace) {
                const pose = frame.getViewerPose(referenceSpace);
                if (pose) {
                    // Update scoreboard position based on viewer pose if needed
                    // This ensures the scoreboard stays visible in AR
                    scoreboardGroup.updateMatrixWorld();
                }
            }
        }
        
        if (controls) {
            controls.update();
        }
        
        renderer.render(scene, camera);
    });
}

// Finally, start the animation
animate();

// Function to ensure minimum time between Firebase calls
async function rateLimitedFirebaseCall(callback) {
    const now = Date.now();
    const timeSinceLastCall = now - lastFirebaseCall;

    // If less than 10 seconds since last call, wait for the remaining time
    if (timeSinceLastCall < FIREBASE_CALL_INTERVAL) {
        const waitTime = FIREBASE_CALL_INTERVAL - timeSinceLastCall;
        console.log(`Waiting ${Math.round(waitTime/1000)} seconds before next Firebase call`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    if (isFirebaseCallInProgress) {
        console.log('Firebase call already in progress, skipping...');
        return null;
    }

    try {
        isFirebaseCallInProgress = true;
        lastFirebaseCall = Date.now();
        console.log(`Making Firebase call at ${new Date().toISOString()}`);
        const result = await callback();
        return result;
    } finally {
        isFirebaseCallInProgress = false;
    }
}

// Function to fetch and store IPL matches
async function fetchAndStoreMatches() {
    console.log('Starting to fetch IPL matches...');

    try {
        // Check for existing data
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const snapshot = await get(matchScheduleRef);
        
        if (snapshot.exists() && snapshot.val() !== "") {
            console.log('Using existing match data from Firebase');
            return snapshot.val();
        }

        // Use existing data in Firebase instead of fetching
        console.log('Using stored match data');
        return snapshot.val();

    } catch (error) {
        console.error('Error fetching/storing matches:', error);
        throw error;
    }
}

// Modify getTodayMatch function to use rate limiting
async function getTodayMatch() {
    return await rateLimitedFirebaseCall(async () => {
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const snapshot = await get(matchScheduleRef);
        if (snapshot.exists()) {
            const matches = snapshot.val();
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const todayMatch = matches.find(match => {
                const matchDate = new Date(parseInt(match.timing.startTime));
                matchDate.setHours(0, 0, 0, 0);
                return matchDate.getTime() === today.getTime();
            });

            if (todayMatch) {
                console.log('Found match for today:', todayMatch);
                return todayMatch;
            } else {
                const nextMatch = matches.find(match => {
                    const matchDate = new Date(parseInt(match.timing.startTime));
                    return matchDate > today;
                });
                
                if (nextMatch) {
                    console.log('No match today. Next match:', nextMatch);
                    return nextMatch;
                }
            }
        }
        console.log('No matches found in schedule');
        return null;
    });
}

// Modify the initialization to use today's match
async function initializeDisplay() {
    const todayMatch = await getTodayMatch();
    if (todayMatch) {
        currentMatchId = todayMatch.matchId;
        updateMatchDisplay(todayMatch);
        startCountdown(todayMatch.timing.startTime);
    } else {
        console.log('No matches available to display');
    }
}

// Call initializeDisplay when the app starts
initializeDisplay();

// Function to handle match completion
async function handleMatchCompletion(matchId, status) {
    console.log(`Match ${matchId} completed. Status: ${status}`);
    
    // Clear existing intervals
    if (window.currentUpdateInterval) {
        clearInterval(window.currentUpdateInterval);
        window.currentUpdateInterval = null;
    }

    // Get next match
    const nextMatch = await getNextMatch(matchId);
    console.log('Next match data:', nextMatch);
    
    if (nextMatch) {
        console.log('Switching to next match:', nextMatch);
        
        // Clear existing text
        while(scoreboardGroup.children.length > 2) {
            scoreboardGroup.remove(scoreboardGroup.children[2]);
        }

        // Update current match ID
        currentMatchId = nextMatch.matchId;

        // Display next match details
        const fontLoader = new FontLoader();
        fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            // Match Number (top)
            createTextLine(nextMatch.matchNumber, font, 0.03, 0x1a73e8, 0.1);
            
            // Teams (second line)
            createTextLine(`${nextMatch.teams.team1} vs ${nextMatch.teams.team2}`, 
                font, 0.04, 0x000000, 0.05);
            
            // Venue (third line)
            createTextLine(`${nextMatch.venue.ground}, ${nextMatch.venue.city}`, 
                font, 0.02, 0x666666, -0.08);

            createTextLine(`${nextMatch.venue.city}`, 
                font, 0.02, 0x666666, -0.10);
            
            // Start time in IST (fourth line)
            const matchTime = new Date(parseInt(nextMatch.timing.startTime));
            const istTime = matchTime.toLocaleString('en-US', {
                timeZone: 'Asia/Kolkata',
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            createTextLine(`${istTime} IST`, font, 0.02, 0x666666, -0.8);
            
            // Start countdown for next match
            startCountdown(nextMatch.timing.startTime);
        });
    } else {
        console.log('No more matches scheduled');
        // Clear the display or show "No more matches" message
        const fontLoader = new FontLoader();
        fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            // Clear existing text
            while(scoreboardGroup.children.length > 2) {
                scoreboardGroup.remove(scoreboardGroup.children[2]);
            }
            createTextLine("No more matches scheduled", font, 0.04, 0x000000, 0);
        });
    }
}

// Modify startCountdown function to ensure time is displayed
function startCountdown(startTime) {
    let countdownInterval;
    let isMatchStarted = false;
    let isApiStarted = false;
    let lastApiCallTime = 0;

    const updateTimer = () => {
        const now = Date.now();
        const matchTime = parseInt(startTime);
        const timeLeft = matchTime - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Show "Match Started!" when less than 10 minutes remaining
            if (timeLeft <= 600000 && timeLeft > 0) {
                updateCountdownDisplay("Match Started!");
            } else {
                const countdownText = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                updateCountdownDisplay(countdownText);
            }

            // Check if 10 minutes before match and last API call was more than 1 minute ago
            if (!isApiStarted && timeLeft <= 600000 && (now - lastApiCallTime >= 60000)) {
                isApiStarted = true;
                lastApiCallTime = now;
                if (currentMatchId) {
                    startPeriodicScoreUpdates(currentMatchId);
                }
            }
        } else if (!isMatchStarted) {
            isMatchStarted = true;
            // Don't show "Match Started!" when countdown reaches zero
            updateCountdownDisplay("");
            // Start periodic updates when match begins if last call was more than 1 minute ago
            if (currentMatchId && (now - lastApiCallTime >= 60000)) {
                lastApiCallTime = now;
                startPeriodicScoreUpdates(currentMatchId);
            }
        }
    };

    // Initial call to update the display
    updateTimer();
    
    // Set up interval for updates
    countdownInterval = setInterval(updateTimer, 1000);

    // Return cleanup function
    return () => {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    };
}

// Update countdown display with adjusted position
function updateCountdownDisplay(text) {
    const fontLoader = new FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        // Remove any existing countdown text
        const existingText = scoreboardGroup.children.find(child => 
            child.userData && child.userData.isCountdown
        );
        if (existingText) {
            scoreboardGroup.remove(existingText);
        }
        
        // Create new countdown text with size and more visible position
        const textMesh = createTextLine(text, font, 0.03, 0x1a73e8, 0);
        if (textMesh) {
            textMesh.userData.isCountdown = true;
            // Ensure the text is visible by adjusting its position and scale
            textMesh.position.z = -0.013;
            textMesh.scale.set(0.8, 0.8, 0.0001);
        }
    });
}

// Modify updateMatchDisplay to properly show score information
async function updateMatchDisplay(matchData, scoreInfo = null) {
    const fontLoader = new FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        // Clear existing text
        while(scoreboardGroup.children.length > 2) {
            scoreboardGroup.remove(scoreboardGroup.children[2]);
        }

        if (matchData) {
            try {
                // Store current match ID for countdown timer
                currentMatchId = matchData.matchId;

                // Match Number (top)
                createTextLine(matchData.matchNumber, font, 0.028, 0x1a73e8, 0.12);
                
                // Teams with batting indicator (second line)
                let team1Text = matchData.teams.team1;
                let team2Text = matchData.teams.team2;
                if (scoreInfo && scoreInfo.currentInnings) {
                    if (scoreInfo.currentInnings.battingTeam === matchData.teams.team1) {
                        team1Text = `${team1Text} *`;
                    } else if (scoreInfo.currentInnings.battingTeam === matchData.teams.team2) {
                        team2Text = `${team2Text} *`;
                    }
                }
                createTextLine(`${team1Text} vs ${team2Text}`, 
                    font, 0.035, 0x000000, 0.07);

                // Match Status (third line)
                const matchTime = new Date(parseInt(matchData.timing.startTime));
                const statusText = `Match starts at ${matchTime.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                    timeZone: 'GMT'
                })} GMT`;

                // If we have score info, show it
                if (scoreInfo && scoreInfo.currentInnings) {
                    // Score (fourth line)
                    const scoreText = `${scoreInfo.currentInnings.score}/${scoreInfo.currentInnings.wickets} (${scoreInfo.currentInnings.overs} ov)`;
                    createTextLine(scoreText, font, 0.05, 0x000000, 0.00);
                    
                    // Run Rate (fifth line)
                    createTextLine(`RR: ${scoreInfo.currentInnings.runRate}`, font, 0.03, 0x666666, -0.05);
                }
                
                // Venue split into two separate lines
                createTextLine(matchData.venue.ground, font, 0.02, 0x666666, -0.09);
                createTextLine(matchData.venue.city, font, 0.02, 0x666666, -0.115);
                
                // Start time in IST moved down
                const istTime = matchTime.toLocaleString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });
                createTextLine(`${istTime} IST`, font, 0.02, 0x666666, -0.143);
                
                // Start countdown
                startCountdown(matchData.timing.startTime);
                
            } catch (error) {
                console.error('Error updating match display:', error);
                createTextLine("Error Loading Data", font, 0.035, 0x1a73e8, 0);
            }
        }
    });
}

// Modify startPeriodicScoreUpdates function
function startPeriodicScoreUpdates(matchId) {
    console.log(`Setting up periodic score updates for match ${matchId}`);
    
    // Clear any existing intervals and timeouts
    if (window.currentUpdateInterval) {
        clearInterval(window.currentUpdateInterval);
        window.currentUpdateInterval = null;
    }
    if (firebaseCallTimeout) {
        clearTimeout(firebaseCallTimeout);
        firebaseCallTimeout = null;
    }

    let lastScoreData = null;
    let isFetching = false;
    let lastFetchTime = Date.now();
    const FETCH_INTERVAL = 10000; // 10 seconds in milliseconds

    // Function to fetch score and handle result
    async function fetchScoreAndHandle() {
        if (isFetching) {
            console.log('Fetch already in progress, skipping...');
            return false;
        }

        try {
            isFetching = true;
            console.log(`Fetching score for match ${matchId} at ${new Date().toISOString()}`);
            
            // Get current match data first
            const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
            const matchScheduleSnapshot = await get(matchScheduleRef);
            let matchData = null;
            
            if (matchScheduleSnapshot.exists()) {
                const matches = matchScheduleSnapshot.val();
                const matchesArray = Array.isArray(matches) ? matches : Object.values(matches);
                matchData = matchesArray.find(match => match.matchId === matchId);
            }

            // Then get score data using the queue system
            const result = await fetchAndUpdateScore(matchId);
            
            if (!result) {
                console.log('No score data received');
                return false;
            }

            // Check if the score data has actually changed
            if (JSON.stringify(result) === JSON.stringify(lastScoreData)) {
                console.log('Score data unchanged, skipping display update');
                return false;
            }
            lastScoreData = result;
            
            if (result?.isComplete) {
                console.log(`Match ${matchId} is complete, handling completion...`);
                handleMatchCompletion(matchId, result.matchStatus);
                return true;
            }

            if (matchData) {
                updateMatchDisplay(matchData, result);
            }
            
            return false;
        } catch (error) {
            console.error('Error in score fetch:', error);
            return false;
        } finally {
            isFetching = false;
        }
    }

    // Function to schedule next fetch
    function scheduleNextFetch() {
        const now = Date.now();
        const timeSinceLastFetch = now - lastFetchTime;
        const timeUntilNextFetch = Math.max(0, FETCH_INTERVAL - timeSinceLastFetch);

        console.log(`Scheduling next fetch in ${Math.round(timeUntilNextFetch/1000)} seconds`);
        
        firebaseCallTimeout = setTimeout(async () => {
            const shouldStop = await fetchScoreAndHandle();
            if (!shouldStop) {
                lastFetchTime = Date.now();
                scheduleNextFetch();
            }
        }, timeUntilNextFetch);
    }

    // Make initial API call immediately
    fetchScoreAndHandle().then(shouldStop => {
        if (shouldStop) {
            console.log('Initial fetch indicates match is complete');
            return;
        }
        
        // Schedule the next fetch
        scheduleNextFetch();
    });
}

// Add event listeners
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointerleave', onPointerUp);

// Start the application
animate();

// Add at the top of your file
let currentMatchId = null;

// Add cleanup when page is unloaded
window.addEventListener('beforeunload', () => {
    if (window.currentUpdateInterval) {
        clearInterval(window.currentUpdateInterval);
    }
    if (firebaseCallTimeout) {
        clearTimeout(firebaseCallTimeout);
    }
    lastScoreData = null;
    isFirebaseCallInProgress = false;
});
