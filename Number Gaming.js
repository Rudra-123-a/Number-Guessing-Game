const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function playGame() {
    while (attempts < 5) {
        const guess = parseInt(prompt("Guess a number between 1 and 100 :"));
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }
        attempts++;
        if (guess === secretNumber) {
            alert("Congratulations! You've guessed the number!");
            break;
        } else if (guess < secretNumber) {
            alert("The number is low.");
        } else {
            alert("The number is high.");
        }
    }
    if (attempts === 5) {
        alert(`Game over! The correct number was ${secretNumber}.`);
    }
}
playGame();
