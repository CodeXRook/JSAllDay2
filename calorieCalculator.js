/*
Challenge: The program will determine the actual and ideal calories 
you consumed last week. It will return a message based on if you ate too much 
or too little.
*/

// The first problem to solve is determining how many calories
//  you consumed each day of the week.

// Instead of writing seven different functions (one for each day of the week), 
// let's write one function with a parameter for the day


// return any given day's number of calories consumed
// it will accept an argument of 'day' and return a number
function inputCalorieByDay(day){
   if (day === 'Monday') {
       return 3500;
   } else if (day === 'Tuesday') {
       return 1500;
   } else if ( day === 'Wednesday') {
       return 1800;
   } else if (day === 'Thursday') {
       return 2300;
   } else if (day === 'Firday') {
       return 2400;
   } else if (day === 'Saturday') {
       return 1500;
   } else if (day === 'Sunday') {
       return 1500;
   } else {
       return 'Please Choose a Mf\'n valid day dawg'
   }
}

// returns the value of total calories consumed in a week
function getTotalCalories(){
    
}