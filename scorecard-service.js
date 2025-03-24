import { database } from './firebase-config.js';
import { ref, get, set, onValue } from "firebase/database";

let lastUpdateTime = 0;

// Function to get all match IDs from Firebase
async function getMatchIdsFromFirebase() {
    console.log('Fetching match IDs from Firebase...');
    const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
    try {
        const snapshot = await get(matchScheduleRef);
        if (snapshot.exists()) {
            const matches = snapshot.val();
            const matchIds = matches.map(match => match.matchId);
            console.log('Retrieved match IDs:', matchIds);
            return matchIds;
        } else {
            console.log('No matches found in Firebase');
            return [];
        }
    } catch (error) {
        console.error('Error fetching match IDs:', error);
        return [];
    }
}

export async function fetchAndUpdateScore(matchId) {
    console.log(`Fetching scorecard for match ID: ${matchId}`);
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5eb692fdf9msh6a544cac397e4d4p1793ddjsn9934e78afac8',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    try {
        console.log('RapidAPI is called for match scorecard');
        const response = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`, options);
        const data = await response.json();
        
        console.log(`Received scorecard data for match ${matchId}:`, data);

        // Check if match is complete
        if (data.isMatchComplete) {
            console.log(`Match ${matchId} is complete. Status: ${data.status}`);
            // Store final status in Firebase
            const scoreRef = ref(database, `IPL Data/Live Scores/${matchId}`);
            await set(scoreRef, {
                matchId: matchId,
                matchStatus: data.status,
                isComplete: true,
                lastUpdated: Date.now()
            });
            return {
                isComplete: true,
                status: data.status,
                matchId: matchId
            };
        }

        // Get the current innings (last one in the array)
        const currentInnings = data.scorecard?.[data.scorecard.length - 1];
        console.log('Current innings data:', currentInnings);

        if (!currentInnings) {
            console.log(`No current innings data available for match ${matchId}`);
            return null;
        }

        // Extract match info with complete score details
        const scoreInfo = {
            matchId: matchId,
            matchStatus: data.status,
            currentInnings: {
                battingTeam: currentInnings.batTeamSName || '',
                score: parseInt(currentInnings.score) || 0,
                wickets: parseInt(currentInnings.wickets) || 0,
                overs: parseFloat(currentInnings.overs) || 0,
                runRate: parseFloat(currentInnings.runRate) || 0
            },
            lastUpdated: Date.now()
        };

        console.log(`Formatted score info for Firebase:`, scoreInfo);

        // Store in Firebase
        const scoreRef = ref(database, `IPL Data/Live Scores/${matchId}`);
        await set(scoreRef, scoreInfo);
        console.log(`Successfully stored score info in Firebase for match ${matchId}`);
        
        return {
            isComplete: false,
            scoreInfo: scoreInfo
        };
    } catch (error) {
        console.error(`Error fetching score for match ${matchId}:`, error);
        throw error;
    }
}

function formatScoreDisplay(scoreInfo) {
    const { currentInnings, status } = scoreInfo;
    if (!currentInnings.battingTeam) return status;

    return `*${currentInnings.battingTeam}: ${currentInnings.score}/${currentInnings.wickets} (${currentInnings.overs} ov, RR: ${currentInnings.runRate})`;
}

// Modified to check match timing before fetching scores
export async function startScoreUpdates() {
    console.log('Starting score update service...');
    
    try {
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const snapshot = await get(matchScheduleRef);
        
        if (!snapshot.exists()) {
            console.log('No matches found in schedule');
            return;
        }

        const matches = snapshot.val();
        
        // Update scores every minute (60000ms)
        const intervalId = setInterval(async () => {
            // Check if enough time has passed since last update
            if (!checkUpdateTime()) {
                console.log('Skipping this interval - too soon since last update');
                return;
            }

            console.log('Starting periodic score update at:', new Date().toISOString());
            
            for (const match of matches) {
                try {
                    const matchTime = parseInt(match.timing.startTime);
                    const now = Date.now();
                    const timeUntilMatch = matchTime - now;
                    
                    // Check if match is within 28 minutes of start or has already started
                    if (timeUntilMatch <= 28 * 60 * 1000 || timeUntilMatch < 0) {
                        console.log(`Fetching score for match ${match.matchId} (within 28 mins window or started)`);
                        await fetchAndUpdateScore(match.matchId);
                    } else {
                        console.log(`Match ${match.matchId} starts in ${Math.round(timeUntilMatch/60000)} minutes`);
                    }
                } catch (error) {
                    console.error(`Error processing match ${match.matchId}:`, error);
                }
            }
        }, 60000); // 60 seconds interval

        // Return the interval ID for cleanup
        return intervalId;

    } catch (error) {
        console.error('Error in score update service:', error);
    }
}

function formatScore(scoreCard) {
    if (!scoreCard || !scoreCard.length) {
        console.log('Match not started or score not available');
        return "Match not started";
    }

    const currentInningsScore = scoreCard[scoreCard.length - 1];
    if (!currentInningsScore) {
        console.log('Current innings score not available');
        return "Score not available";
    }

    const formattedScore = `${currentInningsScore.batTeamName}: ${currentInningsScore.score}/${currentInningsScore.wickets} (${currentInningsScore.overs} ov)`;
    console.log('Formatted score:', formattedScore);
    return formattedScore;
}

export function subscribeToMatchScore(matchId, callback) {
    console.log(`Setting up score subscription for match ${matchId}`);
    const scoreRef = ref(database, `IPL Data/Live Scores/${matchId}`);
    
    return onValue(scoreRef, (snapshot) => {
        const scoreData = snapshot.val();
        console.log(`Received Firebase update for match ${matchId}:`, scoreData);
        callback(scoreData);
    });
}

// Function to get all live scores
export async function getAllLiveScores() {
    const scoresRef = ref(database, 'IPL Data/Live Scores');
    const snapshot = await get(scoresRef);
    return snapshot.val() || {};
}

// Function to get next match from schedule
export async function getNextMatch(currentMatchId) {
    console.log('Fetching next match after:', currentMatchId);
    
    try {
        // Get match schedule from Firebase
        const matchScheduleRef = ref(database, 'IPL Data/Match Schedule');
        const snapshot = await get(matchScheduleRef);
        
        if (!snapshot.exists()) {
            console.log('No match schedule found in Firebase');
            return null;
        }

        const matches = snapshot.val();
        console.log('All matches:', matches);

        // Convert matches to array if it's an object
        const matchesArray = Array.isArray(matches) ? matches : Object.values(matches);
        
        // Find current match index
        const currentIndex = matchesArray.findIndex(match => match.matchId === currentMatchId);
        console.log('Current match index:', currentIndex);

        if (currentIndex === -1) {
            console.log('Current match not found in schedule');
            return null;
        }

        // Get next match
        const nextMatch = matchesArray[currentIndex + 1];
        console.log('Found next match:', nextMatch);

        if (!nextMatch) {
            console.log('No next match found');
            return null;
        }

        // Format next match data
        const formattedNextMatch = {
            matchId: nextMatch.matchId,
            matchNumber: nextMatch.matchNumber,
            teams: {
                team1: nextMatch.teams.team1,
                team2: nextMatch.teams.team2
            },
            venue: {
                ground: nextMatch.venue.ground,
                city: nextMatch.venue.city
            },
            timing: {
                startTime: nextMatch.timing.startTime
            }
        };

        console.log('Formatted next match:', formattedNextMatch);
        return formattedNextMatch;

    } catch (error) {
        console.error('Error getting next match:', error);
        return null;
    }
}

export function checkUpdateTime() {
    const now = Date.now();
    if (now - lastUpdateTime < 58000) {
        console.log('Skipping update - too soon since last update');
        return false;
    }
    lastUpdateTime = now;
    return true;
}