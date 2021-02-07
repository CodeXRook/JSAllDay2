// Magic 8 ball

var userName = prompt('what is your name');

if (userName) {
    console.log('Hello ' + userName + '.');
} else {
    console.log('Hello');
}

var userQuestion = prompt('Please ask a question!');
console.log('User question: ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

var eightBall = ' ';

switch(randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidely so';
        break;
    case 2:
        eightBall =  'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Dont count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;              
}

console.log('The eightball answer: ' + eightBall);