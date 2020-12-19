// FUNCTIONS
// Functions let you group a series of statements together 
// to perform a specific task 

/* 
Functions let you group a series of statements together 
to perform a specific task. If different parts
of a script repeat the same task,
You can reuse the function, rather than repeating 
the same set of statements.
*/

// function Declaration
function morningGreeting(){
    return 'Good morning, it is time to get up';
}
morningGreeting();//'Good morning, it is time to get up'

// another example
function greetPresident(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName + '!';
}

greetPresident('Barack', 'Obama');


// Review
// keyword function
// function name or anonymous
// code block
// called or invoked
// parameters and arguments

// practice

function goodMorningNeighbor() {
    return 'Good morning, nieghbor';
}
goodMorningNeighbor()

//

function goodEveningNeighbor(){
    return 'Good evening neighbor thanks for everything!';
}
goodEveningNeighbor()

//
function goodMorningNeighbor(name){
    return ' Good morning, ' + name + '!';
}
goodMorningNeighbor('Codex');

//

function goodEveningNeighbor(name, task){
    return 'Good morning, ' + name + ' thanks for ' + task + '!';
}
goodEveningNeighbor('Hank,', 'the million dollor investment');


// Function Expressions
// Anonymous function
// IFFES


// function expression
// This is when you assign a function as a value to a variable.

// IIFE
// Immediatley Invoked function Expressions

var greetFullName = (function(firstName, lastName) {
    return 'Hello, '+ firstName + ' ' + lastName + '!';
}());
////

// practice
// function declaration must be name

function knockKnock() {
    return 'Who\'s there?';
}

knockKnock();// Who's there?


// challenge 
// turn knockKnock into an anonymous function within a funciton expressions
// call the function

var knockKnock = function(){
    return 'Who\'s there?';
}

// value of knockKnock you get function
/* ƒ (){
    return 'Who\'s there?';
}
*/

// but when you invoke the function or call the function
knockKnock(); // Who's there?


// practice
// Immediatley Invoked function Expressions
function dogWalker(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}

dogWalker('Paul', 'Charlie');
"Paul is taking Charlie for a walk."

// challenge 
// create an immediately invoked function expression
// store the IIFE a variable and call it

(function(person, dog){
    return person + 'is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

var dogWalker = (function(person, dog){
    return person + 'is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));



// Scope
// function scope
// scope is where a variable is defined.
// Javascript has two scopes global and local 

var scope = 'public'; // Global

function checkScope(){
    var scope = 'private'; // local
    return scope;
}

// review funciton scope
// scope determined by where variable is defined
// global and local
// scope chain
// 'use strict' mode

//practice

function roadTrip() {
    var gallons = 12; // bad practice to use var inside local scope
    var mpg = 34; // bad practice to use var inside local scope
    return gallons * mpg;
}
roadTrip(); // 408

// challenge
// scope chain
// local scope => parent scope => grandparent scope=> great grandparent scope =>
// etc... => global scope => error

// Best practice
var gallons = 12; 
var mpg = 34; 

function roadTrip() {
return gallons * mpg;
}
roadTrip(); // 408


// strict mode example in the console with an IFFE
(function(){
    'use strick';
    food = 'pizza';
}());


// Nested function
// build a nested function
// child scope => parent scope => global scope
// run the results of the child scope

// have the innermost child function grab a value from the parent and 
// grandparent scope


// global scope
var height = 10;

function volume() {
// parent scope
var width = 10;
var length = 10;
var volumeOfObject = function(){
    // child or local scope
    return length * width * height;
 }
  // return value of function expression volumeOfObject
  return volumeOfObject()
}
volume()//1000

