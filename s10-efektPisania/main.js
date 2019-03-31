const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const text = ['w tym zadaniu', 'tekst', 'wyświetla się', 'aktywnie']
// txt[0][0];

let textIndex = 0;
let letterIndex = -13; //minus jesli chcemy żeby była chwila przerwy przed wyświetleneim tekstu

const addLetter = () => {
    if (letterIndex >= 0) {
        spanText.textContent += text[textIndex][letterIndex];
    }
    letterIndex++;
    if (letterIndex === text[textIndex].length) {
        console.log(textIndex, letterIndex);
        textIndex++;
        if (textIndex === text.length) return;

        return setTimeout(() => {
            letterIndex = -13;
            spanText.textContent = '';
            addLetter();
        }, 1200);

    }
    setTimeout(addLetter, 70);

}
addLetter();


const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 600);