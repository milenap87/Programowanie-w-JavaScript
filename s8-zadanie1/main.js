const oracle = ['tak', 'nie'];
const addAnswer = document.querySelector('.add');
const clearAnswer = document.querySelector('.clear');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');



const askOracle = () => {
    const random = Math.floor((Math.random() * oracle.length));
    const answer = oracle[random];
    h1.textContent = answer;
};


const showOracle = () => {
    let messages = [];
    for (let i = 0; i < oracle.length; i++) {
        const message = oracle[i];
        messages.push(message);
    };
    alert(oracle.join("\n"));

};


const insertOracle = (e) => {
    e.preventDefault();
    const newMessage = input.value;
    if (newMessage.length > 0) {
        oracle.push(newMessage);
        console.log(oracle);
        input.value = "";
    } else {
        alert('wpisz właściwy format odpowiedzi');
    };
};


const clearOracle = () => {
    oracle = ['tak', 'nie'];
}

showAdvice.addEventListener('click', askOracle);
showOptions.addEventListener('click', showOracle);
addAnswer.addEventListener('click', insertOracle);
clearAnswer.addEventListener('click', clearOracle);