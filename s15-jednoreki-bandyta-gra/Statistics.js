class Statistics {
    constructor() {
        this.gameResults = [];
    }

    //metody poza konstruktorem żeby były dostępne
    //dodajemy wyniki gry i przechowujemy jej w lokalnej zmiennej
    addGameToStatistics(win, bid) {
        let gameResult = {
            //tworzymy zmienne do których przypiszemy podane wartości:
            win: win,
            bid: bid,
        };
        // console.log(gameResult);
        this.gameResults.push(gameResult);
    }

    //metoda zwracająca wyniki:
    showGameStatistics() {
        //zmienna przchowująca długość tablicy - dzięki temu wieadmo ile bylo gier
        let games = this.gameResults.length;
        //filtrujemy tablicę w poszukiwaniu winów
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        // console.log(games, wins, losses);
        return [games, wins, losses];
    }
}

const stats = new Statistics();