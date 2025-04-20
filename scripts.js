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
    return console.log(ranNum);
}

// create a function named 'getHumanChoice' that asks the user for input (rock,paper or scissors).
//right now it doesnt have a way to check if the input is valid

const computerSelection = getComputerChoice();

function getHumanChoice() {
    let input = prompt("whats your pick?").toLowerCase();

    return console.log(input);
}

const humanSelection = getHumanChoice();

//create a way to keep track of the score of the player(human and computer)

let humanScore = 0;
let computerScore = 0;

//a function that starts the game, one round
//IF human wins 'You win! {humanChoice} beats {computerChoice}
//IF computer wins 'You lose! {computerChoice} beats {humanChoice}

function playRound(humanSelection, computerSelection) {
    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === humanSelection) {
        return console.log("Its a tie!");
    } else {
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}
console.log(computerSelection);
console.log(humanSelection);
const roundResult = playRound(humanSelection, computerSelection);
