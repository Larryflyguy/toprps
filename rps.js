const choices = ["rock", "papaer", "scissors"]

function game() {
    //play the game
    //play five rounds
    //console based
}

function playRound() {
    const playerSelection =
    computerSelection = computerChoice();

}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if (check == true) {
        console.log(input);
    }


    console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]

}

function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    }   else {
        return false;
        }
    }

