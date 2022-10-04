let computerWins=0, playerWins=0;

const OptionsForComp = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerSelection =
    OptionsForComp[Math.floor(Math.random() * OptionsForComp.length)];
  return computerSelection;
}

function playRound(playerChoice, computerChoice) {
  console.log("Computer chose " + computerChoice);
  console.log("Player chose " + playerChoice);
  if (playerChoice == computerChoice) {
    console.log("It's a draw.");
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("Player wins!!");
    playerWins++;
  }
  else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    console.log("Computer wins!!");
    computerWins++;
  }else {
    console.log("You sure you didn't misspelt anything?");
  }
}

function getPlayerChoice(){
let playerSelection = prompt("What do you choose?");
playerSelection= playerSelection.toLowerCase();
return playerSelection
}

function game(){
  for(let i=1;i<=5;i++){
    console.log();
    console.log("Round: "+i);
    playRound(getPlayerChoice(),getComputerChoice());
    console.log("Player Wins: "+playerWins+"  |  "+"Computer Wins: "+computerWins);
  }
  playerWins==computerWins ? console.log("So, it's just a draw. Boring...") : playerWins>computerWins ?  console.log("Congrats! You just won against the computer"):console.log("Oops! You just lost to the dumbest machine")
}

game();