const choices = ["r", "p", "s"]
const rock = choices[0]
const paper = choices[1]
const scissors = choices[2]
const randomIndex = Math.floor(Math.random() * choices.length);
const computer = choices[randomIndex]
const youWinPhrase = "You Win!"
const youLosePhrase = "You Lose!"
const youTiePhrase = "It's a Tie!"
const playAgain = " Refresh page to play again."
console.log(computer);

const input = prompt("Choose r, p, or s.");

if (input === computer) {
    console.log(youTiePhrase);
    confirm(youTiePhrase + playAgain)
} else if (input === rock) {
    if (computer === paper) {
        console.log(youLosePhrase + playAgain)
        confirm(youLosePhrase + playAgain)
    } else if (computer === scissors) {
        console.log(youWinPhrase + playAgain)
        confirm(youWinPhrase + playAgain)
    }
} else if (input === paper) {
    if (computer === scissors) {
        console.log(youLosePhrase + playAgain)
        confirm(youLosePhrase + playAgain)
    } else if (computer === paper) {
        console.log(youWinPhrase + playAgain)
        confirm(youWinPhrase + playAgain)
    }
} else if (input === scissors) {
    if (computer === rock) {
        console.log(youLosePhrase + playAgain)
        confirm(youLosePhrase + playAgain)
    } else if (computer === paper) {
        console.log(youWinPhrase + playAgain)
        confirm(youWinPhrase + playAgain)
    }
}
