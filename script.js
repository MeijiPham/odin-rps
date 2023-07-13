const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    //console.log(`Computer choice: ${choices[randomNum]}`);
    return choices[randomNum];
}

function getPlayerChoice() {
    let choice = prompt("Enter your move: ");
    return choice.toLowerCase();
}

function decider(playerMove, computerMove) {
    switch (playerMove.charAt(0) + computerMove.charAt(0)) {
        case "rr":
            console.log("You tied! Rock ties against rock");
            break;
        case "rp":
            console.log("You lose! Paper beats rock");
            break;
        case "rs":
            console.log("You win! Rock beats scissors");
            break;
        case "pp":
            console.log("You tied! Paper ties against paper");
            break;
        case "pr":
            console.log("You win! Paper beats rock");
            break;
        case "ps":
            console.log("You lose! Scissors beats paper");
            break;
        case "ss":
            console.log("You tied! Scissors ties against scissors");
            break;
        case "sr":
            console.log("You lose! Rock beats scissors");
            break;
        case "sp":
            console.log("You win! Scissiors beats paper");
    }
}

decider(getPlayerChoice(), getComputerChoice());