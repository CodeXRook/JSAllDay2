// Challenge: Random Insult Generator
// Create an array with four different body parts and
//  assign the array to the variable randomBodyParts.
var randomBodyParts = ['head','arms','feet','toes','hips'];

// Create an array with four adjectives and 
// assign the array to the variable randomAdjectives.
var randomAdjectives = ['smelly','running','farting','shitting'];

// Create an array with five random words and 
// assign to the array to the variable randomWords.
var randomWords = ['fuck','holy','jesus','sexy','ewww'];

// Use the Math.floor() method and the Math.random() method 
// to choose a random item from your randomBodyParts array and 
// assign it to the variable randomBodyPart.
var randomBodyPart =  randomBodyParts[Math.floor(Math.random() * 5)];

// Use the Math.floor() method and the Math.random() method 
// to choose a random item from your randomAdjectives array and 
// assign it to the variable randomAdjective. 
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

//  Use the Math.floor() method and the Math.random() method 
// to choose a random item from your randomWords array 
// and assign it to the variable randomWord.
var randomWord = randomWords[Math.floor(Math.random() * 5)];

// console.log(' Your ' + randomBodyPart + 
// ' is like a ' + randomAdjective + ' ' + randomWord);
