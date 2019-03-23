let number = 1;

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const uList = document.querySelector('ul');
    const lItem = document.createElement('li');
    uList.appendChild(lItem);

    //dodawanie nieparzystych liczb do listy
    if (number % 2 == 1) {
        lItem.textContent = number;
    }

    //zwiększanie fontu elementów podzielnych przez 3 poprzed dodanie klasy
    if (number % 3 == 0) {
        lItem.classList.add('big');
    }

    number += 2;
});