// Call Method
/*
The call() method calls a function with a given "this"
value arguments provided individually.

SYNTAX
fun.call(object, arg1, arg2,..)
*/

var obj = {num: 2};
var addToThis = function(a, b, c){
  return this.num + a + b + c;
};
addToThis.call(obj, 1, 2, 3);
// 8

var person1 = { firstName: 'John', lastName: 'Doe'};
var person2 = {firstName: 'Jane', lastName: 'Doe'};

function hello (greeting) {
 console.log(greeting + '' + this.firstName + '' + this.lastName);
}

hello.call(person1, 'Hello');


// call method review
// calls a function with a given "this" value and arguments provided individually
// call - indevidual arguments
// apply - array argument
// C(all) - arrguments separated by commas
// A(apply) - arguments of an array
// Syntax

//function.call(thisContextObject, arg1, arg2...)

// Practice

var myLanguages = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};


// challenge 
// create two people objects with a name property and value
// use the call method on our function
// pass person object as the first argument followed by arguments for lang1, lang2 and lang3

var person1 = {
    name: 'Tim'
}

myLanguages.call(person1, 'JavaScipt', 'Ruby', 'Python');

// My name is Tim and I know JavaScipt, Ruby, and Python

var person2 = { name: 'Sarah'};

var languages = ['English', 'Spanish', 'German'];

myLanguages.call(person2, languages[0], languages[1], languages[2]);
// My name is Sarah and I know English, Spanish, and German