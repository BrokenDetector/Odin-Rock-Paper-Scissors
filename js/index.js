function playRound(playerSelection, computerSelection) {

    //console.log('You: ' + playerSelection);
    //console.log('Computer: ' + computerSelection);
    elementPlayerSelections.appendChild(addSelections(playerSelection));
    elementComputerSelections.appendChild(addSelections(computerSelection));

    if (playerSelection === computerSelection) {
        player_count++
        computer_count++
        scoreMessage.textContent = `It's a tie! You both picked ${playerSelection}`
        return
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        player_count++
        scoreMessage.textContent = `You win! Rock beats Scissors`
        return;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        player_count++
        scoreMessage.textContent = `You win! Paper beats Rock`
        return;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        player_count++
        scoreMessage.textContent = `You win! Scissors beats Paper`
        return;
    }
    else {
        computer_count++
        scoreMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return;
    }
}

const scoreMessage = document.getElementById('scoreMessage');
const rockButton = document.getElementById('rockBtn');
const paperButton = document.getElementById('paperBtn');
const scissorsButton = document.getElementById('scissorsBtn');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let player_count = 0;
let computer_count = 0;

rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorsButton.addEventListener('click', () => handleClick('scissors'))

function addSelections(name) {
    let parag = document.createElement('p');
    parag.setAttribute("id", "rmElement");
    parag.textContent = name;
    return parag;
}

function getComputerChoice() {
    const items = Array("rock", "paper", "scissors");
    return items[Math.floor(Math.random() * items.length)];
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore()
}

function updateScore() {

    playerScore.textContent = `You: ${player_count}`
    computerScore.textContent = `Computer: ${computer_count}`

    if (player_count == 5 & computer_count == 5) {
        alert("It's a tie! " + player_count + ':' + computer_count)
        reset()
    }

    if (player_count == 5) {
        alert('You win! ' + player_count + ':' + computer_count)
        reset()
    }
    if (computer_count == 5) {
        alert('You lose! ' + player_count + ':' + computer_count)
        reset()
    }
}

const elementPlayerSelections = document.querySelector('.pSelections');
const elementComputerSelections = document.querySelector('.cSelections');
const r = document.getElementById('rmElement')


function reset() {
    player_count = 0;
    computer_count = 0;
    playerScore.textContent = `You: ${player_count}`
    computerScore.textContent = `Computer: ${computer_count}`
    scoreMessage.textContent = ``

    //reset selections
    elementPlayerSelections.innerHTML = "";
    elementComputerSelections.innerHTML = "";
}