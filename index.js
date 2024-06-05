// Human & Computer scores

let humanScore = 0;
let computerScore = 0;

// Human & Computer choice functions

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      console.log(`Computer chose: rock`);
      return "rock";
    case 1:
      console.log(`Computer chose: paper`);
      return "paper";
    case 2:
      console.log(`Computer chose: scissors`);
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Chose rock, paper or scissors", "Rock");
  choice = choice.toLowerCase();
  console.log(`You chose: ${choice}`);
  return choice;
}

// Round functions

function playGame() {
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log(`Draw: ${humanChoice} is equal to ${computerChoice}`);
      console.log("-");
      return;
    } else if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")
    ) {
      console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
      console.log("-");
      return ++computerScore;
    } else {
      console.log(`You win: ${humanChoice} beats ${computerChoice}`);
      console.log("-");
      return ++humanScore;
    }
  };
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore === computerScore) {
  console.log(`Draw! ${humanScore} - ${computerScore}`);
} else if (humanScore > computerScore) {
  console.log(`You win! ${humanScore} - ${computerScore}`);
} else {
  console.log(`Computer wins! ${humanScore} - ${computerScore}`);
}
