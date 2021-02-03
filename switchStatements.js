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