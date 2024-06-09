
let humanScore = 0;
let computerScore = 0;

console.log("Hello, ready for the games?");

// Get computer choice 
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "scissors";
    }  else if (computerChoice === 3) {
        return "papers"; 
    }
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter either 'rock', 'scissors', or 'papers'").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        alert('you win!'); 
    } else if (humanChoice == 'rock' && computerChoice == 'papers') {
        computerScore++;
        alert('computer wins :(');
    } else if (humanChoice == 'scissors' && computerChoice == 'papers') {
        humanScore++
        alert('you win!'); 
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++
        alert('computer wins!')
    } else if (humanChoice == 'papers' && computerChoice == 'rock') {
        humanScore++
        alert('you win!');
    } else if (humanChoice == 'papers' && computerChoice == 'scissors') {
        computerScore++;
        alert('computer wins!');
    } else {
        alert('is tie.');
    }

}

function playGame() {   
    for (let i = 0; i < 5; i++) {
        alert(`this is round ${i+1}`);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}




playGame();

// computer final winner
let finalWinner = 0;
if (humanScore > computerScore) {
    alert('You have won the game!');
 } else {
        alert('Computer wins! Better luck next time :(');
 }
 

console.log(humanScore);
console.log(computerScore);


