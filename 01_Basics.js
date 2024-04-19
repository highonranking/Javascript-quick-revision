/*  JS ❤️
Multi-paradiym dynamic, general purpose language designed for the web
    - Event Driven: Responds to events
    - Functional: Pure fn, First Class Fns
    - Object-oriented: Custom obj with inheritence
    - Imperative: Specify lofic and control Flow
    - Declarative: Specify desired output
*/


/* JS Engine 
    - Executes code in the browser
    - Just-in-time compilation (or interpreted)
*/


/* Primitive Types
    - Number
    - BigInt - 20n, BigInt(99990000000000000)
    - Boolean
    - String
    - Symbol: Symbol('description') - dynamic generated unique value
    - Null
    - Undefined
*/

/* 
let num = 10;
console.log(num);
num = 20;
console.log(num);  // num val will be updated 
*/


/* 
const num = 10;
console.log(num);
num = 20;
console.log(num);  // ERROR - TypeError: Assignment to constant variable
*/

/*
let num = 10.8;
console.log(Math.floor(num)); // 10
*/

/*
let num = 10.8;
console.log(Math.round(num)); // 11
*/


/*
console.log(Math.random()); // random decimal value btw (0,1);
*/

/*
let str = '10.8';
console.log(Number(str)); // 10.8 - conver str to int
let str2 = '10px';
console.log(Number(str2)); // NaN


*/

/*
let str = '10.8';
console.log(parseInt(str)); // 10 - conver str to int(whole)
let str2 = '10px';
console.log(parseInt(str2)); // 10
*/

/*
let str = '10.8';
console.log(parsefloat(str)); // 10.8 - conver str to float
let str2 = '10.8px';
console.log(parseInt(str2)); // 10.8
*/

/*
 10==='10' // false
 10 == '10' // true
*/


/*
Math.pow(2,3); // 8 
*/ 


/* 
log(Infinity) // Infinity
log(-Infinity) // - Infinity
*/

/**
console.log(BigInt(100));  // 100n
console.log(100n);  // 100n
console.log(typeof 100n); // bigint
*/

/*

let str = 'abcd';
console.log(str+10); // abcd10
console.log('single quote \' '); 
console.log(`result: ${10+20}`); // result: 30
console.log(str[1]); // b
console.log(str.charAt(1)); // b
console.log(str.includes('b')); // true
console.log(str.startsWith('e')); // false
console.log(str.endsWith('d')); // true
console.log(str.toUpperCase().toLowerCase()); // abcd -> ABCD -> abcd
console.log(str.substring(1,2));//b
console.log(str.slice(1,5)); //bcd
 //- These do not change the original string

 console.log(str.padStart(7,'-')); // ---abcd
 console.log(str.padEnd(7,'-')); // abcd---


let str2 = '        abcd';
console.log(str2.trim()); // will trim all blank spaces => abcd
console.log(str2.trimStart());
console.log(str2.trimEnd());


let str3 = 'a,b,c,d';
console.log(str3.split(',')); //['a', 'b', 'c', 'd']


*/



/*
 Objects
    

const person = {
    name:"Abhinav",
    age: 23,
}

// obj to string

console.log(JSON.stringify(person)); //{"name":"Abhinav","age":23}
console.log(JSON.parse(JSON.stringify(person))); // back to obj => {name: 'Abhinav', age: 23}

person.name = 'Ekta'; // we can change the value, we cant resign the obj 
console.log(person); //{name: 'Ekta', age: 23}

*/



/*
// Map

// just prototype implementation - unrelated specific to map
const map = new Map();
console.log(map);

Map.prototype.myVal = ()=>{
    console.log("new Feature");
}

map.myVal();


// lets get back to basics :)

map.set(143,"I love you");

console.log(map.get(143));
console.log(map.size);
console.log(map.get(11334848)); // undefined
*/


/**
 * Set
 * const set = new Set();
 * console.log(set); // empty set
    set.add("hello");
    set.add('world');
    console.log(set.has("hello")); // true
    console.log(set.size) // size of set
    set.delete("hello");
 */


/**
 * Arrays
 * const arr = [1,2,3];
 * log(arr);
 * log(arr.length)
 * arr.push(4);
 * 
 * arr at the end of the day is an objects !!
 * 
 * console.log(typeof arr); // obj
 * 
 */


/**
 * Function
 * 
 * function addTwo(num) {
 *      return num+2;
 *  }
 * 
 *  function addTwo(num=6) {   // default value passed, if no arg passed in param, it will take the default value!
 *      return num+2;
 *  }
 * 
 * console.log(addTwo(3));
 * 
 * function callFunc(func, param){
 *      console.log(func(param));
 * }    
 * 
 * 
 * callFunc(addTwo, 3) => 5
 * 
 * log(typeof addTwo)  // function
 * log(addTwo instanceof Object); // true
 *  */



/**
 * Loops
 * for(let i=0; i<5; i++){
 *  log(i);
 * if(i===1) break;
 * }
 * // can use continue to skip
 * 
 * while(i<5){
 *  log(i)
 *  i++;
 * }
 * 
 * // do while loop also exist => same logic
 * 
 * 
 * for(const value of [1,2,3]){
 * log(value)
 * }
 * 
 * // 1 2 3
 * 
 * for(const value of 'abc'){
 * log(value)
 * }
 * 
 * // a b c
 * 
 * 
 * const obj = {
 *      name: "Abhinav",
 *      sex: "Male",
 * }
 * 
 * for(const key in obj){
 *      log(key); // name, sex...
 *      log(obj[key]) // Abhinav, Male...
 * }
 * 
 * 
 * [1,2,3].forEach(function(value){
 *      log(value);
 * })
 * 
 * // 1 2 3
 * 
 * 
 * if else same!!
 * 
 * 
 * ternaray operator => you knwo it :)
 */


/**
 * throw 'Oh No'; // will throw 
 * throw new Error('oh nooo');
 * 
 * try{
 * throw new Error('oh nooo');
 * }
 * catch(err){
 * log(err)
 * 
 * }
 * 
 * // it will log err
 * 
 *  */


/**
 * console.log
 * console.warn
 * console.error
 * console.table
 * console.time('key'); console.timeEnd('key');
 */


/**
 * 'use strict'
 * 
 * c=5; // err with strict
 */




