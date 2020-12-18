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

// we're going to look at the array methods 
// concat reverse and slice.

// CONCAT
var bigDog =['golden retriever', 'St.bernard', 'german shepard', 'bernese mountain dog'];

var littleDog = ['terrier', 'weiner dog', 'corgie', 'pomeranian'];

var allDogs = bigDog.concat(littleDog); // CONCAT

var cats = ['alley cat', 'fraidy cat', 'scaredy cat'];

var enemies = bigDog.concat(littleDog, cats);

// REVERSE
// This is going to take or array and switch the order
// There is no need to put anything within the method call.

var smallestFirst = allDogs.reverse();



// SORT
// the sort method sorts all the items of an array 
// the sort order can be either alphabetic or numeric 
// and either a ascending up or descending down.
var alphaOrder = allDogs.sort();


//SLICE
// slice method will take in two arguments.
// The first specifies the start of the slice 
// and the second specifies the end of the slice to be returned.
allDogs.slice(1,4); // start of index end of index
/* 
 Unlike shift and pop.
 This doesn't destroy the values from the original array.
 It simply returns them.
*/ 

// review array methods
// concat method - join two or more arrays
// reverse method - reverse order of elements
// sort method - sort alpha numeric
// slice method - returns but does not delete a section

// practice
var colors = ['red', ' orange', 'yellow', 'green', 'blue', 'violet'];
// challenge 
// build another color array and add the two together
var moreColors = ['brown', 'purple', 'navy blue', 'cream', 'pink'];

var allMyColors = colors.concat(moreColors);

var topSelfColor = ['black', 'gold', 'silver', 'diamond', 'platnuim'];
allMyColors = colors.concat(moreColors, topSelfColor);
/// done

allMyColors.reverse(); /// done

var alphaColor = allMyColors.sort() /// done

// slice practice 

var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

var winter = weather.slice(0,5); /// done

var summer = weather.slice(5) // since its near the end and is all summer conditions no need to add ending index// done

///

// challenge
// create same variable using negative numbers

var winter = weather.slice(-8, -3);

var summers = weather.slice(-3);

/// NICCE