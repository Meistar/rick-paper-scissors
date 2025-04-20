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
    console.log(ranNum);
    return ranNum;
}

// create a function named 'getHumanChoice' that asks the user for input (rock,paper or scissors).
//right now it doesnt have a way to check if the input is valid

function getHumanChoice() {
    let input = prompt("whats your pick?").toLowerCase();
    console.log(input);
    return input;
}

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
        return console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (
        (humanSelection === "rock" && computerSelection === "rock") ||
        (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection === "scissors" && computerSelection === "scissors")
    ) {
        return console.log("Its a tie!");
    } else if (
        (humanSelection === "scissors" && computerSelection === "rock") ||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        return console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let roundResult = playRound(humanSelection, computerSelection);
