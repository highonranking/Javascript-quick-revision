"use strict"
console.log(this); // window obj

function logthis() {
    console.log(this);  // non strict mode => window; strict mode=> undefined
}


const logthisArrow = () => {
    console.log(this);  // non strict mode => window; strict mode=> undefined
}  // arrow function do not get this binding, they will log window ie the env above it




const obj ={
    num:10,
    logthis
}

obj.logthis(); // {num: 10, logthis: ƒ}logthis: ƒ logthis()num: 10[[Prototype]]: Object => logs the obj


// with event listeners

const button = document.querySelector('button');

button.addEventListener('click', logthis);  // it will log button tag => <button>Click</button>



// binding this

// suppose we have an obj that we want to pass as the this parameter

// suppose we have an obj

function logthis(x,y) {
    console.log(this);
    console.log(x,y);  // 10 7
}

const obj2 = {
    num:10
}




// i dont want logthis() as a property on the object, I just want to call logthis() with the bound to the object

const boundLogThis = logthis.bind(obj2);
boundLogThis(10,7); //{num: 10}

// other way to pass param


{
function logthis(x,y) {
    console.log(this);
    console.log(x,y);  // 10 7
}

const obj2 = {
    num:10
}




// i dont want logthis() as a property on the object, I just want to call logthis() with the bound to the object

const boundLogThis = logthis.bind(obj2, 10, 7);
boundLogThis(); //{num: 10}
}

// also if we have param in boundLogThis(10), and in logthis.bind(obj2, 10, 7); logthis.bind(obj2, 10, 7) will
// have higher priority


// binds returns a fun,,, if we directly wanna call the fun, use call


logthis.call(obj2, 10,20) // direcly call


// first para expect obj, if we pass suppose a number, it may behave differntly
// eg, in non-strict mode, number of other para will converted to wrapper obj
// null / undefiened => window obj

// we also have apply

// similar to call => diff, rather than passing param indivudually, we pass them in array

logthis.apply(obj2, [10, 20]);


//// this with array iterations

[1,2,3].forEach( function(num){
    console.log(this);// window without use strict, otherwise undefined; with arrow cb fn, its windows
    console.log(num)// 1 2 3 
})



[1,2,3].forEach( function(num){
    console.log(this);// now it will log the obj we passed in; with arrow cb fn, its windows
    console.log(num)// 1 2 3 
}, {num:20})// we passed an obj num:20




// this and classes


class Person{
    constructor(name){
        console.log(this); // bound to  empty obj that got created
        this.name = name;
        console.log(this); // Person {name:"Abhinav"}
    }

    speak(){
        console.log("hello I am " + this.name); // this will refer to current obj
    }


}

const dev = new Person('Abhinav');
dev.speak(); // hello I am Abhinav


/**
 * Key Terms
*********this***********
A JavaScript keyword for referencing the context in which the current code is running.

The value of this is determined at runtime. In the browser, it will follow these general rules:

At the top level of a file (the global context), this refers to the global object, which is the window.
In a standard function without strict mode, this refers to the global object, which is the window.
In a standard function in strict mode, this is undefined.
In an object method, this refers to that object.
In a constructor function, this refers to the object being constructed.
When using event listeners, the object being listened to will be bound to this, assuming a standard function was used. For example, element.addEventlistener('click', func) would bind element to this inside of func.
Arrow functions do not create their own this context, instead they retain the value of the enclosing context.

JavaScript provides three functions for binding the value of this to functions:

func.bind(thisArg): Returns a new function with thisArg bound to this.
func.call(thisArg, x, y): Calls func(x, y) with thisArg bound to this.
func.apply(thisArg, [x, y]): Calls func(x, y) with thisArg bound to this.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */
