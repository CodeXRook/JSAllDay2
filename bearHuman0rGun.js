// Mini App: Bear, Human, super Soaka gun Game
// Bear human gun is just like Rock paper scissors
/*
 Each player chooses either bear, human,super Soaka gun. 
 The items are compared, and whichever player chooses 
 the more powerful item wins.
 */

 //  1 create function getUserChoice with a parameter of 'userInput'
 function getUserChoice(userInput) {
    // 2 turn future `userInput` to lower case
    userInput = userInput.toLowerCase();
    // 3 if there is a match return `userInput`
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
      // 4 if no match prompt user for valid entry
    } else {
        return 'Please enter valid option';
    }
}

// 5 create a function that will provide a random computer choice for each round
function getComputerChoice(){
    var random = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}

// create a function 'determinWinner' and pass in parameters
// 'userChoice' and 'computerChoice'
function determineWinner(userChoice, computerChoice){
    // if there is a tie
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    // if user selects 'human'
}