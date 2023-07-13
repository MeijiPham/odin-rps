const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    //console.log(`Computer choice: ${choices[randomNum]}`);
    return choices[randomNum];
}

function getPlayerChoice() {
    let choice = prompt("Enter your move: ");
    return choice.toLowerCase();
}

function playRound(playerMove, computerMove) {
    switch (playerMove.charAt(0) + computerMove.charAt(0)) {
        case "rr":
            console.log("You tied! Rock ties against rock");
            break;
        case "rp":
            console.log("You lose! Paper beats rock");
            computerScore++;
            break;
        case "rs":
            console.log("You win! Rock beats scissors");
            playerScore++;
            break;
        case "pp":
            console.log("You tied! Paper ties against paper");
            break;
        case "pr":
            console.log("You win! Paper beats rock");
            playerScore++;
            break;
        case "ps":
            console.log("You lose! Scissors beats paper");
            computerScore++;
            break;
        case "ss":
            console.log("You tied! Scissors ties against scissors");
            break;
        case "sr":
            console.log("You lose! Rock beats scissors");
            computerScore++;
            break;
        case "sp":
            console.log("You win! Scissiors beats paper");
            playerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } 
    else if (computerScore > playerScore) {
        console.log("Sorry! You lose!");
    }
    else {
        console.log("Tied game!");
    }
}

game();
