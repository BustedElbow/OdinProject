function checker() {
  if (roundCounter == 5){
    rock.setAttribute('id', 'null');
    paper.setAttribute('id', 'null');
    scissors.setAttribute('id', 'null');

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
    // roundCounter++;
    // roundLog.textContent = roundCounter;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    scorePlayer++;
    playerRecord.textContent = scorePlayer;
    log.textContent = `You Win ${playerChoice} beats ${computerChoice}`;
    roundCounter++;
    roundLog.textContent = roundCounter;
  } else {
    scoreComputer++;
    computerRecord.textContent = scoreComputer;
    log.textContent = `You Lose ${computerChoice} beats ${playerChoice}`;
    roundCounter++;
    roundLog.textContent = roundCounter;
  }
  checker()
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  const computer = getComputerChoice();
  const player = playerChoice;
  round(player, computer);
  
  checker();
  console.log(roundCounter);
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
  rock.setAttribute('id', 'rock');
  paper.setAttribute('id', 'paper');
  scissors.setAttribute('id', 'scissors');
}

let choices = document.querySelector("#choices");
choices.addEventListener('click', (event) => {
  let target = event.target;
  
  switch(target.id) {
    case 'rock':
      playerChoice = "rock";
      game()
      break;
    case 'paper':
      playerChoice = "paper";
      game()
      break;
    case 'scissors':
      playerChoice = "scissors";
      game()
      break;  
  }
})

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerRecord = document.querySelector("#playerScore");
let computerRecord = document.querySelector("#computerScore");

let scorePlayer = 0;
let scoreComputer = 0;
let roundCounter = 0;

let roundLog = document.querySelector("#round");
roundLog.textContent = roundCounter;

let popUp = document.querySelector("#matchPop");

let log = document.querySelector("#log");
let playerChoice = "";

let matchPopLog = document.querySelector("#matchPopLog");
let matchPopBtn = document.querySelector("#matchPopBtn");

matchPopBtn.addEventListener('click', reset);

