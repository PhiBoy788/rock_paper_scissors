let playerWins = 0
let computerWins = 0
const computerChoices = ["rock", "paper", "scissors"]
const result = document.createElement('li')
const results = document.getElementById('resultsList')
const player = document.getElementById('player')
const computer = document.getElementById('computer')

function computerChooser () {
    computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

function getPlayerSelection(playerInput) {
    return playerInput
}

function playRound (playerSelection) {
    computerSelection = computerChoices[computerChooser()]
    console.log("Computer Selection")
    console.log(computerSelection)
    console.log("Player Selection")
    console.log(playerSelection)
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            console.log("You win!")
            playerWins++
            console.log(playerWins)
            return ("win")
        } else if (playerSelection === "rock"){
            console.log("Draw!")
            return ("draw")
        } else {
            console.log("You lose!")
            computerWins++
            console.log(computerWins)
            return ("lose")
        }   
    }else if (computerSelection === "paper"){
            if (playerSelection === "scissors") {
                console.log("You win!")
                playerWins++
                console.log(playerWins)
                return ("win")
            } else if (playerSelection === "paper"){
            console.log("Draw!")
            return ("draw")
        } else {
                console.log("You lose!")
                computerWins++
                console.log(computerWins)
                return ("lose")
            }
    }else{
        if (playerSelection === "rock") {
            console.log("You win!")
            playerWins++
            console.log(playerWins)
            return ("win")
        } else if (playerSelection === "scissors"){
            console.log("Draw!")
            return ("draw")
        }else{
            console.log("You lose!")
            computerWins++
            console.log(computerWins)
            return ("lose")
        }
    }
}

function game () {
    playRound()
    checkWinner()

}
//    let answer = prompt("Would you like to play again?")
//    answer = answer.toLowerCase()
//    if (answer === "yes" || answer === "y") {
//        game()
//    }else{
//        return 0
//    }


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id)
        playRound(button.id)
        checkWinner()
    })
})


function checkWinner(){
    player.textContent = "Player :  " + (playerWins)
    computer.textContent = "Computer :  " + (computerWins)

if (playerWins > 4){
    playerWins = 0
    computerWins = 0
    player.textContent = "Player :  " + (playerWins)
    computer.textContent = "Computer :  " + (computerWins)
    console.log("YOU WIN")
}else if (computerWins > 4){
    playerWins = 0
    computerWins = 0
    player.textContent = "Player :  " + (playerWins)
    computer.textContent = "Computer :  " + (computerWins)
    console.log("YOU LOSE")
    
}else{
    return false
}
}