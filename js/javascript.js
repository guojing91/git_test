//Computer to generate a random "Rock", "Paper" or "Scissors"
//Create an empty function called getComputerChoice that will return the random choice
//Choose a random number using Math.random between 0 and 1
//Multiply the random number by 3 so that the maximum number is < 2
//Use Math.floor to make sure the number is either 0, 1, or 2
//When the number is 0, return Rock
//When the number is 1, return Paper
//When the number is 2, return Scissors
//call getComputerChoice to check

let gameRound = 0, playerWin = 0, computerWin = 0;

//create a function with 2 parameters: playerSelection and computerSelection
//ask user for input
//change user input to be case insensitive
//store in variable playerSelection
//store getComputerChoice in computerSelection
//compare playerSelection with computerSelection
//if win, show win
//if lose, show lose
//if tie, show tie

//create a game function
//create a playRound function to enable this game to be played 5 times before announcing a winner
//alert user that the game will be played 5 times in the beginning
//create a counter to count gameRound
//create a counter to count playerWin
//create a counter to count computerWin
//start playing the game by doing all the steps above
//if player win, display win message add playerWin counter
//if computer win, display win message, add computerWin counter
//if tie, don't add counter
//add counter to gameRound
//at the end of 5 round, if playerWin > computerWin, display win msg, if <, display lose msg

function game() {

    alert("Rock Paper Scissors! 5 Rounds, most win winner wins!");

    for (let i = 0; i < 5; i++) {

        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3) //random is now either 0, 1 or 2
        
            if (random === 0) {
                return "Rock";
            } else if (random === 1) {
                return "Paper";
            } else {
                return "Scissors";
            };
        }
        
        computerSelection = getComputerChoice();
        
        function getUserChoice() {
            let input = prompt("Choose Rock, Paper or Scissors. Type it out.");
            let n = input.length;
            return input[0].toUpperCase() + input.slice(1, n).toLowerCase();
        }
        
        playerSelection = getUserChoice();
    
        function singleRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Round " + (i + 1) + ": " + "It's a tie!";
            } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
                playerWin++;
                return "Round " + (i + 1) + ": " + "You Win! " + playerSelection + " beats " + computerSelection + "!";
            } else if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Paper") {
                computerWin++;
                return "Round " + (i + 1) + ": " + "You Lose! " + computerSelection + " beats " + playerSelection + "!";
            } else {
                return "Round " + (i + 1) + ": " + "Wrong input! Type 'Rock', 'Paper' or 'Scissors' only!";
            };
        };
        console.log(singleRound(playerSelection, computerSelection));
    };

    if (playerWin > computerWin) {
        return "Grand Winner is You!";
    } else if (computerWin > playerWin) {
        return "Grand Winner is The Computer!";
    } else {
        return "No Winner! It's A Tie!";
    }
}

console.log(game());