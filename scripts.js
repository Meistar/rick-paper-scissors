// create a function named 'getComputerChoice' that generates a random number between 1 and 3
// and depending on the result it will print 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * (4 - 1) + 1);

    if (ranNum === 1) {
        ranNum = "rock";
    } else if (ranNum === 2) {
        ranNum = "paper";
    } else if (ranNum === 3) {
        ranNum = "scissors";
    }

    return ranNum;
}

// create a function named 'getHumanChoice' that asks the user for input (rock,paper or scissors).
//right now it doesnt have a way to check if the input is valid

//create a way to keep track of the score of the player(human and computer)

let humanScore = 0;
let computerScore = 0;

//a function that starts the game, one round
//IF human wins 'You win! {humanChoice} beats {computerChoice}
//IF computer wins 'You lose! {computerChoice} beats {humanChoice}
const div = document.querySelector(".roundResult");
function playRound(humanSelection, computerSelection) {
    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        const p = document.createElement("p");
        p.innerText = `You win! ${humanSelection} beats ${computerSelection}`;
        div.appendChild(p);
    } else if (
        (humanSelection === "scissors" && computerSelection === "rock") ||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        const p = document.createElement("p");
        p.innerText = `You lose! ${computerSelection} beats ${humanSelection}`;
        div.appendChild(p);
    } else if (
        (humanSelection === "rock" && computerSelection === "rock") ||
        (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection === "scissors" && computerSelection === "scissors")
    ) {
        const p = document.createElement("p");
        p.innerText = "It's a tie!";
        div.appendChild(p);
    }
}

//create a function that makes the game 5 rounds
//WHILE roundNum is lower then 5 play again

let roundNum = 1;
function playGame() {
    console.log(`round: ${roundNum}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);
    console.log(`human: ${humanScore}`);
    console.log(`computer: ${computerScore}`);

    // while (roundNum < 5) {
    //     roundNum++;
    //     roundResult;

    //     return playGame();
    // }
}
function checkWinner(playerScore, compScore) {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = "You WON!";
        div.appendChild(h2);
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = "You lose!";
        div.appendChild(h2);
    }
}
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
function keepScore(playerScore, compScore) {
    playerScore.innerText = `player: ${humanScore}`;
    compScore.innerText = `computer: ${computerScore}`;
}

const buttons = document.querySelectorAll("button");
function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = `${button.className}`;
            const compChoice = getComputerChoice();
            playRound(humanChoice, compChoice);
            keepScore(playerScore, compScore);
            checkWinner(playerScore, compScore);
        });
    });
}

// playGame();
getHumanChoice();
