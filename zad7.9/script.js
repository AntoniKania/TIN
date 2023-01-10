const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", startCounting);
stopBtn.addEventListener("click", stopCounting)

let i = 10;
let timer;

function startCounting() {
    timer = setInterval(function () {
        if (i === 0) {
            console.log("Odliczanie zakonczone")
            i = 10;
            clearInterval(timer);
        } else {
            console.log(i);
            i--;
        }
    }, 1000);
}

function stopCounting() {
    clearInterval(timer);
    console.log("Odliczanie zatrzymane")
    i = 10;
}