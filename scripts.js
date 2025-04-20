// create a function named 'getComputerChoice' that generates a random number between 1 and 3
// and depending on the result it will print 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * (4 - 1) + 1);

    if (ranNum === 1) {
        return console.log("Rock");
    } else if (ranNum === 2) {
        return console.log("paper");
    } else if (ranNum === 3) {
        return console.log("scissors");
    }
}

getComputerChoice();
