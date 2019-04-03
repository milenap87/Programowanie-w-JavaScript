//za pomocą CLOSURE:
const timer = () => {
    let seconds = 0;

    const countSeconds = () => {
        seconds++;
        document.body.textContent = `tyle sekund jesteś na stronie: ${seconds}`
    }
    return countSeconds;
}

const clock = timer();
setInterval(clock, 1000);
clock();


// const timer = () => {
//     let seconds = 0;

//     setInterval(function () {
//         seconds++;
//         document.body.textContent = `tyle sekund jesteś na stronie: ${seconds}`;
//         console.log(`jesteś na stronie ${seconds} sekund - konsola`);
//     }, 1000);
// }

// let timerOnload = timer();

// document.addEventListener('load', timerOnload);