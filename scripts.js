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
        humanScore++;
        return console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (
        (humanSelection === "scissors" && computerSelection === "rock") ||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        return console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    } else if (
        (humanSelection === "rock" && computerSelection === "rock") ||
        (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection === "scissors" && computerSelection === "scissors")
    ) {
        return console.log("Its a tie!");
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

    while (roundNum < 5) {
        roundNum++;
        roundResult;

        return playGame();
    }
}

playGame();
