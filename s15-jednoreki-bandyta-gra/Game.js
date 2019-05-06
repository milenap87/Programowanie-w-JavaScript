class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        //tu musimy dodać metodę bind żeby nie utracić wiązania z this dotyczącym Game. this jako argument żeby wiadomo było że to ten this tutaj, w Game
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.colorBoard = document.querySelectorAll('div.color');
        this.bidInput = document.getElementById('bid');
        this.walletSpan = document.querySelector('.panel span.wallet');
        this.resultSpan = document.querySelector('.score span.result');
        this.gamesSpan = document.querySelector('.score span.number');
        this.winsSpan = document.querySelector('.score span.win');
        this.lossesSpan = document.querySelector('.score span.lose');

        this.render();
    }

    render(colors = ['black', 'black', 'black'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('zrenderowałam się. Strona.');
        this.colorBoard.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });
        this.walletSpan.textContent = money;
        if (result) {
            result = `Wygrana: ${wonMoney} pkt.`;
        } else if (!result && result !== "") {
            result = `Przegrana: ${bid} pkt.`;
        }
        this.resultSpan.textContent = result;
        this.gamesSpan.textContent = stats[0];
        this.winsSpan.textContent = stats[1];
        this.lossesSpan.textContent = stats[2];
        this.bidInput.value = "";
    }

    startGame() {
        if (this.bidInput.value < 1) return alert('Minimalny zakład to 1, podaj prawidłową liczbę');

        const bid = Math.floor(this.bidInput.value);
        if (!this.wallet.ifCanPlay(bid)) {
            return alert('Za mało środków w portfelu!');
        }
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkWinner(colors);
        const moneyWon = Result.moneyWon(win, bid);
        this.wallet.changeWallet(moneyWon);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, moneyWon);
    }
}