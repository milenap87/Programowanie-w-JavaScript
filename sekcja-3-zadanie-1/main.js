// function clicked() {
//     console.log('kliknęto');
// }; - ta nie działa

// const clicked = function () {
//     console.log('klik klik');
// }; - działa


// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log('kliknięto');
// }); - działa

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => console.log('kliknięto')); - dziala

// const btn = document.querySelector("button");
// btn.addEventListener('click', clicked); - działa

const btn = document.querySelector("button");
let number = 1; //poza funkcją żeby był dostępny gdy funkcja zakończy działanie i żeby działała iteracja przy każdym kliknięciu
btn.addEventListener('click', function () {
    // console.log('jestem kliknięty');
    const div = document.createElement('div');
    div.textContent = number;

    // number > 4 && number < 6
    if (number % 5 == 0) {
        div.classList.add("circle");
    }

    document.body.appendChild(div);
    number++;
});