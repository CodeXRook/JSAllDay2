/* Switch Statement
The switch statement is used to evaluate an expression then 
associating it with a case clause and finally running code executing
statements matching that case
 */

// 1. The Switch expression is evaluated once.

// 2. The value of the expression is compared with values of each case.

// 3. If there is a match, the associated block of code is executed.

var gradeRemark = 'B';
switch(gradeRemark){
    case 'A':
    alert('Great job!');
    break; 
    case 'B':
    alert('Good shit');
    break;
    default:
    alert('You are grounded');
}

// Case B GOOD SHIT

// review switch statement
// expression, case run code for match
// break
// default

/* 
 syntax

   switch(expression) {
    case a:
     code block;
     break;
    case b:
     code block;
     break;
    case c: 
     code block;
     break;
     default:
     code block;
   }

*/

// Challenge 
// Create switch with evaluation balue between 1-6
// Have code block for each possible match to run
// End with default code block
// Expression (1-6) can be hard coded by you or you can create method for random number

var dice = 6;
switch(dice) {
    case 1:
    alert ('Terrible roll');
    break;
    case 2:
    alert ('you suck, next');
    break;
    case 3:
    alert ('damn dawg, nope');
    break;
    case 4 :
    alert ('faaak');
    break;
    case 5: 
    alert ('close but no');
    break;
    case 6:
    alert ('Yes, finally you got 6');
    break;
    default:
    alert ('My g did you roll');
    break;
}

// Make dice roll random with (Math.floor(Math.random())
var dice = 6;
switch(Math.floor(Math.random() * 7)) {
    case 1:
    alert ('Terrible roll');
    break;
    case 2:
    alert ('you suck, next');
    break;
    case 3:
    alert ('damn dawg, nope');
    break;
    case 4 :
    alert ('faaak');
    break;
    case 5: 
    alert ('close but no');
    break;
    case 6:
    alert ('Yes, finally you got 6');
    break;
    default:
    alert ('My g did you roll');
    break;
}