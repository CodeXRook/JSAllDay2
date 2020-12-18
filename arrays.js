//ARRAYS
// Arrays are list like objects.
// They are used to store multiple values writen as a list between square
// brackets, separated by commas.

var testScores = [];

testScores = [72,84,68,92,74];
///

var homeRuns = [8,12,34,43,28];
var testScores = [93,87,74,92,67];
var dailyTemp = [68,72,81,78,67];
var cookie = ['sugar', 'butter', 'flower'];
//

//practice
// Create baseballTeam Array
// add a value to the end of the array
// turn 'Giants' into a different team
// access the 'Dodgers' value and save it to variable myFavoriteTeam
// access the length of the array

var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];
baseballTeams[5] = 'Cardinals';

baseballTeams[1] = 'Angels';
baseballTeams[2] = 'Phillies';

var myFavoriteTeam = baseballTeams[0];

var bronxSquad = baseballTeams[3];


//ARRAYS METHODS PART1

// array .pop()
var testScores = [72,84,68,92];
// The pop method will return the last value 
// but it will destroy it from the original array.
testScores.pop();
// remember variables are containers that store data.
// So we need to create a variable to store the value that pops off the end 
// of the array
var lastTestScores = testScores.pop();


// .push()
// We're going to use this to add a value to the end of an array. 

testScores.push(99);
// testScores [72,84,99]


// .shift()
// the shift method Remove or delete a value
// from the front of the array.

testScores[72,84,99,33,96,84]
testScores.shift();
testScores;// [84,99,33,96,84]

// instead of deleting or destroying a value from their array alone 
// we want to save it

var firstTest = testScores.shift();
firstTest;// [84]


// unshift()
// Let's put some values in the front of our array.
// We can do that with the unshift method.

testScores[99, 33, 96, 84]
testScores.unshift(100, 95,)

////
////

// Array methods review
// push() pop() shift() unshif()
// practice 
// insert 'crackers' at the front of the array and 'grapes' at the end of the array
// remove an item from the front and the end of the shoppingList array

var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];
shoppingList.unshift('crackers') // adds 'crackers to front of array 

shoppingList.push('grapes') // adds 'grapes in the end of the array

shoppingList.push('siracha', 'popcorn'); // adds 'siracha' and 'popcorn' to the end of the array 

shoppingList.unshift('lemonade', 'orange juice');// adds 'lemonade' and 'orange' to the front of the array

shoppingList.shift() // removes 'lemonade' from the front of the array

shoppingList.pop()// removes 'popcorn' from the end of the array

//PRACTICE
// Capture shift and pop methods so we dont lose them, 
// most likley store these in a variable

var firstItemSarah = shoppingList.shift();

var lastItemPhil = shoppingList.pop();