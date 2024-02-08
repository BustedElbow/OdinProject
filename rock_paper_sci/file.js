function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)];
}

function round(playerChoice, computerChoice) {
  
  if (playerChoice === computerChoice){
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    scorePlayer++;
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    scoreComputer++;
    return `You Lose ${computerChoice} beats ${playerChoice}`;
  }
 
}

let scorePlayer = 0;
let scoreComputer = 0;

function game() {
  for (let i = 0; i < 5; i++){
    const computer = getComputerChoice();
    const player = prompt("Rock, Paper, Scissors");
    console.log(round(player, computer));
  }

  console.log("Match End");
  if (scorePlayer > scoreComputer){
    console.log(`Player wins with a score of ${scorePlayer} over ${scoreComputer}`);
  } else {
    console.log(`Computer wins with a score of ${scoreComputer} over ${scorePlayer}`);
  }
}

game();
