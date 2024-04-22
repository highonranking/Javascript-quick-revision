// arrow functions

const arr = [1,2,3,4];
const doubled = arr.map((val) => {
    return val*2;
})
console.log(doubled);


/**
 * Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
 * Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. 
 * They also don't have access to the new.target keyword.
 * Arrow functions cannot use yield within their body and cannot be created as generator functions.
 * 
 */


const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed


//Returning object literals using the expression body syntax (params) => { object: literal } does not work as expected.

const funct = () => { foo: 1 };
// Calling func() returns undefined!

const func2t = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'


//This is because JavaScript only sees the arrow function as having an expression body if the token following the arrow is not a left brace,
// so the code inside braces ({}) is parsed as a sequence of statements, where foo is a label, not a key in an object literal.
//To fix this, wrap the object literal in parentheses:
const func4t = () => ({ foo: 1 });





/****************************************************************** */
//     Destructuring assignment


{
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

}




{
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
} 


{
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
}




{
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable

}


/*
The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
{ a, b } = { a: 1, b: 2 } is not valid stand-alone syntax, as the { a, b } on the left-hand side is considered a block and not an object literal according to the rules of expression statements. However, ({ a, b } = { a: 1, b: 2 }) is valid, as is const { a, b } = { a: 1, b: 2 }.
*/


//Swapping variables

{
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

}

 

// destructuring objects

const person = {
    name:"Abhinav",
    age: 10,
    skills: ['react', 'javascript'],
}

const {name, sex='male', ...rest} = person;
const{name:firstName}  = person

console.log('name', name);
console.log(rest);
console.log('First Name: ', firstName);


const printName = (person) => {
    console.log(person.name);
}
// Destructuring below  

const printName2 = ({name}) => {
    console.log(name);
}

// rest operator

/*
A JavaScript operator using ... for condensing multiple elements into a single array. This uses the same syntax as the spread operator, but functionally is essentially the opposite.

Rest syntax can be used in both arrays and objects to get all of the values not being destructured. For example:
*/

const arrNew = [1, 2, 3, 4];
const [first, second, ...restNew] = arr; // restNew is [3, 4]

const obj = { key1: 1, key2: 2, key3: 3, key4: 4 };
const { key1, key2, ...restNew2 } = obj; // restNew2 is { key3: 3, key4: 4 }

/*
Moreover, rest syntax can be used for function parameters to accept an infinite number of arguments, which are accessible as an array. For example:
*/

function myFunc(...myArguments) {
  console.log(myArguments);
}

myFunc(1, 2, 3, 4); // logs [1, 2, 3, 4]



// spread operator

/**
 * A JavaScript operator using ... for expanding iterables into individual elements. For example myFunction(...myArray) would pass each value in myArray as individual arguments to myFunction.
 * The spread syntax can also be used to combine two arrays, for example, [...arr1, ...arr2] would make a single array with all of the values of both arrays. Similarly, objects can be spread as well. 
 * For example, {key: 'value', ...otherObj} would add all of the fields from the other object into this object.
 * Moreover, {...obj} can be used as a shallow clone of an object, since it creates a new object with the same fields.
 */



{
    const arr = [1,2,3,4,5];
    function add(x,y){
        console.log(x+y);
    }
    function add2(...params){
        // let sum = 0;
        // for(const param of params){
        //     sum += param;
        // }
        //params is an array

        const sum = params.reduce((acc, curr)=> acc+curr)
        console.log(sum);
    }
    add(...arr);
    add2(...arr);

}


{
    const arr = [1,2,3];
    const arr2 = [4,5,6];
    const combined = [...arr, ...arr2];
    console.log(combined); // 1,2,3,4,5,6
}


/**
 * Template Literal
Strings created using backticks `` that allow for inlining expressions rather than needing concatenation. 
Inlined expressions use the syntax ${expression}. 
For example, `Hello ${name}` would have the same output as 'Hello' + name.
 */


/**
 * Null Coalescing
Also referred to as nullish coalescing, an operator using ?? for providing a default value if a value is null. 
If the value on the left side of the operator is not null or undefined, that value is used.
Otherwise, the value on the right side of the operator is used.
 */

const num = null ?? 1234; // 1234
const num2 = undefined ?? 1234; // 1234
const num3 = 5678 ?? 1234; // 5678
const num4 = '' ?? 1234; // ''

/**
 * Optional Chaining
A JavaScript operator using ?. for reading object properties without throwing an error if the object is null.
For example, person?.company?.website will act the same as person.company.website, however if any values in the chain are null or undefined, 
it will return undefined rather than throwing an error.
 */
{
const person = {
    skills:{
        react: 4.8,
        java: 5,
    }
}

console.log(person?.skills?.java ?? '10');
}

/**Short Circuit Evaluation
A method of utilizing the evaluation order of JavaScript to conditionally run code. 
This usually uses the && operator, because for it to return true, both the left and right expressions must be true. 
Since the browser runs code from left to right, if it encounters false on the left side, it does not even run the code on the right side. 
Thus, this can be used to conditionally run code. For example:
*/

true && myFunc(); // calls myFunc()
false && myFunc(); // doesn't call myFunc()

/**
 * Less commonly, short circuit evaluation can also be used with the || operator. 
 * Since this operator only needs one expression to be true, if the left side is true then the right side will not be evaluated. 
 * This is essentially the opposite of the behavior with &&. For example:

 */

true || myFunc(); // doesn't call myFunc()
false || myFunc(); // calls myFunc()