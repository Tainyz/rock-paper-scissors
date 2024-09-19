const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {  
  button.addEventListener("click", () => {    
    playRound(button.id,getComputerChoice());
  });
});

function alertChoice(){
  console.log("")
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];  
  }  
function getHumanChoice() {
    while (true) {
      let humanchoice = prompt("What's your sign?");
      let lowerCaseChoice = humanchoice.toLowerCase();
      if (lowerCaseChoice === "rock" || lowerCaseChoice == "paper" || lowerCaseChoice == "scissors") {
        return lowerCaseChoice;
      }
      else {
        alert("Do it Again");
      }
    }
  }
    
function playRound(Human, Computer) {
    if (Human === Computer) {
      console.log("Draw");
      return "Draw";
    }
    else if (Human === "rock" && Computer === "scissors") {
      console.log("You win! Rock beats Scissors");
      return "Win";
    }
    else if (Human === "paper" && Computer === "rock") {
      console.log("You win! Paper beats Rock!");
      return "Win";
    }
    else if (Human === "scissors" && Computer === "paper") {
      console.log("You win! Scissors beats Paper");
      return "Win";
    }
    else {
      console.log("You lose");
      return "Lose";
    }
  }
function playGame(times=5) {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < times; i++) {
      let results = playRound(getHumanChoice(), getComputerChoice());
      if (results === "Win") {
        humanScore++;
      } else if (results == "Lose") {
        computerScore++;
      } else {
        i--;
        continue;
      }
    }
    alert(`--Game of ${times} -- Your Scores: ${humanScore} Computer:${computerScore}`);
  }
  

  