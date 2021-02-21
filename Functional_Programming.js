/* 
JavaScript can handle higher-order functions.
A higher-order function is a finction thart can 
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