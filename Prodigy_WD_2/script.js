let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
}

function updateDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function addLap() {
    const lapItem = document.createElement('li');
    lapItem.className = 'lap-item';
    lapItem.textContent = formatTime(elapsedTime);
    lapList.appendChild(lapItem);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        isRunning = true;
    }
});

pauseBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseTimer();
        isRunning = false;
    }
});

resetBtn.addEventListener('click', () => {
    resetTimer();
    isRunning = false;
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        addLap();
    }
});
//comment
// Initial display update
updateDisplay();
