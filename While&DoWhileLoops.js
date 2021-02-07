//While example

var score = 0;
while(score < 5) {
    console.log(score);
    score++;
}
/*
 0    
1
2
3
4
5 is not less than 5, that's false.
*/


// Do/while

var value = 5;
do{
    console.log(value);
    value++;
} while (value < 13);
/*
5
6
7
8
9
10
11
12
12
*/


// For loop

for(var i = 0; i <10; i++) {
    console.log('My favorite number is ' + i + '!');
}
/*
My favorite number is 0!
My favorite number is 1!
My favorite number is 2!
My favorite number is 3!
My favorite number is 4!
My favorite number is 5!
favorite number is 6!
My favorite number is 7!
My favorite number is 8!
*/


// Loop through Array

var zooNames = ['lion', 'tiger', 'bear'];
var arrayLength = zooNames.length; // 3
for(i = 0; i < arrayLength; i++) {
    console.log('My favorite zoo animals is the ' + zooNames[i] + '!');
}
/*
My favorite zoo animals is the lion!
My favorite zoo animals is the tiger!
My favorite zoo animals is the bear!
*/


// REVIEW LOOPS PART2

// Challenge
// run a while loop 5x's
// counter, while keyword, (expression), {code block}, update value

var i = 0;
while (i < 5) {
    console.log('This counter has run ' + (i + 1) + ' times.');
    i++;
}
/*
This counter has run 1 times.
This counter has run 2 times.
This counter has run 3 times.
This counter has run 4 times.
This counter has run 5 times.
*/


// Challenge do/while
// create one example theat run once with a false expression

var counter = 5;
do {
    console.log('Loop ran even with false expression.');
    counter++;
} while (counter < 5);
// Loop ran even with false expression.

// For loop challenge
// create and array number values
// loop through that array with a for loop
// run each element of the array through an if, else, else if clause with at least two else if options

var battingAverage = [333, 327, 267, 294, 303, 310, 255, 242, 217];
for (i = 0; i < battingAverage.length; i++) {
  if( battingAverage[i] > 300) {
      console.log('Here is a million dollar bonus');
  } else if (battingAverage[i] > 280){
      console.log('Here is a half million dollar bonus');
  } else if (battingAverage[i] > 250) {
      console.log('Try harder');
  } else {
      console.log("You're cut");
  }
}
battingAverage(500);