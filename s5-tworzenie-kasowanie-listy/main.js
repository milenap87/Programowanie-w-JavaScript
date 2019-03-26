let size = 10;
let orderElement = 1;
const button = document.createElement('button');
const clearButton = document.createElement('button');
let ul = document.createElement('ul');
let list = document.querySelector('ul');

const init = () => {
    button.innerText = 'Dodaj 10 elementów listy';
    clearButton.textContent = 'Wyczyść listę';
    document.body.appendChild(button);
    document.body.appendChild(clearButton);
    document.body.appendChild(ul);
};

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        let item = document.createElement('li');
        let list = document.querySelector('ul');
        list.appendChild(item);
        item.style.fontSize = size + 'px';
        item.innerText = 'element listy ' + orderElement;
        orderElement++;
        size++;
    };
};

const clearElements = () => {
    document.querySelector('ul').textContent = '';
    orderElement = 1;
    size = 10;
};

init();
button.addEventListener('click', createLiElements);
clearButton.addEventListener('click', clearElements);