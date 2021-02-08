// THIS & BIND
/*
In most cases, the value of "this" is determined
by how a function is called. It can't be set by
assignment during execution, and it may be different
each time the function is called. ES5 introduced
the bind method to set the c=value of a function's "this"
regardless of how it's called. Bind creates a new function
that will have "this" set to the first parameter passed to bind().
*/

let cat = {};

cat = {
    sound:'meow',
    speak: function(){
        console.log(this.sound);
    }
};
cat.speak(); //Meow

//

speakFunction = cat.speak;

let speakFunctionBind = speakFunction.bind(cat);

speakFunctionBind();
// Meow


// Review this & bind
// 'this si difined by creation context
// in objects 'this' is set to the object method is called on
// bind
// helps 'this' find context
// pass object as argument to bind method to find desired context

// practice

let person1 = {
    name: 'Alex'
   };

   let person2 = {
    name: 'Alexis'
   };

   function namer() {
    return this.name;
  }

namer.bind(person1)();
// "Alex"

namer.bind(person2)();
// "Alexis"


//
let number = {
    x: 24,
    y: 22
   };


   let count = function() {
    console.log(this.x + this.y);
   }

   count();

   let boundFunc = count.bind(number);
   boundFunc();
   // 46