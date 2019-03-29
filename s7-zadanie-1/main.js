// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', 'trzy'];
const messages = ["super", "działa!", "chyba ok"];
let div = document.querySelector('div');

const showMessage = (e) => {
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password.toLowerCase() === text) {
            div.textContent = messages[index];
        }
    });
};

input.addEventListener("input", showMessage);