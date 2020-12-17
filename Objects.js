// an object is a value type consisting of key value pairs.
// Javascript has two main value types primitives and objects.

// What is a primitive? Strings, Numbers, Booleans, Null, Undefined.
// and in ES6 Symbols

// Variables become known as properties 
// if a variable is part of an object it is called a property

var car = {
    wheels: 4,
    color: 'white',
    mpg: 34,
    engine: 5,
    gallons: 17
};

// DOT NOTATION

var car = {};
// object.property = value;

car.wheels = 4;
car.color = 'white';
car.mpg = '34';
car.engine = 5;
car.gallons = 17;

// BRACKET NOTATION

var car = {};
// object['property'] = value;


//Challenge
// build a person with object literal notation
// use three property values consiting of a string, numnber and boolean

var humanBeing = {
    hungry: true,
    age: 25,
    height: '5\10'

// As you can see I turned what might look 
//like a number into a string and use the escape clause to keep
//the single quote in the string text.

};

// BUILD Snowman

var snowman = {
    isSnow: yes,
    color: 'orange',
    madeOfSnowballs: 8,
    'first name': 'Frosty'
};

// challenge
// build a house object
// add 4 property values with dot notation with at least one value type if string, number and boolean
// add 3 property values with bracket notation with 3 property names that can only be added with bracket
// notation rather than dot notation

house = {};
house.doors = 4;
house.bedrooms = 7;
house.address = '4219 S. Othello St';
house.office = true;
house.pool = true;
house.gym = true;
house.saferoom = true;
house.sauna = true;
house.greenhouse = true;