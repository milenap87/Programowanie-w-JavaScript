const square = document.createElement('div');
document.body.appendChild(square);

//boolean dla rośnięcia/malenia
let grow = true;

//zmienna wielkość kwardatu:
let size = 10;
square.style.width = size + "px";
square.style.height = size + "px";

//chcemy żeby kwadrat miał max 50% vh:
//window.innerHeight * 0.5

window.addEventListener('scroll', function () {

    if (size >= window.innerWidth * 0.5) {
        grow = !grow;
    } else if (size == 0) {
        grow = true;
    }

    if (grow) {
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        size += 10;

    } else {
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        size -= 10;
    }

});