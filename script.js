// --- SESLER (AYNI) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playGlitter() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [400, 600, 800, 1000, 1500].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'sine'; osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, now + (i * 0.05)); gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.05) + 0.3); osc.start(now + (i * 0.05)); osc.stop(now + (i * 0.05) + 0.3); }); }
function playWinSound() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'triangle'; osc.frequency.value = freq; const dur = (i === 3) ? 1.0 : 0.2; gain.gain.setValueAtTime(0.2, now + (i * 0.15)); gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.15) + dur); osc.start(now + (i * 0.15)); osc.stop(now + (i * 0.15) + dur); }); }
function playLoseSound() { if (audioCtx.state === 'suspended') audioCtx.resume(); const now = audioCtx.currentTime; [300, 250, 200].forEach((freq, i) => { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type = 'sawtooth'; const start = now + (i * 0.4); osc.frequency.setValueAtTime(freq, start); osc.frequency.linearRampToValueAtTime(freq - 30, start + 0.3); gain.gain.setValueAtTime(0.2, start); gain.gain.linearRampToValueAtTime(0.001, start + 0.3); osc.start(start); osc.stop(start + 0.3); }); }
function playTick() { const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = 800; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1); osc.start(); osc.stop(audioCtx.currentTime + 0.1); }
function playDlink() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.setValueAtTime(1200, t); osc.frequency.exponentialRampToValueAtTime(1800, t + 0.1); gain.gain.setValueAtTime(0.3, t); gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6); osc.start(t); osc.stop(t + 0.6); }
function playMeh() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type='triangle'; osc.frequency.setValueAtTime(400, t); osc.frequency.linearRampToValueAtTime(350, t + 0.4); gain.gain.setValueAtTime(0.2, t); gain.gain.linearRampToValueAtTime(0.01, t + 0.4); osc.start(t); osc.stop(t + 0.4); }
function playDat() { const t = audioCtx.currentTime; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.type='sawtooth'; osc.frequency.setValueAtTime(150, t); osc.frequency.linearRampToValueAtTime(50, t + 0.3); gain.gain.setValueAtTime(0.3, t); gain.gain.linearRampToValueAtTime(0.01, t + 0.3); osc.start(t); osc.stop(t + 0.3); }

// --- DATA (AYNI) ---
const levels = [
    { id: 1, name: "Türkiye", region: "Avrasya / Orta Doğu", lat: 38.96, lng: 35.24, img: "./images/silhouettes/tr.png" },
    { id: 2, name: "İtalya", region: "Güney Avrupa", lat: 41.87, lng: 12.56, img: "./images/silhouettes/it.png" },
    { id: 3, name: "Avustralya", region: "Okyanusya", lat: -25.27, lng: 133.77, img: "./images/silhouettes/au.png" },
    { id: 4, name: "Madagaskar", region: "Doğu Afrika", lat: -18.76, lng: 46.86, img: "./images/silhouettes/mg.png" },
    { id: 5, name: "Japonya", region: "Doğu Asya", lat: 36.20, lng: 138.25, img: "./images/silhouettes/jp.png" },
    { id: 6, name: "Amerika (ABD)", region: "Kuzey Amerika", lat: 37.09, lng: -95.71, img: "./images/silhouettes/us.png" },
    { id: 7, name: "Kanada", region: "Kuzey Amerika", lat: 56.13, lng: -106.34, img: "./images/silhouettes/ca.png" },
    { id: 8, name: "Meksika", region: "Kuzey Amerika", lat: 23.63, lng: -102.55, img: "./images/silhouettes/mx.png" },
    { id: 9, name: "Küba", region: "Karayipler", lat: 21.52, lng: -77.78, img: "./images/silhouettes/cu.png" },
    { id: 10, name: "Brezilya", region: "Güney Amerika", lat: -14.23, lng: -51.92, img: "./images/silhouettes/br.png" },
    { id: 11, name: "Arjantin", region: "Güney Amerika", lat: -38.41, lng: -63.61, img: "./images/silhouettes/ar.png" },
    { id: 12, name: "Şili", region: "Güney Amerika", lat: -35.67, lng: -71.54, img: "./images/silhouettes/cl.png" },
    { id: 13, name: "Peru", region: "Güney Amerika", lat: -9.19, lng: -75.01, img: "./images/silhouettes/pe.png" },
    { id: 14, name: "İngiltere", region: "Batı Avrupa", lat: 55.37, lng: -3.43, img: "./images/silhouettes/gb.png" },
    { id: 15, name: "Fransa", region: "Batı Avrupa", lat: 46.22, lng: 2.21, img: "./images/silhouettes/fr.png" },
    { id: 16, name: "Almanya", region: "Orta Avrupa", lat: 51.16, lng: 10.45, img: "./images/silhouettes/de.png" },
    { id: 17, name: "İspanya", region: "Güney Avrupa", lat: 40.46, lng: -3.74, img: "./images/silhouettes/es.png" },
    { id: 18, name: "Norveç", region: "İskandinavya", lat: 60.47, lng: 8.46, img: "./images/silhouettes/no.png" },
    { id: 19, name: "Yunanistan", region: "Güneydoğu Avrupa", lat: 39.07, lng: 21.82, img: "./images/silhouettes/gr.png" },
    { id: 20, name: "İzlanda", region: "Kuzey Avrupa", lat: 64.96, lng: -19.02, img: "./images/silhouettes/is.png" },
    { id: 21, name: "Çin", region: "Doğu Asya", lat: 35.86, lng: 104.19, img: "./images/silhouettes/cn.png" },
    { id: 22, name: "Hindistan", region: "Güney Asya", lat: 20.59, lng: 78.96, img: "./images/silhouettes/in.png" },
    { id: 23, name: "Endonezya", region: "Güneydoğu Asya", lat: -0.78, lng: 113.92, img: "./images/silhouettes/id.png" },
    { id: 24, name: "Güney Kore", region: "Doğu Asya", lat: 35.90, lng: 127.76, img: "./images/silhouettes/kr.png" },
    { id: 25, name: "Suudi Arabistan", region: "Orta Doğu", lat: 23.88, lng: 45.07, img: "./images/silhouettes/sa.png" },
    { id: 26, name: "İran", region: "Orta Doğu", lat: 32.42, lng: 53.68, img: "./images/silhouettes/ir.png" },
    { id: 27, name: "Mısır", region: "Kuzey Afrika", lat: 26.82, lng: 30.80, img: "./images/silhouettes/eg.png" },
    { id: 28, name: "Güney Afrika", region: "Güney Afrika", lat: -30.55, lng: 22.93, img: "./images/silhouettes/za.png" },
    { id: 29, name: "Nijerya", region: "Batı Afrika", lat: 9.08, lng: 8.67, img: "./images/silhouettes/ng.png" },
    { id: 30, name: "Kenya", region: "Doğu Afrika", lat: -0.02, lng: 37.90, img: "./images/silhouettes/ke.png" },
    { id: 31, name: "Yeni Zelanda", region: "Okyanusya", lat: -40.90, lng: 174.88, img: "./images/silhouettes/nz.png" },
    { id: 32, name: "Rusya", region: "Kuzey Asya / Doğu Avrupa", lat: 61.52, lng: 105.31, img: "./images/silhouettes/ru.png" }
];

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
let playerName = "Anonim"; 
let sessionHighScores = [];

const world = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .arcColor('color').arcDashLength(0.4).arcDashGap(0.2).arcDashAnimateTime(1500).arcStroke(2)
    .ringColor('color').ringMaxRadius(6).ringPropagationSpeed(3).ringRepeatPeriod(500)
    .onGlobeClick(onGlobeClick)
    (document.getElementById('globeViz'));

// --- YENİ: OYUN AKIŞI ---

function showTutorial() {
    const splash = document.getElementById('splash-screen');
    const tutorial = document.getElementById('tutorial-screen');
    
    // Ses motorunu başlat (Tarayıcı izni için)
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playGlitter();

    splash.style.opacity = 0;
    setTimeout(() => {
        splash.style.display = 'none';
        tutorial.style.display = 'flex';
        // Fade-in efekti için
        tutorial.style.opacity = 0;
        setTimeout(() => { tutorial.style.opacity = 1; }, 10);
    }, 800);
}

function closeTutorial() {
    const tutScreen = document.getElementById('tutorial-screen');
    const startScreen = document.getElementById('start-screen');
    tutScreen.style.opacity = 0;
    setTimeout(() => {
        tutScreen.style.display = 'none';
        startScreen.style.display = 'flex'; 
        startScreen.style.opacity = 0;
        setTimeout(() => { startScreen.style.opacity = 1; }, 10);
    }, 500);
}

function initGame() {
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
    setTimeout(() => { screen.style.display = 'none'; startGame(); }, 1000);
}

function startGame() {
    score = 0; lives = 3; timeElapsed = 0; combo = 0; isHardMode = false;
    updateLivesUI();
    document.getElementById('score').innerText = score;
    document.getElementById('round-timer-card').style.display = 'none';
    nextRound();
    if (totalTimerInterval) clearInterval(totalTimerInterval);
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
    world.arcsData([]); world.ringsData([]);

    document.getElementById('result-window').classList.remove('active');
    document.getElementById('hint-window').classList.remove('active');
    const hintBtn = document.getElementById('hint-btn');
    hintBtn.disabled = false;
    hintBtn.innerText = "💡 İPUCU (-5)";

    const overlay = document.getElementById('silhouette-overlay');
    const img = document.getElementById('shadow-img');
    const phaseText = document.getElementById('phase-text');
    img.src = currentLevel.img;
    overlay.style.display = 'flex'; overlay.style.opacity = 1; overlay.style.pointerEvents = "all";
    
    let count = 3;
    phaseText.innerText = count;
    phaseText.style.color = "#ffcc00";
    playTick();

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            phaseText.innerText = count;
            playTick();
        } else if (count === 0) {
            phaseText.innerText = "BUL!";
            phaseText.style.color = "#4ade80";
        } else {
            clearInterval(countdownInterval);
            overlay.style.opacity = 0;
            setTimeout(() => { overlay.style.display = 'none'; }, 500);
            overlay.style.pointerEvents = "none";
            gameActive = true;
            isGuessingPhase = true;
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
            document.getElementById('result-country').innerText = "SÜRE BİTTİ!";
            document.getElementById('result-status').innerText = currentLevel.name;
            document.getElementById('result-status').style.color = "#f87171";
            document.getElementById('result-distance').innerText = "Cevap veremedin";
            resWindow.classList.add('active');
            setTimeout(() => { if (lives > 0) nextRound(); else endGame(); }, 3000);
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

    if (distance <= 600) { points = 10; feedbackText = "MÜKEMMEL!"; color = "#4ade80"; playDlink(); combo++; } 
    else if (distance <= 2500) { points = 5; feedbackText = "İDARE EDER"; color = "#facc15"; playMeh(); combo = 0; } 
    else { lives--; feedbackText = "ÇOK UZAK!"; updateLivesUI(); color = "#f87171"; playDat(); combo = 0; }

    score += points;
    document.getElementById('score').innerText = score;
    
    document.getElementById('result-country').innerText = currentLevel.name;
    const stat = document.getElementById('result-status');
    stat.innerText = feedbackText;
    stat.style.color = color;
    document.getElementById('result-distance').innerText = `${Math.floor(distance)} km`;

    const arcData = [{ startLat: clickedLat, startLng: clickedLng, endLat: currentLevel.lat, endLng: currentLevel.lng, color: color }];
    world.arcsData(arcData);
    const ringData = [{ lat: currentLevel.lat, lng: currentLevel.lng, color: color }];
    world.ringsData(ringData);
    world.pointOfView({ lat: currentLevel.lat, lng: currentLevel.lng, altitude: 2 }, 1000);

    setTimeout(() => { document.getElementById('result-window').classList.add('active'); }, 1200);

    if (combo >= 3 && !isHardMode) { 
        setTimeout(() => { openHardModeAlert(); }, 2000); 
        return; 
    }

    setTimeout(() => {
        if (lives > 0) { world.pointOfView({ altitude: 2.5 }, 1000); nextRound(); } 
        else { endGame(); }
    }, 3200);
}

function openHardModeAlert() { 
    gameActive = false; 
    document.getElementById('result-window').classList.remove('active'); 
    document.getElementById('hard-mode-alert').style.display = 'flex'; 
    playGlitter(); 
}

function closeHardModeAlert() { document.getElementById('hard-mode-alert').style.display = 'none'; isHardMode = true; gameActive = true; document.getElementById('round-timer-card').style.display = 'block'; world.pointOfView({ altitude: 2.5 }, 1000); nextRound(); }

function updateHighScores(finalScore) {
    sessionHighScores.push({ name: playerName, score: finalScore });
    sessionHighScores.sort((a, b) => b.score - a.score);
    const top5 = sessionHighScores.slice(0, 5);
    const list = document.getElementById('highscore-list');
    list.innerHTML = top5.map((s, index) => 
        `<li>
            <span><span class="player-rank">${index + 1}.</span> ${s.name}</span> 
            <span>${s.score} P</span>
        </li>`
    ).join('');
}

// --- YENİ: OYUNU SIFIRLAMA (KAPAK EKRANINA DÖNER) ---
function resetGame() {
    document.getElementById('game-over').style.display = 'none';
    // Kapak Ekranını (Splash) tekrar aç
    const splash = document.getElementById('splash-screen');
    splash.style.display = 'flex';
    setTimeout(() => { splash.style.opacity = 1; }, 10);
    
    // İsim kutusunu temizle
    document.getElementById('player-name-input').value = "";
    
    // Dünyayı temizle
    world.arcsData([]);
    world.ringsData([]);
    world.pointOfView({ altitude: 2.5 }, 1000);
}

function useHint() {
    if (!gameActive || !isGuessingPhase) return;
    const btn = document.getElementById('hint-btn');
    if (score < 5) { playDat(); btn.innerText = "YETERSİZ PUAN!"; setTimeout(() => { btn.innerText = "💡 İPUCU (-5)"; }, 1000); return; }
    score -= 5; document.getElementById('score').innerText = score;
    const hintWindow = document.getElementById('hint-window');
    document.getElementById('hint-text').innerText = currentLevel.region.toUpperCase();
    hintWindow.classList.add('active'); playGlitter(); btn.disabled = true; btn.style.opacity = "0.5";
}

function updateLivesUI() { let hearts = ""; for(let i=0; i<lives; i++) hearts += "♥"; document.getElementById('lives').innerText = hearts; }

function endGame() {
    gameActive = false; clearInterval(totalTimerInterval); clearInterval(roundTimerInterval);
    document.getElementById('result-window').classList.remove('active'); 
    
    const gameOverScreen = document.getElementById('game-over');
    const endTitle = document.getElementById('end-title');
    const endMsg = document.getElementById('end-msg');
    
    gameOverScreen.style.display = 'flex';
    document.getElementById('final-score').innerText = "Skor: " + score;
    endMsg.innerText = `${playerName}, ${timeElapsed} saniye dayandın!`;
    
    updateHighScores(score);

    if (score > 50) { playWinSound(); endTitle.innerText = "EFSANE!"; endTitle.style.color = "#4ade80"; } 
    else { playLoseSound(); endTitle.innerText = "OYUN BİTTİ"; endTitle.style.color = "#f87171"; }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) { const R = 6371; const dLat = deg2rad(lat2 - lat1); const dLon = deg2rad(lon2 - lon1); const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c; }
function deg2rad(deg) { return deg * (Math.PI / 180); }