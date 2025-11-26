// --- SOUND ENGINE ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playGlitter() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [400, 600, 800, 1000, 1500].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'sine'; osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, now + (i * 0.05)); gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.05) + 0.3); osc.start(now + (i * 0.05)); osc.stop(now + (i * 0.05) + 0.3); }); }
function playWinSound() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'triangle'; osc.frequency.value = freq; const dur = (i === 3) ? 1.0 : 0.2; gain.gain.setValueAtTime(0.2, now + (i * 0.15)); gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.15) + dur); osc.start(now + (i * 0.15)); osc.stop(now + (i * 0.15) + dur); }); }
function playLoseSound() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [300, 250, 200].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'sawtooth'; const start = now + (i * 0.4); osc.frequency.setValueAtTime(freq, start); osc.frequency.linearRampToValueAtTime(freq - 30, start + 0.3); gain.gain.setValueAtTime(0.2, start); gain.gain.linearRampToValueAtTime(0.001, start + 0.3); osc.start(start); osc.stop(start + 0.3); }); }
function playTick() { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = 800; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1); osc.start(); osc.stop(audioCtx.currentTime + 0.1); }
function playDlink() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.setValueAtTime(1200, t); osc.frequency.exponentialRampToValueAtTime(1800, t + 0.1); gain.gain.setValueAtTime(0.3, t); gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6); osc.start(t); osc.stop(t + 0.6); }
function playMeh() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type='triangle'; osc.frequency.setValueAtTime(400, t); osc.frequency.linearRampToValueAtTime(350, t + 0.4); gain.gain.setValueAtTime(0.2, t); gain.gain.linearRampToValueAtTime(0.01, t + 0.4); osc.start(t); osc.stop(t + 0.4); }
function playDat() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type='sawtooth'; osc.frequency.setValueAtTime(150, t); osc.frequency.linearRampToValueAtTime(50, t + 0.3); gain.gain.setValueAtTime(0.3, t); gain.gain.linearRampToValueAtTime(0.01, t + 0.3); osc.start(t); osc.stop(t + 0.3); }

// --- DATA ---
const levels = [
    { id: 1, name: "Turkey", region: "Eurasia / Middle East", lat: 38.96, lng: 35.24, img: "./images/silhouettes/tr.png" },
    { id: 2, name: "Italy", region: "Southern Europe", lat: 41.87, lng: 12.56, img: "./images/silhouettes/it.png" },
    { id: 3, name: "Australia", region: "Oceania", lat: -25.27, lng: 133.77, img: "./images/silhouettes/au.png" },
    { id: 4, name: "Madagascar", region: "East Africa", lat: -18.76, lng: 46.86, img: "./images/silhouettes/mg.png" },
    { id: 5, name: "Japan", region: "East Asia", lat: 36.20, lng: 138.25, img: "./images/silhouettes/jp.png" },
    { id: 6, name: "USA", region: "North America", lat: 37.09, lng: -95.71, img: "./images/silhouettes/us.png" },
    { id: 7, name: "Canada", region: "North America", lat: 56.13, lng: -106.34, img: "./images/silhouettes/ca.png" },
    { id: 8, name: "Mexico", region: "North America", lat: 23.63, lng: -102.55, img: "./images/silhouettes/mx.png" },
    { id: 9, name: "Cuba", region: "Caribbean", lat: 21.52, lng: -77.78, img: "./images/silhouettes/cu.png" },
    { id: 10, name: "Brazil", region: "South America", lat: -14.23, lng: -51.92, img: "./images/silhouettes/br.png" },
    { id: 11, name: "Argentina", region: "South America", lat: -38.41, lng: -63.61, img: "./images/silhouettes/ar.png" },
    { id: 12, name: "Chile", region: "South America", lat: -35.67, lng: -71.54, img: "./images/silhouettes/cl.png" },
    { id: 13, name: "Peru", region: "South America", lat: -9.19, lng: -75.01, img: "./images/silhouettes/pe.png" },
    { id: 14, name: "UK", region: "Western Europe", lat: 55.37, lng: -3.43, img: "./images/silhouettes/gb.png" },
    { id: 15, name: "France", region: "Western Europe", lat: 46.22, lng: 2.21, img: "./images/silhouettes/fr.png" },
    { id: 16, name: "Germany", region: "Central Europe", lat: 51.16, lng: 10.45, img: "./images/silhouettes/de.png" },
    { id: 17, name: "Spain", region: "Southern Europe", lat: 40.46, lng: -3.74, img: "./images/silhouettes/es.png" },
    { id: 18, name: "Norway", region: "Scandinavia", lat: 60.47, lng: 8.46, img: "./images/silhouettes/no.png" },
    { id: 19, name: "Greece", region: "Southeast Europe", lat: 39.07, lng: 21.82, img: "./images/silhouettes/gr.png" },
    { id: 20, name: "Iceland", region: "Northern Europe", lat: 64.96, lng: -19.02, img: "./images/silhouettes/is.png" },
    { id: 21, name: "China", region: "East Asia", lat: 35.86, lng: 104.19, img: "./images/silhouettes/cn.png" },
    { id: 22, name: "India", region: "South Asia", lat: 20.59, lng: 78.96, img: "./images/silhouettes/in.png" },
    { id: 23, name: "Indonesia", region: "Southeast Asia", lat: -0.78, lng: 113.92, img: "./images/silhouettes/id.png" },
    { id: 24, name: "South Korea", region: "East Asia", lat: 35.90, lng: 127.76, img: "./images/silhouettes/kr.png" },
    { id: 25, name: "Saudi Arabia", region: "Middle East", lat: 23.88, lng: 45.07, img: "./images/silhouettes/sa.png" },
    { id: 26, name: "Iran", region: "Middle East", lat: 32.42, lng: 53.68, img: "./images/silhouettes/ir.png" },
    { id: 27, name: "Egypt", region: "North Africa", lat: 26.82, lng: 30.80, img: "./images/silhouettes/eg.png" },
    { id: 28, name: "South Africa", region: "Southern Africa", lat: -30.55, lng: 22.93, img: "./images/silhouettes/za.png" },
    { id: 29, name: "Nigeria", region: "West Africa", lat: 9.08, lng: 8.67, img: "./images/silhouettes/ng.png" },
    { id: 30, name: "Kenya", region: "East Africa", lat: -0.02, lng: 37.90, img: "./images/silhouettes/ke.png" },
    { id: 31, name: "New Zealand", region: "Oceania", lat: -40.90, lng: 174.88, img: "./images/silhouettes/nz.png" },
    { id: 32, name: "Russia", region: "North Asia / East Europe", lat: 61.52, lng: 105.31, img: "./images/silhouettes/ru.png" }
];

// --- GAME VARIABLES ---
let currentLevel = null;
let score = 0;
let lives = 3;
let timeElapsed = 0;
let gameActive = false;
let isGuessingPhase = false;
let totalTimerInterval = null;
let combo = 0;
let isHardMode = false;
let roundTimerInterval = null;
let roundTimeLeft = 10;
let playerName = "Anonymous"; 
let sessionHighScores = [];
let confettiTriggered = false; // For 100 points
let isFirstRound = true; // For mascot talk

// Timers
let countdownInterval = null;
let resultTimeout = null;
let nextRoundTimeout = null;
let hardModeTimeout = null;
let startGameTimeout = null;
let bubbleTimeout = null; 

// Tutorial
let tutorialStepIndex = 0;
const tutorialSteps = [
    "Hello! I'm Geo. 👋 I'm your geography guide.",
    "A country SILHOUETTE will appear. You have 3 seconds to memorize it! 👁️",
    "When it vanishes, rotate the 3D globe, find the country, and CLICK. 🌍",
    "The closer you click, the more points you get. Watch out, you have 3 LIVES! ❤️",
    "5 correct guesses in a row unlock HARD MODE with a timer! 🔥",
    "Ready? Let's start! Good luck! 🚀"
];

// --- GLOBE SETUP ---
let world;

document.addEventListener('DOMContentLoaded', () => {
    if (typeof Globe !== 'undefined') {
        world = Globe()
            .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
            .arcColor('color').arcDashLength(0.4).arcDashGap(0.2).arcDashAnimateTime(1500).arcStroke(2)
            .ringColor('color').ringMaxRadius(6).ringPropagationSpeed(3).ringRepeatPeriod(500)
            .onGlobeClick(onGlobeClick)
            (document.getElementById('globeViz'));
    } else {
        alert("Globe.gl library failed to load!");
    }
});

// --- FUNCTIONS ---

function clearAllTimers() {
    clearInterval(totalTimerInterval);
    clearInterval(roundTimerInterval);
    clearInterval(countdownInterval);
    clearTimeout(resultTimeout);
    clearTimeout(nextRoundTimeout);
    clearTimeout(hardModeTimeout);
    clearTimeout(startGameTimeout);
    clearTimeout(bubbleTimeout);
}

// --- CONFETTI EFFECT ---
function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
    playWinSound();
}

function showTutorial() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playGlitter();
    document.getElementById('splash-screen').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('tutorial-screen').style.display = 'flex';
        tutorialStepIndex = 0; updateTutorialText();
    }, 500);
}

function nextTutorialStep() {
    playTick();
    tutorialStepIndex++;
    if (tutorialStepIndex >= tutorialSteps.length) closeTutorial();
    else updateTutorialText();
}

function updateTutorialText() {
    const textEl = document.getElementById('tutorial-text');
    const btn = document.getElementById('next-step-btn');
    textEl.style.opacity = 0;
    setTimeout(() => { textEl.innerText = tutorialSteps[tutorialStepIndex]; textEl.style.opacity = 1; }, 200);
    
    if (tutorialStepIndex === tutorialSteps.length - 1) {
        btn.innerText = "START! 🚀"; btn.style.background = "#4ade80"; btn.style.color = "#000";
    } else {
        btn.innerText = "NEXT ➔"; btn.style.background = ""; btn.style.color = "";
    }
}

function closeTutorial() {
    playWinSound();
    document.getElementById('tutorial-screen').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('tutorial-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'flex';
    }, 500);
}

function initGame() {
    clearAllTimers();
    gameActive = false;
    const input = document.getElementById('player-name-input');
    if (input.value.trim() === "") {
        input.classList.add('input-error');
        playDat();
        setTimeout(() => { input.classList.remove('input-error'); }, 300);
        return;
    }
    playerName = input.value.toUpperCase(); 
    playGlitter();
    const screen = document.getElementById('start-screen');
    screen.style.opacity = 0;
    startGameTimeout = setTimeout(() => { screen.style.display = 'none'; startGame(); }, 1000);
}

function startGame() {
    clearAllTimers();
    score = 0; lives = 3; timeElapsed = 0; combo = 0; isHardMode = false;
    confettiTriggered = false;
    isFirstRound = true;
    gameActive = false; 

    updateLivesUI();
    document.getElementById('score').innerText = score;
    document.getElementById('round-timer-card').style.display = 'none';
    
    document.getElementById('game-companion').style.display = 'none';
    
    const overlay = document.getElementById('silhouette-overlay');
    overlay.style.display = 'none'; overlay.style.opacity = 0;

    nextRound();

    totalTimerInterval = setInterval(() => {
        if (!gameActive) return;
        timeElapsed++;
        document.getElementById('total-timer').innerText = timeElapsed + "s";
    }, 1000);
}

function nextRound() {
    if (lives <= 0) { endGame(); return; }
    const randomIdx = Math.floor(Math.random() * levels.length);
    currentLevel = levels[randomIdx];
    if(world) { world.arcsData([]); world.ringsData([]); }

    document.getElementById('result-window').classList.remove('active');
    document.getElementById('companion-mascot').classList.remove('mascot-sad');
    document.getElementById('companion-bubble').style.opacity = 0;
    document.getElementById('game-companion').style.display = 'none'; 
    
    const overlay = document.getElementById('silhouette-overlay');
    const img = document.getElementById('shadow-img');
    const phaseText = document.getElementById('phase-text');
    img.src = currentLevel.img;
    
    overlay.style.display = 'flex'; 
    setTimeout(() => { overlay.style.opacity = 1; }, 50);
    overlay.style.pointerEvents = "all";
    
    let count = 3;
    phaseText.innerText = count;
    phaseText.style.color = "#ffcc00";
    playTick();

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            phaseText.innerText = count;
            playTick();
        } else if (count === 0) {
            phaseText.innerText = "FIND!";
            phaseText.style.color = "#4ade80";
        } else {
            clearInterval(countdownInterval);
            overlay.style.opacity = 0;
            setTimeout(() => { overlay.style.display = 'none'; }, 500);
            overlay.style.pointerEvents = "none";
            
            gameActive = true;
            isGuessingPhase = true;
            
            document.getElementById('game-companion').style.display = 'block';
            
            if (isFirstRound) {
                const bubble = document.getElementById('companion-bubble');
                bubble.innerText = "Need a hint?";
                bubble.style.opacity = 1;
                
                clearTimeout(bubbleTimeout); 
                bubbleTimeout = setTimeout(() => { 
                    bubble.style.opacity = 0; 
                }, 3000);
                
                isFirstRound = false;
            }
            
            if (isHardMode) startRoundTimer();
        }
    }, 1000);
}

function startRoundTimer() {
    roundTimeLeft = 10;
    document.getElementById('round-timer').innerText = roundTimeLeft;
    if (roundTimerInterval) clearInterval(roundTimerInterval);
    roundTimerInterval = setInterval(() => {
        if (!gameActive || !isGuessingPhase) return;
        roundTimeLeft--;
        document.getElementById('round-timer').innerText = roundTimeLeft;
        if (roundTimeLeft <= 0) {
            clearInterval(roundTimerInterval);
            lives--; updateLivesUI(); playDat();
            
            const resWindow = document.getElementById('result-window');
            document.getElementById('result-country').innerText = "TIME UP!";
            document.getElementById('result-status').innerText = currentLevel.name;
            document.getElementById('result-status').style.color = "#f87171";
            document.getElementById('result-distance').innerText = "No Answer";
            resWindow.classList.add('active');
            
            document.getElementById('companion-mascot').classList.add('mascot-sad');

            nextRoundTimeout = setTimeout(() => { if (lives > 0) nextRound(); else endGame(); }, 3000);
        }
    }, 1000);
}

function onGlobeClick({ lat, lng }) {
    if (!isGuessingPhase || !gameActive) return;
    if (roundTimerInterval) clearInterval(roundTimerInterval);
    const distance = getDistanceFromLatLonInKm(lat, lng, currentLevel.lat, currentLevel.lng);
    processGuess(lat, lng, distance);
}

function processGuess(clickedLat, clickedLng, distance) {
    isGuessingPhase = false;
    let points = 0; let feedbackText = ""; let color = "#f87171";

    if (distance <= 600) { 
        points = 10; feedbackText = "PERFECT!"; color = "#4ade80"; playDlink(); combo++; 
    } 
    else if (distance <= 2500) { 
        points = 5; feedbackText = "GOOD"; color = "#facc15"; playMeh(); combo = 0; 
    } 
    else { 
        lives--; feedbackText = "TOO FAR!"; updateLivesUI(); color = "#f87171"; playDat(); combo = 0; 
        document.getElementById('companion-mascot').classList.add('mascot-sad');
    }

    score += points;
    document.getElementById('score').innerText = score;
    
    if (!confettiTriggered && score >= 100) {
        fireConfetti();
        confettiTriggered = true;
    }

    document.getElementById('result-country').innerText = currentLevel.name;
    const stat = document.getElementById('result-status');
    stat.innerText = feedbackText;
    stat.style.color = color;
    document.getElementById('result-distance').innerText = `${Math.floor(distance)} km`;

    if(world) {
        const arcData = [{ startLat: clickedLat, startLng: clickedLng, endLat: currentLevel.lat, endLng: currentLevel.lng, color: color }];
        world.arcsData(arcData);
        const ringData = [{ lat: currentLevel.lat, lng: currentLevel.lng, color: color }];
        world.ringsData(ringData);
        world.pointOfView({ lat: currentLevel.lat, lng: currentLevel.lng, altitude: 2 }, 1000);
    }

    resultTimeout = setTimeout(() => { document.getElementById('result-window').classList.add('active'); }, 1200);

    if (combo >= 5 && !isHardMode) { 
        hardModeTimeout = setTimeout(() => { openHardModeAlert(); }, 2000); 
        return; 
    }

    nextRoundTimeout = setTimeout(() => {
        if (lives > 0) { 
            if(world) world.pointOfView({ altitude: 2.5 }, 1000); 
            nextRound(); 
        } 
        else { endGame(); }
    }, 3200);
}

function openHardModeAlert() { 
    gameActive = false; 
    document.getElementById('result-window').classList.remove('active'); 
    document.getElementById('hard-mode-alert').style.display = 'flex'; 
    playGlitter(); 
}

function closeHardModeAlert() { 
    document.getElementById('hard-mode-alert').style.display = 'none'; 
    isHardMode = true; 
    gameActive = true; 
    document.getElementById('round-timer-card').style.display = 'block'; 
    if(world) world.pointOfView({ altitude: 2.5 }, 1000); 
    nextRound(); 
}

function updateHighScores(finalScore) {
    let scores = JSON.parse(sessionStorage.getItem('shadowLocateScores')) || [];
    scores.push({ name: playerName, score: finalScore });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);
    sessionStorage.setItem('shadowLocateScores', JSON.stringify(scores));
    const list = document.getElementById('highscore-list');
    list.innerHTML = scores.map((s, index) => 
        `<li><span><span class="player-rank">${index + 1}.</span> ${s.name}</span> <span>${s.score} P</span></li>`
    ).join('');
}

function resetGame() { location.reload(); }

function useHint() {
    if (!gameActive || !isGuessingPhase) return;
    if (score < 5) { 
        playDat(); 
        const bubble = document.getElementById('companion-bubble');
        bubble.innerText = "Not enough points!";
        bubble.style.opacity = 1;
        bubble.style.color = "#1e293b";
        setTimeout(() => { bubble.style.opacity = 0; }, 2000);
        return; 
    }
    score -= 5; 
    document.getElementById('score').innerText = score;
    const bubble = document.getElementById('companion-bubble');
    bubble.innerText = currentLevel.region.toUpperCase();
    bubble.style.opacity = 1;
    bubble.style.color = "#1e293b";
    playGlitter(); 
}

function shareScore() {
    const shareText = `🌍 I played Shadow Locate! \n🏆 Score: ${score} \n⏱️ Time: ${timeElapsed}s \n\nTry it now!`;
    navigator.clipboard.writeText(shareText).then(() => {
        const btn = document.querySelector('button[onclick="shareScore()"]');
        const originalText = btn.innerText;
        btn.innerText = "COPIED! ✅";
        setTimeout(() => { btn.innerText = originalText; }, 2000);
    });
}

function updateLivesUI() { let hearts = ""; for(let i=0; i<lives; i++) hearts += "♥"; document.getElementById('lives').innerText = hearts; }

function endGame() {
    gameActive = false; 
    clearAllTimers(); 
    document.getElementById('result-window').classList.remove('active'); 
    document.getElementById('game-companion').style.display = 'none'; 
    
    const gameOverScreen = document.getElementById('game-over');
    const endTitle = document.getElementById('end-title');
    const endMsg = document.getElementById('end-msg');
    
    gameOverScreen.style.display = 'flex';
    document.getElementById('final-score').innerText = "Score: " + score;
    endMsg.innerText = `${playerName}, you survived for ${timeElapsed} seconds!`;
    
    updateHighScores(score);

    if (score > 50) { playWinSound(); endTitle.innerText = "LEGENDARY!"; endTitle.style.color = "#4ade80"; } 
    else { playLoseSound(); endTitle.innerText = "GAME OVER"; endTitle.style.color = "#f87171"; }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) { const R = 6371; const dLat = deg2rad(lat2 - lat1); const dLon = deg2rad(lon2 - lon1); const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c; }
function deg2rad(deg) { return deg * (Math.PI / 180); }