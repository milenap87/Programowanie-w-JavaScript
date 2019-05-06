//z wielkiej litery bo jest klasą 
class Wallet {
    constructor(money) {
        let _money = money;

        //pobieramy aktualną zawartość portfela
        this.getWalletValue = () => _money;

        //sprawdzamy czy gracz ma wymagany min środków do gry
        this.ifCanPlay = value => {
            if (_money >= value) return true;
            //jeśli pierwszy warunek prawdziwy to nie przejdzie do drugiej linii, jesli nieprawdziwy to przejdzie do nast i wyrzuci false
            return false;
        }

        //zmiana zawartości portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("błąd! Nieprawidłowy typ działania");
                }
            } else {
                console.log(typeof value);
                throw new Error('nieprawidłowa wartość (oczekiwana liczba!)');
            }
        }
    }

}

// const wallet = new Wallet(200);