const choice = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}

