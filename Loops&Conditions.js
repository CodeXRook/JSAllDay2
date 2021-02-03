// Loops
// Loops evaluate a condition. A true expression runs a code block. Loops repeat
// the procees unti the expression is false.

// Condition
// Execute or skip statement depending on value of expression.
// These are decision parts of your code. Know as 'paths'.

var testScore = 58;
if (testScore > 90) {
 console.log('Congratulations, you got an A!');
} else if (testScore > 80) {
    console.log('Good shit you got a B+ !');
} else if (testScore > 70){
    console.log('You passed, You got a C!'); 
} else {
    console.log('Damn bruda did you even study?');
}
// Damn bruda did you even study?


var testScore = 88;
if (testScore > 90) {
 console.log('Congratulations, you got an A!');
} else if (testScore > 80) {
    console.log('Good shit you got a B+ !');
} else if (testScore > 70){
    console.log('You passed, You got a C!'); 
} else {
    console.log('Damn bruda did you even study?');
}
//Good shit you got a B+ !


var testScore = 98;
if (testScore > 90) {
 console.log('This mf was studying doe, you got an A!, Good shit');
} else if (testScore > 80) {
    console.log('Good shit you got a B+ !');
} else if (testScore > 70){
    console.log('You passed, You got a C!'); 
} else {
    console.log('Damn bruda did you even study?');
}
//This mf was studying doe, you got an A!, Good shit


// Challenge
// Create an if, else, else if statement
// Use at least one if, two else if and one else statement
// Use at least one logical operator
// Suggestion weather

var todaysWeather = 90;
if (todaysWeather > 90 || todaysWeather === 90) {
    console.log('Fam it is hotter than a mf out here bruh');
} else if (todaysWeather < 80 && todaysWeather === 75) {
    console.log('Not bad out here, cool breeze');
} else if ( todaysWeather === 60 || todaysWeather < 65) {
    console.log('I need my jacket son');
} else {
    console.log('Wtf going on?');
}

// Fam it is hotter than a mf out here bruh