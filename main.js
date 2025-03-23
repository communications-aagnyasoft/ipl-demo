import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import gsap from 'gsap';
import { database } from './firebase-config.js';
import { ref, set, get } from "firebase/database";
import { fetchAndUpdateScore, subscribeToMatchScore, getNextMatch } from './scorecard-service.js';

// First, make sure Three.js is properly imported
console.log('Three.js Version:', THREE.REVISION); // This will verify Three.js is loaded

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
});

// Enhanced renderer settings for better visual quality
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Optimize for performance
renderer.xr.enabled = true;
renderer.shadowMap.enabled = true; // Enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows

document.body.appendChild(renderer.domElement);

// Customize AR button
const arButton = ARButton.createButton(renderer);
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

// Create scoreboard group
const scoreboardGroup = new THREE.Group();
scoreboardGroup.rotation.y = Math.PI;
scene.add(scoreboardGroup);

// Create main plate with modern design
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

// Position the scoreboard
scoreboardGroup.position.set(0, 0, -0.5);

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
            createTextLine(`${matchData.team1} vs ${matchData.team2}`, font, 0.04, 0x1a73e8, 0.08, 0);
            
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
function createTextLine(text, font, size, color, yPos) {
    const geometry = new TextGeometry(text, {
        font: font,
        size: size,
        height: 0.001, // Reduced height to prevent stretching
        curveSegments: 12,
        bevelEnabled: false, // Disabled bevel for cleaner text
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
    textMesh.position.set(0, yPos, -0.011); // Slightly in front of the plate
    textMesh.rotation.set(0, Math.PI, 0);
    textMesh.scale.z = 0.0001; // Scale down the Z-axis to make text thinner
    textMesh.castShadow = true;
    
    scoreboardGroup.add(textMesh);
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

// Animation
function animate() {
    renderer.setAnimationLoop(render);
}

function render() {
    // Animate rim light color
    const hue = (Date.now() * 0.0001) % 1;
    rimLight.color.setHSL(hue, 0.5, 0.5);

    // Subtle pulse animation for the glow
    const pulseIntensity = Math.sin(Date.now() * 0.002) * 0.1 + 0.9;
    glowMaterial.emissiveIntensity = 0.5 * pulseIntensity;

    // Apply auto-rotation with smooth easing
    if (autoRotate) {
        const targetRotationY = scoreboardGroup.rotation.y + 0.005;
        scoreboardGroup.rotation.y += (targetRotationY - scoreboardGroup.rotation.y) * 0.98;
    }

    // Apply user rotation
    if (isDragging) {
        scoreboardGroup.rotation.x += rotationSpeed.x;
        scoreboardGroup.rotation.y += rotationSpeed.y;
        scoreboardGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, scoreboardGroup.rotation.x));
    }

    // Add damping when not dragging
    if (!isDragging) {
        rotationSpeed.x *= 0.95;
        rotationSpeed.y *= 0.95;
        scoreboardGroup.rotation.x += rotationSpeed.x;
        scoreboardGroup.rotation.y += rotationSpeed.y;
    }

    // Subtle floating animation
    scoreboardGroup.position.y = Math.sin(Date.now() * 0.001) * 0.01;
    
    renderer.render(scene, camera);
}

// Function to fetch and store IPL matches
async function fetchAndStoreMatches() {
    console.log('Starting to fetch IPL matches...');
    
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'a667b4570bmsh45fb03368821a73p190842jsn7f07295bb002',
    //         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    //     }
    // };

    try {
        // Check for existing data
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const snapshot = await get(matchScheduleRef);
        
        if (snapshot.exists() && snapshot.val() !== "") {
            console.log('Using existing match data from Firebase');
            return snapshot.val();
        }

        // Comment out API fetch
        // const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/series/v1/9237', options);
        // const data = await response.json();
        // console.log('API Response:', data);

        // Use existing data in Firebase instead of fetching
        console.log('Using stored match data');
        return snapshot.val();

    } catch (error) {
        console.error('Error fetching/storing matches:', error);
        throw error;
    }
}

// Initialize the application
async function init() {
    try {
        // Test database connection
        const testRef = ref(database, 'IPL Data/test');
        await set(testRef, {
            timestamp: Date.now(),
            message: 'Test connection'
        });
        console.log('Database connection successful');

        // Get match schedule from Firebase
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const matchScheduleSnapshot = await get(matchScheduleRef);
        
        if (matchScheduleSnapshot.exists()) {
            const matches = matchScheduleSnapshot.val();
            console.log('All matches:', matches);

            // Convert matches to array if it's an object
            const matchesArray = Array.isArray(matches) ? matches : Object.values(matches);
            
            // Find the index of match ID 114960 (as a number)
            const currentIndex = matchesArray.findIndex(match => match.matchId === 114960);
            console.log('Current match index:', currentIndex);

            if (currentIndex !== -1) {
                // Get the next match
                const nextMatch = matchesArray[currentIndex + 1];
                console.log('Next match after 114960:', nextMatch);

                if (nextMatch) {
                    console.log('Displaying next match:', nextMatch);
                    updateMatchDisplay(nextMatch);
                } else {
                    console.log('No next match found after 114960');
                    // Show the current match
                    const currentMatch = matchesArray[currentIndex];
                    updateMatchDisplay(currentMatch);
                }
            } else {
                console.log('Match ID 114960 not found in schedule');
                // Show the first match as fallback
                const firstMatch = matchesArray[0];
                updateMatchDisplay(firstMatch);
            }
        } else {
            console.log('No match schedule found in Firebase');
        }

    } catch (error) {
        console.error('Initialization error:', error);
    }
}

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
            createTextLine(`${istTime} IST`, font, 0.02, 0x666666, -0.12);
            
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

// Modify startCountdown to only start periodic updates when match begins
function startCountdown(startTime) {
    let countdownInterval;
    let isMatchStarted = false;
    let isApiStarted = false;

    const updateTimer = () => {
        const now = Date.now();
        const matchTime = parseInt(startTime);
        const timeLeft = matchTime - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const countdownText = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            updateCountdownDisplay(countdownText);

            if (!isApiStarted && timeLeft <= 600000) { // 600000ms = 10 minutes
                console.log('Less than 10 minutes to match, starting API calls');
                isApiStarted = true;
                if (currentMatchId) {
                    startPeriodicScoreUpdates(currentMatchId);
                }
            }
        } else if (!isMatchStarted) {
            isMatchStarted = true;
            updateCountdownDisplay("Match Started!");
            // Start periodic updates when match begins
            if (currentMatchId) {
                startPeriodicScoreUpdates(currentMatchId);
            }
        }
    };

    countdownInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    // Return cleanup function
    return () => {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    };
}

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
        
        // Create new countdown text at the bottom with more space
        const textMesh = createTextLine(text, font, 0.025, 0x1a73e8, -0.13);
        if (textMesh) {
            textMesh.userData.isCountdown = true;
        }
    });
}

// Modify updateMatchDisplay to use the new periodic updates
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
                createTextLine(matchData.matchNumber, font, 0.03, 0x1a73e8, 0.12);
                
                // Teams (second line) with batting indicator
                let team1Text = matchData.teams.team1;
                let team2Text = matchData.teams.team2;
                
                if (scoreInfo && scoreInfo.currentInnings) {
                    const battingTeam = scoreInfo.currentInnings.battingTeam;
                    if (battingTeam === matchData.teams.team1) {
                        team1Text = `${team1Text} *`;
                    } else if (battingTeam === matchData.teams.team2) {
                        team2Text = `${team2Text} *`;
                    }
                }
                
                createTextLine(`${team1Text} vs ${team2Text}`, font, 0.04, 0x000000, 0.06);

                // If we have score info, show it
                if (scoreInfo && scoreInfo.currentInnings) {
                    // Match Status (third line)
                    createTextLine(scoreInfo.matchStatus, font, 0.02, 0x666666, 0.02);
                    
                    // Score (fourth line)
                    const scoreText = `${scoreInfo.currentInnings.score}/${scoreInfo.currentInnings.wickets} (${scoreInfo.currentInnings.overs} ov)`;
                    createTextLine(scoreText, font, 0.025, 0x000000, -0.02);
                    
                    // Run Rate (fifth line)
                    createTextLine(`RR: ${scoreInfo.currentInnings.runRate}`, font, 0.02, 0x666666, -0.06);
                }
                
                // Venue (sixth line)
                createTextLine(`${matchData.venue.ground}, ${matchData.venue.city}`, 
                    font, 0.02, 0x666666, -0.10);
                
                // Start time in IST (seventh line)
                const matchTime = new Date(parseInt(matchData.timing.startTime));
                const istTime = matchTime.toLocaleString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });
                createTextLine(`${istTime} IST`, font, 0.02, 0x666666, -0.14);
                
                // Start countdown (will be displayed at the bottom by updateCountdownDisplay)
                startCountdown(matchData.timing.startTime);
                
            } catch (error) {
                console.error('Error updating match display:', error);
                createTextLine("Error Loading Data", font, 0.04, 0x1a73e8, 0);
            }
        }
    });
}

// Update startPeriodicScoreUpdates to pass score info to updateMatchDisplay
function startPeriodicScoreUpdates(matchId) {
    console.log(`Setting up periodic score updates for match ${matchId}`);
    
    // Clear any existing interval
    if (window.currentUpdateInterval) {
        clearInterval(window.currentUpdateInterval);
    }

    // Function to fetch score and handle result
    async function fetchScoreAndHandle() {
        try {
            console.log(`Fetching score for match ${matchId}`);
            const result = await fetchAndUpdateScore(matchId);
            console.log('Score fetch result:', result);
            
            if (result?.isComplete) {
                console.log(`Match ${matchId} is complete, handling completion...`);
                handleMatchCompletion(result.matchId, result.status);
                return true; // Signal to stop updates
            }

            // Update display with score info
            if (result?.scoreInfo) {
                const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
                const matchScheduleSnapshot = await get(matchScheduleRef);
                if (matchScheduleSnapshot.exists()) {
                    const matches = matchScheduleSnapshot.val();
                    const matchesArray = Array.isArray(matches) ? matches : Object.values(matches);
                    const currentMatch = matchesArray.find(match => match.matchId === matchId);
                    if (currentMatch) {
                        updateMatchDisplay(currentMatch, result.scoreInfo);
                    }
                }
            }
            
            return false; // Continue updates
        } catch (error) {
            if (error.message.includes('429')) {
                console.log('Rate limit reached, waiting before next request...');
                // Wait for 2 minutes before trying again
                await new Promise(resolve => setTimeout(resolve, 120000));
            } else {
                console.error('Error in score fetch:', error);
            }
            return false; // Continue updates despite error
        }
    }

    // Initial fetch
    fetchScoreAndHandle().then(shouldStop => {
        if (shouldStop) return;
        
        // Set up the interval for subsequent fetches
        const updateInterval = setInterval(async () => {
            const shouldStop = await fetchScoreAndHandle();
            if (shouldStop) {
                clearInterval(updateInterval);
                window.currentUpdateInterval = null;
            }
        }, 60000); // Run every minute (60000 ms)
        
        // Store the interval ID
        window.currentUpdateInterval = updateInterval;
    });
}

// Add event listeners
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointerleave', onPointerUp);

// Start the application
init();
animate();

// Add at the top of your file
let currentMatchId = null;

// Add cleanup when page is unloaded
window.addEventListener('beforeunload', () => {
    if (window.currentUpdateInterval) {
        clearInterval(window.currentUpdateInterval);
    }
});
