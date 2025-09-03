const choices = ["rock", "paper", "scissors"];

function getComputerChoice(getHumanChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
    }   
getComputerChoice()    

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors")

    if (humanChoice === "Rock") {
        console.log("Rock")
    } else if (humanChoice === "Paper") {
        console.log("Paper")
    } else if (humanChoice === "Scissors") {
        console.log("Scissors")
    } else {
        console.log("MAKE UR CHOICE")
    }
}
getHumanChoice()
// Create function 
// use math.random to randomly return 

