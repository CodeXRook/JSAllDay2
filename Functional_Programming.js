/* 
JavaScript can handle higher-order functions.
A higher-order function is a function that can 
take another function as an argument, or that 
returns a function as a result.
*/





var testScore = [92, 87, 54, 63, 75, 59];
var passingTest = function(test){
    return test > 60;
}
var gradution = testScore.filter(passingTest);

var graduation = testScore.filter(function(test){
    return test > 60;
})


var testScore = [92, 87, 57, 63, 75, 59];
var graduation = [];

for(var i = 0; i < testScore.length; i++)
 if (testScore[i] > 60){
     gradution.push(testScore[i]);
 }

 // review
 // functional programming
 // pillar of JavaScript
 // functions ara values and can be passed other functions as arguments
 // higher order functions, pure functions

 // Object Oriented Prorgamming Dilemna

 // you want a banana
 // you ask for a banana
 // you get a banana
 // you also get the gorilla that was holding the banana 
 // you also get the jungle that the gorilla was living in

 // Practice 

 var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
 // check for condition to be true, if true push to new array
 // any temp above 70
 var goOutside = [];
for (var i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
        goOutside.push(weather[i]);
    }
}

goOutside;

// pratice
// filter method
// pass a function to filter method and return array of all elements that return a value true

var niceWeather = function(temp) {
    return temp > 70;
}

var goOutside = weather.filter(niceWeather);
goOutside;
[72, 84, 92, 85, 72]


// another way 

var goOutside = weather.filter(function(temp) {
    return temp > 70;
})

goOutside;
[72, 84, 92, 85, 72]

// Build array with objects

var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: true},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
];

var sunnyDays = [];

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}

/// With filter 

var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: true},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
];

var sunnyDays = forecast.filter(function(weather) {
    return weather.sun;
})


// PURE FUNCTION
// A function is pure if, given the same input,
// it will always produce the same output.

/* 
Math.random() produces a new random number
between 0 and 1 everytime you run it. This is an example of a 
function that given the same input
does not return the same output.
 */

 /* 
 map() Creates a new array with the results
 of calling a provided function on 
 every element of an array.
*/

var forecast = [
    {day: 'Monday', sun: true, humidity: 10},
    {day: 'Tuesday', sun: false, humidity: 100},
    {day: 'Wednesday', sun: true, humidity: 100},
    {day: 'Thursday', sun: true, humidity: 25},
    {day: 'Friday', sun: false, humidity: 100},
    {day: 'Saturday', sun: true, humidity: 15},
    {day: 'Sunday', sun: false, humidity: 100}
];

var humid = [];
//Statement1 Counter //Statement2 Test condi // Statement3 Update once gone through
for (var i = 0;   i < forecast.length;     i++) {
    humid.push(forecast[i].humidity);
}

var humid = forecast.map(function(wetness) {
    return wetness.humidity;
})
humid; 


//////

// review 
// map
// Map is a higher order function - can receive another function as an argument
// does not delete but transforms each element in a new array

// practice

var numbers = [2, 4, 6, 8, 10, 12];

var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function(mult){
    return mult + 1;
})
// double;[5, 9, 13, 17, 21, 25]

// challenge 
// change an array of greetings to all upper case words
// save the first word in the array to a variable 

var greeting = ['hi', 'hello', 'hey', 'thanks'];

var shout = greeting.map(function(salutation) {
    return salutation.toUpperCase();
})
// 
var hiShout = shout.shift();
hiShout;
'HI'

// Reduce();
/* 
Applies a function against an accumaltor 
and each value of the array [from left to right]
To reduce it to a single value.
*/

var numbers = [1,2,3,4];
numbers.reduce(function(acc,acc,curr,idx,arr){
    return acc + curr;
},5);

// reduce mulitple array to one array
var multArr = [[0,1],[2,2],[4,5]];
mulitArr.reduce(function(acc,curr,idx,arr){
    return acc.concat(curr);
}, [-2,-1]);

// review reduce 
// Higher order function
// two arguments
// high customization

// pracice

var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
    {batter: 22},
    {batter: 17},
    {batter: 16},
    {batter: 5}
];

var totalHomers = homeruns.reduce(function(a, b) {
    console.log('accumulative', a, 'current', b);
    return a + b.batter;
}, 0);

// challeng
// create an array of 5 elements
// find the sum, product, and largest value

var numbers = [5, 10, 15, 20, 25];

numbers.reduce(function(x, y) {
    console.log(x, y);
    return x + y;
});

// product
numbers.reduce(function(x, y) {
    console.log(x, y);
    return x * y;
});

//

numbers = [10, 5, 20, 25, 15];
// find largest number in array

numbers.reduce(function(acc, curr) {
    if (acc > curr) {
        return acc;
    }
    else {
        return curr;
    }
});

// practice 
// use map method on all elements of an array
// use reduce method to return single value of new array
// CHALLENGE
// chain method

var numbers = [1,2,3,4];
var triples = numbers.map(function(number){
    return number * 3;
}).reduce(function(a, b){
    return a + b;
}, 0);
triples; // 30