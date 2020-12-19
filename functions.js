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
