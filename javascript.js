console.log("Hello, ready for the game?");

// Get computer choice 



function getComputerChoice() {
    let preGeneratedValue = Math.floor(Math.random() * 3 + 1);
    if (preGeneratedValue === 1) {
        return "rock";
    } else if (preGeneratedValue === 2) {
        return "sissors";
    }  else if (preGeneratedValue === 3) {
      }
        return "papers"; 
    }
    




result = getComputerChoice();

console.log(result);