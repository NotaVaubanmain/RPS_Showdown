const choices = ["rock", "paper", "scissors"];
let humanScore = 0
let computerScore = 0

function game() {
    playRound()
}    

function getComputerChoice(getHumanChoice) {
    return choices[Math.floor(Math.random() * choices.length)];
}




function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors");
    while (humanChoice == null) {
     humanChoice = prompt("Rock, Paper, Scissors");   
    }
    humanChoice = humanChoice.toLowerCase();
    let check = validateChoice(humanChoice)
    while (check == false) {
     humanChoice = prompt (
      "Rock, Paper, Scissors for real though needs correct spelling");
      humanChoice = humanChoice.toLowerCase()
      check = validateChoice(humanChoice)
    }
}

function validateChoice(choice) {
    return choices.includes(choice);
}


function playRound(humanSelection , computerSelection) {
 
} 

function playGame() {
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);
