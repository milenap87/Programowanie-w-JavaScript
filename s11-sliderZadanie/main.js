const slideList = [{
        img: "images/img1.jpg",
        text: 'kłosy'
    },
    {
        img: "images/img2.jpg",
        text: 'krople'
    },
    {
        img: "images/img3.jpg",
        text: 'fale'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 2000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}
let interv = setInterval(changeSlide, time);


const keyChangeSlide = function (event) {
    const press = event.keyCode;

    if (press == 37) {
        console.log('w lewo');
        active--;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();

    } else if (press == 39) {
        console.log(' w prawo');
        changeSlide();
    }
    clearInterval(interv);
    interv = setInterval(changeSlide, time);
};

window.addEventListener('keydown', keyChangeSlide);