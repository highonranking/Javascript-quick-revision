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
