const arr1 = [1,2,3,'hello'];

const arr2 = new Array(); // empty array
const arr3 = new Array(1,2,3) // [1,2,3]
const arr4 = new Array(3); // empty arr of size 3;
arr4.fill(0); // it will fill arr4 with all 0s;


arr1.includes(2); // true
arr1.indexOf(3); // 2 (index of 3)


const arr5 = [1,2,3,3];
arr5.lastIndexOf(3); //3 (from last it will check)


arr1.push(4); // will push 4 at end
arr1.pop(); // will pop last element

arr1.push(5,6,7); // multiple  ele


arr1.unshift(1,2); // push ele in beginning
arr.shift(); // remove first element from the arr

typeof arr; // object

// to check is sth is arr
Array.isArray(arr1); // true
//or
arr1 instanceof Array; // true


// delete ele
arr1.splice(0,3); // (start ind, number of eles)   // [1,2,3,4,5] => [4,5]


arr1.splice(0,1,'hey'); // [1,2,3,4,5] => ['hey', 2, 3, 4, 5]   // 3rd para will be added 

// splice is inplace


// slice

const newArr = arr1.slice(0,3); // [start ind, end ind) => end ind isnt take in count
// this will not modify the original array

//concat

const concatArr = arr1.concat(['ekta', 'abhinav']); // [1,2,3] => [1,2,3,'ekta','abhinav'];


// reverse 

arr1.reverse(); //inplace


arr1.join(' | ');   // [1,2,3] => '1 | 2 | 3'
 

// looping...

for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
}


for (const val of arr1) {
    console.log(val);
}


arr1.forEach((val, index) => {
    console.log(val, index, this);
},{num:20}); // this will log {num:20}


const mappedArr = arr1.map(function(val,index, arr){
    return val + index + this.num
},{num:20});  // [1,2,3] =>  [21, 23, 25]
// it wont change original array


const filteredArray = arr1.filter(function(val,index, arr){
    return val > this.num
},{num:1});  // [1,2,3] => [2,3]


// found => returns first value that matche the condition

const foundValue = arr1.find(function(val,index, arr){
    return val > this.num
},{num:1});  // [1,2,3] => 2 // 2 was returned as it was found first that matched the condition


const foundIndex = arr1.findIndex(function(val,index, arr){
    return val > this.num
},{num:1});  // [1,2,3] => 1 // 1 (which is index) was returned as it was found first that matched the condition


const allPas = arr1.every(function(val,index, arr){
    return val > this.num
},{num:1}) // false
//Determines whether all the members of an array satisfy the specified test. 


const anyPas = arr1.some(function(val,index, arr){
    return val > this.num
},{num:1}) // true
//Determines whether the specified callback function returns true for any element of an array.



/*                                            reduce                                      */

const sum = arr1.reduce(function(accumulator, currentValue, index, arr){
    return accumulator + currentValue;
},0);
// [1,2,3] => 6


const sum2 = arr1.reduceRight(function(accumulator, currentValue, index, arr){
    return accumulator + currentValue;
},0);  // it starts from right hand side of array




/*******************SORT*********************** */

arr1.sort(); //Sorts an array in place.
// This method mutates the array and returns a reference to the same array.

arr1.sort(compareNumbers);

function compareNumbers(firstumber,secondNumber) {
    return firstumber- secondNumber; // ascending
   // return secondNumber - firstumber; // descending
   // return 0; // no change 
}


function compareNumbers(firstumber,secondNumber) {
    // suppose we alway want 3 to come first

    if(firstumber===3) return -1;
    if(secondNumber===3) return -1;
    return firstumber- secondNumber; // ascending
   // return secondNumber - firstumber; // descending
   // return 0; // no change 
}