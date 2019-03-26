const button = document.querySelector('button');
let list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
// const listItems = [...document.getElementsByTagName('li')];
let grow = 10;


// tak:
// const enlargeList = function () {
//     grow++;
//     for (let i = 0; i <= listItems.length; i++) {
//         listItems[i].style.display = 'block';
//         listItems[i].style.fontSize = grow + 'px';
//         // grow++;
//     }
// }
// button.addEventListener('click', enlargeList);



// lub z foreach:
button.addEventListener('click', () => {
    grow++;

    listItems.forEach(listItem => {
        listItem.style.display = 'block';
        listItem.style.fontSize = grow + 'px';
    });
});