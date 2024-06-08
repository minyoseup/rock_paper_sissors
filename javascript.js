
let humanScore = 0;
let computerScore = 0;

console.log("Hello, ready for the game?");

// Get computer choice 



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "sissors";
    }  else if (computerChoice === 3) {
      }
        return "papers"; 
    }

function getHumanChoice() {
    let humanChoice = prompt("Enter either 'rock', 'sissors', or 'papers'");
}

let result = getHumanChoice();

console.log(result);




result = getComputerChoice();

console.log(result);