// const person = {
//     isHuman: true,
//     name:"Abhinav"
// };



// const child = Object.create(person);
// child.maxAge = 18;

// // console.log(child);  // {}

// // console.log(child.name); // Abhinav  // this exist in its prototype !


// // console.log(person); // { isHuman: true, name: 'Abhinav' }




// // or we can directly update proto  => BAD dont use

// const child2 = {};

// child2.__proto__ = person;

// // console.log(child2.name);  // Abhinav


// const child3 = Object.create(person);
// child3.minAge = 18;

// // console.log(person.minAge);   //undefined

// // console.log(child3.minAge);   // 18



//     const child4 = Object.assign(Object.create(person), {
//         maxAge: 20,
//     })

//     // console.log(person.maxAge); // undefined
//     // console.log(child4.isHuman); // true
//  // alternatevely can use --> setPrototypeOf(child4, person)


//  const john = Object.create(child);
//  john.name = 'John'

// //  console.log(john); //{ name: 'John' }

// //  console.log(john.__proto__); //{ maxAge: 18 } // child proto

// //  console.log(john.__proto__.__proto__); // { isHuman: true, name: 'Abhinav' }  // person proto


// //  console.log(john.__proto__.__proto__.__proto__); // person's proto => [Object: null prototype] {}



// //  child.maxAge = 19;

// //  console.log(john.maxAge); // 19



//  const funcProto = Object.getPrototypeOf(()=>{})
//  //console.log(Object.getOwnPropertyNames(funcProto));





//  const array = Object.getPrototypeOf([])
//  //console.log(Object.getOwnPropertyNames(array ));

// /**
//  * [
//   'length',        'constructor',    'at',
//   'concat',        'copyWithin',     'fill',
//   'find',          'findIndex',      'findLast',
//   'findLastIndex', 'lastIndexOf',    'pop',
//   'push',          'reverse',        'shift',
//   'unshift',       'slice',          'sort',
//   'splice',        'includes',       'indexOf',
//   'join',          'keys',           'entries',
//   'values',        'forEach',        'filter',
//   'flat',          'flatMap',        'map',
//   'every',         'some',           'reduce',
//   'reduceRight',   'toLocaleString', 'toString',
//   'toReversed',    'toSorted',       'toSpliced',
//   'with'
// ]

//  */



// // Function Constructor


// function Person(name){
//     this.name = name;
// }

// Person.prototype = {
//     constructor: Person,
//     isHuman: true,
// }


// const Abhinav = new Person('Abhinav');
// // console.log(Abhinav); //Person { name: 'Abhinav' }
// // console.log(Abhinav.isHuman);// true

// // console.log(Object.getPrototypeOf(Abhinav)); // { constructor: [Function: Person], isHuman: true }


// const Ekta = new Person('Ekta')

// // console.log(Ekta); //Person { name: 'Ekta' }


// // console.log(Object.getPrototypeOf(Abhinav) === Object.getPrototypeOf(Ekta)); //true
 

// // ///moreover


// Abhinav.__proto__.foodie = 'Yes';
 
// // console.log(Ekta.foodie); //Yes
// // // cz they are the same protype


// // /// instad of new Person, we can also use constructor


// const Neha = new Abhinav.constructor('Neha'); // Person { name: 'Neha' }

// // console.log(Neha);


// Person.prototype.speak = function () {
//     // console.log(`Hello this is ${this.name}`);
// }


// // Abhinav.speak();

// // // instance of

// // console.log(Abhinav instanceof Object); // true


// ///implementing fn to prototype  .. polyfill


// Array.prototype.push  = function(value){
//     this[this.length] = value;
// }

// const arr = [1,2,3];
// arr.push(4);

// console.log(arr);


//  class Person2 {
//     isHuman=true;
//     constructor(name){
//         this.name=name
//     }
//     speak(){
//         console.log('Hello '+this.name);
//     }

//     get Name(){
//         return this.name;
//     }

//     static greet(){
//         console.log('Hellp');
//     }

//     set Name(name){
//         this.name = name;
//     }
// }


// const abhinav = new Person2('abhinav');
// abhinav.speak();


// abhinav.Name = 'Payal'

// console.log(abhinav);


// console.log(Person2.greet());//Hellp
// console.log(abhinav.greet()); //TypeError: abhinav.greet is not a function







 class Person {

    constructor(name){
        this.name=name
    }
    speak(){
        console.log('Hello '+this.name);
    }
}

class Child extends Person{
    #age; //  made age private
    constructor(name, age){
        super(name);
        this.#age = age;
    }
}


const child = new Child('Abhi', 2);

child.speak() //Hello Abhi


//console.log(child.#age); ///SyntaxError: Private field '#age' must be declared in an enclosing class
console.log(child.age);//undefined



/**
 * 
 * 
 * Key Terms
Prototypal Inheritance
The inheritance model used in JavaScript. The key difference between prototypal inheritance and classical inheritance is that in prototypal inheritance objects only inherit from other objects, rather than using class blueprints.

Prototype Chain
The chain of inheritance created through object prototypes. When a property does not exist on an object, JavaScript will look to its prototype. If it doesn't exist on that object, it will look to its prototype and so on until the chain ends with a null prototype.

Internally, the prototype is stored on the [[Prototype]] property, but we cannot directly access this property. Instead, we have a few alternative ways to get and set prototypes:

obj.__proto__: Although being deprecated, this property was the original way to get and set the prototype of an object and is still useful for debugging.
Object.getPrototypeOf(obj): Returns the prototype object of obj.
Object.setPrototypeOf(obj, proto): Sets the prototype object of obj to proto.
Object.create(proto): Creates a new object with the prototype set to proto.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
Function Constructor
A function intended to be used to construct an object using the new operator.

When the new operator is used, a new object is created automatically. The prototype of the new object is then set to the prototype property of the constructor function (remember functions are just objects). Finally, the constructor function is called with the new object bound to this.

By default the prototype property of the function will simply be an object with its constructor property set to the function itself. However, this can be changed, for example:

function Person(name) {
  this.name = name;
}

// This object will become the [[Prototype]] of
// any objects resulting from a new Person() call
Person.prototype = {
  constructor: Person,
  isHuman: true
}

const clement = new Person('Clement');
console.log(clement.isHuman); // true, comes from the prototype object.
Class
A JavaScript syntax to emulate that of classical inheritance, although for the most part it is syntactic sugar on top of function constructors (classes are actually just functions under the hood).

An example class would look like this:

class Person {
  static isHuman = true; // public static field
  #age; // private instance field

  constructor(name, age) {
    this.name = name; // public instance field
    this.#age = age;
  }

  // instance method
  speak() {
    console.log('Hello this is ' + this.name);
  }

  // instance getter function
  get age() {
    return this.#age;
  }

  // instance setter function
  set age(value) {
    this.#age = value;
  }
}

const conner = new Person('Conner', 24);
conner.speak(); // logs "Hello this Conner"
console.log(conner.age); // calls getter function, logs 24
conner.age = 25; // Calls setter function
console.log(conner.#age); // Error cannot access private field
console.log(conner.name); // "Conner"
console.log(conner.isHuman); // undefined
console.log(Person.isHuman); // true
Classes can also extend other classes, which internally creates a prototype chain. In the class constructor, super can be used to call the parent constructor. super.method() can also be used in the class to call parent classes. For example:

class Child extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
 */