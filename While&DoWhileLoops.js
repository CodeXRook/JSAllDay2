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

