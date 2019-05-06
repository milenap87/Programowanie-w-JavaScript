class Result {
    //metoda zwracająca wynik
    //metoda określa co ma użytkownik
    //nie jest potrzebna instancja klasy
    //metody statyczne są dostępne jedynie z poziomu klasy, nie instancji

    static moneyWon(result, bid) {
        if (result) return 3 * bid;
        else return 0;
    }

    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) {
            return true;
        } else {
            return false;
        }
    }
}