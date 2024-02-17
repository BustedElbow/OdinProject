function checker() {
  if (roundCounter == 5){
    setTimeout(() => {
      popUp.style.display = "flex";    
      if (scorePlayer > scoreComputer){
        matchPopLog.textContent = `Player wins! With a score of ${scorePlayer} over 5`
      } else {
        matchPopLog.textContent = `Computer wins! With a score of ${scoreComputer} over 5`
      }
    }, 100)
  }
}

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice){
    log.textContent = "Its a tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    scorePlayer++;
    playerRecord.textContent = scorePlayer;
    log.textContent = `You Win ${playerChoice} beats ${computerChoice}`;
  } else {
    scoreComputer++;
    computerRecord.textContent = scoreComputer;
    log.textContent = `You Lose ${computerChoice} beats ${playerChoice}`;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  const computer = getComputerChoice();
  const player = playerChoice;
  (round(player, computer));
  
  roundCounter++;
  roundLog.textContent = roundCounter;
  
  checker();
}

function reset() {
  scoreComputer = 0;
  scorePlayer = 0;
  roundCounter = 1;
  popUp.style.display = "none";
  roundLog.textContent = "1";
  log.textContent = ".";
  playerRecord.textContent = "";
  computerRecord.textContent = "";
}

let playerRecord = document.querySelector("#playerScore");
let computerRecord = document.querySelector("#computerScore");

let scorePlayer = 0;
let scoreComputer = 0;
let roundCounter = 1;

let roundLog = document.querySelector("#round");
roundLog.textContent = roundCounter;

let popUp = document.querySelector("#matchPop");

let choices = document.querySelector("#choices");
let log = document.querySelector("#log");
let playerChoice = "";

let matchPopLog = document.querySelector("#matchPopLog");
let matchPopBtn = document.querySelector("#matchPopBtn");

matchPopBtn.addEventListener('click', reset);

choices.addEventListener('click', (event) => {
  let target = event.target;
  
  switch(target.id) {
    case 'rock':
      playerChoice = "rock";
      // log.textContent = "You picked Rocked";
      game()
      break;
    case 'paper':
      playerChoice = "paper";
      // log.textContent = "You picked Paper";
      game()
      break;
    case 'scissors':
      playerChoice = "scissors";
      // log.textContent = "You picked Scissors";
      game()
      break;  
  }
})
