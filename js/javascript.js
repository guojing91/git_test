//Computer to generate a random "Rock", "Paper" or "Scissors"
//Create an empty function called getComputerChoice that will return the random choice
//Choose a random number using Math.random between 0 and 1
//Multiply the random number by 3 so that the maximum number is < 2
//Use Math.floor to make sure the number is either 0, 1, or 2
//When the number is 0, return Rock
//When the number is 1, return Paper
//When the number is 2, return Scissors
//call getComputerChoice to check

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

getComputerChoice();