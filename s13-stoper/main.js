const startBTN = document.querySelector('.main');
const resetBTN = document.querySelector('.reset');
const timeDisplay = document.querySelector('p ~ div');
let time = 0;
let active = false;
let idInterval;

const countTime = () => {

    if (!active) {
        active = !active;
        startBTN.textContent = 'Pauza';
        idInterval = setInterval(start, 10);
    } else {
        active = !active;
        startBTN.textContent = "Start";
        //pauzujemy interval ale musimy mieć ID wywołanego wcześniej setInterval
        clearInterval(idInterval);
    }
};

const start = () => {
    time++;
    timeDisplay.textContent = (time / 100).toFixed(2);
}

const resetTime = () => {
    time = 0;
    clearInterval(idInterval);
    timeDisplay.textContent = "---";
}


startBTN.addEventListener('click', countTime);
resetBTN.addEventListener('click', resetTime);