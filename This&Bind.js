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