const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0
let computerScore = 0


function getComputerChoice(getHumanChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
    }   
  

function getHumanChoice(getComputerChoice) {
    let humanChoice = prompt("Rock, Paper, Scissors").toLowerCase;

    if (humanChoice ==="rock") {
        console.log("Rock")
    } else if (humanChoice ==="paper") {
        console.log("Paper")
    } else if (humanChoice ==="scissors") {
        console.log("Scissors")
    } else {
        console.log("MAKE UR CHOICE")
    }
}


function playRound(humanChoice , computerChoice) {
    if (humanSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose!")
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You Win!")    
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win!")
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You Lose!")
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Lose!")
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win!")
    }
} 
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);

// Create function 
// use math.random to randomly return 

