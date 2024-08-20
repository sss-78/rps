const prompt = require("prompt-sync")({sigint:true}); 
console.log("Welcome to rock, paper, scissors")
console.log("This game will be in best of 3 format")

let match = 1
choices = ["rock", "paper", "scissors"]

let [playerPoints, computerPoints] = [0, 0]

while(match <= 3) {
    let won = 1
    let playerChoice = prompt("Choose rock, paper, or scissors. Type your choice the exact way listed here: ")
    
    if(!choices.includes(playerChoice)) {
        console.log("please enter exact format please.")
        break
    }
    
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    const sleep = milliseconds => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds)
    console.log("Computer is generating....")
    sleep(1000)
    console.log("Computer picked", computerChoice)

    if(computerChoice === playerChoice) {
        console.log("This round is a tie")
        won = 2
    } else if(computerChoice === choices[0] && playerChoice === choices[1]) {
        console.log("You win round", match)
    } else if(computerChoice === choices[1] && playerChoice === choices[2]) {
        console.log("You win round", match)
    } else if(computerChoice === choices[2] && playerChoice === choices[0]) {
        console.log("You win round", match)
    } else {
        won = 0
        console.log("you lost round", match)
    }
    
    if(won === 1) {
        playerPoints += 1
    } else if(won === 0) {
        computerPoints += 1
    }
    console.log()
    match += 1
}

console.log("Player Score", playerPoints)
console.log("Computer Score", computerPoints)
if(playerPoints > computerPoints) {
    console.log("You Win.")
} else if(playerPoints === computerPoints) {
    console.log("You tied")
} else {
    console.log("You lost")
}