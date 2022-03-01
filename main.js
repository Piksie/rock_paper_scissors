let computerScore = 0;
let playerScore = 0;

/* const playerInput = document.getElementById("playerInput");
const playerInputPush = document.getElementById("playerInputPush") */

function computerPlay(options) {
    options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
}

function incrCompScore() {
    computerScore++;
    return computerScore;
}

function incrPlayerScore() {
    playerScore++;
    return playerScore;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("What do you choose?").toLowerCase();
    if (computerSelection == playerSelection) {
        alert("It's a tie!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        alert("You lose!");
        incrCompScore();
        console.log("CMP" + computerScore);
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        alert("You win!")
        incrPlayerScore();
        console.log("PLY" + playerScore);
    } else {
        alert("Enter a valid option.")
    }
}

 function game() {
    for (let i = 0; i <= 5; i++) {
        playRound();
    }
}

game();