/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */
// wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  //     console.log(e.keyCode, e.which);

  // wersja 1 - instrukcja if:

  //   if (e.keyCode == 38 && green < 255) {
  //     red += 5;
  //     green += 5;
  //     blue += 5;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  //   } else if (e.keyCode == 40 && green > 0) {
  //     red -= 5;
  //     green -= 5;
  //     blue -= 5;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   }

  // wersja 2 - instrukcja switch:
  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red}, ${green <255 ? green++ : green}, ${blue <255? blue++ : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red >=0 ? red-- : red}, ${green >=0 ? green-- : green}, ${blue >=0? blue-- : blue})`
      break;
  }

}


window.addEventListener('keydown', changeColor);