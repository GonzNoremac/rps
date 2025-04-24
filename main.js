let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let seed = Math.random();
    console.log(`Seed: ${seed}`);
    if (seed <= .33) {
        return "rock";
    }

    else if (seed > .33 && seed < .66) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = String(prompt(`Your Choice: `)).toLowerCase();
    return userChoice;
}

function playRound() {
    let player = getHumanChoice();
    let cpu = getComputerChoice();
    console.log(`Player Chose ${player}`)
    console.log(`Cpu chose ${cpu}`)
    if (player == `rock` && cpu == `scissors` || player == `paper` && cpu == `rock` || player == `scissors` && cpu == `paper`) {
        console.log(`${player} beats ${cpu}. You win! :)`)
        humanScore += 1
        console.log(`Player Score: ${humanScore}`)
        console.log(`Cpu Score: ${computerScore}`) 
    }
    else if (player === cpu) {
        console.log(`You both picked ${player}. It's a tie, try again!`)
        playRound();
    }
    else {
        console.log(`${cpu} beats ${player}. You lose :(`)
        computerScore += 1
        console.log(`Player Score: ${humanScore}`)
        console.log(`Cpu Score: ${computerScore}`) 
    }

}

function playGame() {
    for (let i=1; i<=5; i++) {
        playRound();
    }
    (humanScore > computerScore) ?
    console.log(`You won! ${humanScore}-${computerScore}`):
    console.log(`You lost... ${humanScore}-${computerScore}`)
}

playGame();