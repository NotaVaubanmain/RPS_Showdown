const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}    



function playRound(round) {
   const playerSelection = playerChoice();
   const computerSelection = getComputerChoice();
   console.log(playerSelection);   
   console.log(computerSelection);
   const winner = checkWinner(playerSelection, computerSelection);
   winners.push(winner);
   logRound(playerSelection, computerSelection, winner, round);
} 


function playerChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors");
    while (humanChoice == null) {
     humanChoice = prompt("Rock, Paper, Scissors");   
    }
    humanChoice = humanChoice.toLowerCase();
    let check = validateChoice(humanChoice)
    while (check == false) {
     humanChoice = prompt (
      "Rock, Paper, Scissors for real though needs correct spelling");
    while (humanChoice == null) {
     humanChoice = prompt("Rock, Paper, Scissors");   
    }      
      humanChoice = humanChoice.toLowerCase();
      check = validateChoice(humanChoice);
    }
 return humanChoice;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
 }  //The computer's choices 

function validateChoice(choice) {
    return choices.includes(choice);
}

function checkWinner (choiceP , choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
      (choiceP === "rock" && choiceC ==="scissors") ||
      (choiceP === "paper" && choiceC ==="rock") ||
      (choiceP === "scissors" && choiceC ==="paper")
    ) {
      return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log (`Results:`)
  console.log (`PlayerWins:`,playerWins);
  console.log (`ComputerWins:`, computerWins);
  console.log (`Ties:`, ties)
}

function logRound (playerChoice,computerChoice,winner,round) {
  console.log('round:', round);
  console.log('Player Chose:', playerChoice);
  console.log('Computer Choice:', computerChoice);
  console.log(winner);
  console.log("-----------------------------------")
}

game();

