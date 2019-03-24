document.body.style.height = '10000px';
document.body.style.margin = '0';

let size = 0;
let grow = true;
const div = document.createElement('div');
document.body.appendChild(div);

div.style.width = '100%';
div.style.height = size + 'px';
// div.style.backgroundColor = 'green';
div.style.position = 'fixed';

const changeHeight = function () {

    if (grow) {
        div.style.backgroundColor = 'green';
        size += 5;
    } else {
        div.style.backgroundColor = 'red';
        size -= 5;
    }
    div.style.height = size + 'px';

    if (size > window.innerHeight / 2) {
        grow = false;
    } else if (size <= 0) {
        grow = true;
    }
};

document.addEventListener('scroll', changeHeight);