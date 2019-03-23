const btn = document.querySelector("button");
let number = 1;
btn.addEventListener('click', function () {

    const div = document.createElement('div');
    div.textContent = number;

    if (number % 5 == 0) {
        div.classList.add("circle");
    }

    document.body.appendChild(div);
    number++;
});




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