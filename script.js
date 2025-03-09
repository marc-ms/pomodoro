// initial time
const initialTime = 0.1 * 60 // 25 minutes
let timeRemaining = initialTime;
let timerInterval;

// buttons references
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// button listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// functions
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateTime() {
    if (timeRemaining > 0) {
        timeRemaining--;
        updateTimer();
    } else {
        clearInterval(timerInterval);
        timeRemaining = initialTime;
    }
}

function startTimer() {
    console.log("starting");
    timerInterval = setInterval(updateTime, 1000);

}

function stopTimer() {
    console.log("stopped");
    clearInterval(timerInterval);
}

function resetTimer(resetButton) {
    console.log("reset");
    timeRemaining = initialTime;
}