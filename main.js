let computerScore = 0;
let playerScore = 0;

let scoreWrite = document.getElementById("score");

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
        scoreWrite.innerHTML = "<p>" + "tie" + "<p>";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        scoreWrite.innerHTML = "<p>" + "Computer wins" + "<p>";
        incrCompScore();
        console.log("CMP" + computerScore);
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        scoreWrite.innerHTML = "<p>" + "You win" + "<p>";
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