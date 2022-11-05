let p = 0;
let c = 0;

function getComputerChoice() {
    const items = Array("rock", "paper", "scissors");
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);    

    if (playerSelection === computerSelection) {
        p++
        c++
        return "It's a tie! you both picked " + playerSelection;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        p++
        return "You win! Rock beats Scissorc";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        p++
        return "You win! Paper beats Rock";
    }
    if (playerSelection === "sicssos" && computerSelection === "paper") {
        p++
        return "You win! Scissors beats paper";
    }
    else {
        c++
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(i);
        console.log("You: " + p + " Computer: " + c);
    }
}

console.log(game(playRound))