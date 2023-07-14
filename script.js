const display = document.querySelector('#display');
const score = document.createElement('p');
const message = document.createElement('p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const choices = ["rock", "paper", "scissor"];
const maxScore = 5;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function getPlayerChoice() {
    rock.addEventListener('click', () => {
        playRound(rock.id, getComputerChoice());
    });
    paper.addEventListener('click', () => {
        playRound(paper.id, getComputerChoice());
    });
    scissor.addEventListener('click', () => {
        playRound(scissor.id, getComputerChoice());
    });
}

function playRound(playerMove, computerMove) {
    let str = "";
    switch (playerMove + computerMove) {
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            tie(playerMove);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(playerMove, computerMove);
            break;
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(playerMove, computerMove);
            break;
    }
}

function tie(playerMove) {
    if (playerScore !== maxScore && computerScore !== maxScore) {
        str = `You tied! ${playerMove.charAt(0).toUpperCase() + 
            playerMove.slice(1)} ties against ${playerMove}.`;
        updateScoreBoard(str);
        endGame();
    }
}

function win(playerMove, computerMove) {
    if (playerScore < maxScore && computerScore !== maxScore) {
        playerScore++;
        let str = `You win! ${playerMove.charAt(0).toUpperCase() + 
            playerMove.slice(1)} beats ${computerMove}.`;
            updateScoreBoard(str);
        endGame();
    }
}

function lose(playerMove, computerMove) {
    if (playerScore !== maxScore && computerScore < maxScore) {
        computerScore++;
        let str = `You lose! ${computerMove.charAt(0).toUpperCase() + 
            computerMove.slice(1)} beats ${playerMove}.`;
        updateScoreBoard(str);
        endGame();
    }
}

function updateScoreBoard(str) {
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    message.textContent = str;
    display.appendChild(score);
    display.appendChild(message);
}

function endGame() {
    if (computerScore === maxScore) {
        message.textContent = "Computer reached 5 points first. You lose!";
        display.appendChild(message);
    }
    else if (playerScore === maxScore) {
        message.textContent = "You reached 5 points first. You win!";
        display.appendChild(message);
    }
}

function game() {
    updateScoreBoard("");
    getPlayerChoice();
}

game();
