console.log(5=='5'); // loose euality => true
console.log(5==='5'); // strict equality => type check => false


console.log(Number('abc')); // NaN

console.log(NaN==NaN); // false

// null vs undefined

if(x===null || x===undefined){   // x==null as null==undefined
    // 
}

console.log({}=={}); // false => they are diffeent obj

/*
Loose Equality
The most basic equality operator in JavaScript using ==. Loose equality compares values regardless of types following these steps:
    - If both values are either null or undefined, return true.
    - Convert all booleans to numbers. True converts to 1 and false converts to 0.
    - If comparing a number to a string, convert the string to a number.
    - If comparing an object to a string, convert the object using its toString() or valueOf() methods.
    - If the types are the same, follow the same rules as strict equality.
In general, strict equality should be preferred due to it being easier to predict.
However, loose equality can be useful for checking against null and undefined at once with value == null.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality


Strict Equality
A JavaScript equality operator using ===. Strict equality compares both values and types following these steps:
If either value is NaN, return false.
If the values have different types, return false.
If both values are null or both values are undefined, return true.
If both values are objects, return true if they are the same object. False otherwise.
If both values are of the same primitive type, return true if the values are the same. False otherwise.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

*/


"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false


const object1 = {
    key: "value",
  };
  
  const object2 = {
    key: "value",
  };
  
  console.log(object1 == object2); // false
  console.log(object1 == object1); // true

  
/*
  strings constructed using new String() are objects. If you compare one of these with a string literal, the String object will be converted to a string literal and the contents will be compared. 
  However, if both operands are String objects, then they are compared as objects and must reference the same object for comparison to succeed

*/
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true



const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true

const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const f = c.toString(); // "true,0.5,hey"
c == f; // true


