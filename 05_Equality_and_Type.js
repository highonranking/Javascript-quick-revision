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


