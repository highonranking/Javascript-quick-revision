// // function calculate(funct, input){
// //     let output  = [];
// //     for(let i=0; i<input.length; i++){
// //         output.push(funct(input[i]));
// //     }

// //     return output;
// // }


// // function area(r){
// //     return Math.PI * r * r;
// // }

// // function perimiter(r){
// //     return Math.PI * 2*r
// // }


// // let input = [3,4,5];

// // console.log(calculate(area, input)); 
// // console.log(calculate(perimiter, input)); 





// // function x(){
// //     let count = 0;
// //     this.increment  = ()=>{

// //         count++;
// //         console.log(count);
// //     }
// //     this.decrement = () => {
// //         count--;
// //         console.log(count);

// //     }
// // }

// // let c = new x();
// // c.increment();
// // c.decrement();





// let arr = [2,4,6,8,10, 123];

// // var doubleArr  = arr.map((ind)=>{
// //    ind=ind*2;
// //    // console.log(ind);
// // })


// // let filtergreater5 = arr.filter((ind, inx, array)=>{
// //     console.log(ind, inx, array)
// //     return ind>5;
// // })

// // let test = arr.reduce((acc, curr)=> {
// //     acc += curr;
// //     return acc;
// // },0);


// // let maxi = arr.reduce((acc, curr)=>{
// //     acc = Math.max(acc, curr);
// //     return acc;
// // },0)

// //  console.log(maxi);

// const users = [
//     { firstName: "Abhinav", lastName: "Dixit", age: 22 },
//     { firstName: "Sneha", lastName: "Patel", age: 30 },
//     { firstName: "Rahul", lastName: "Gupta", age: 25 },
//     { firstName: "Priya", lastName: "Sharma", age: 28 },
//     { firstName: "Amit", lastName: "Singh", age: 35 },
//     { firstName: "Neha", lastName: "Kumar", age: 29 },
//     { firstName: "Vikram", lastName: "Yadav", age: 26 },
//     { firstName: "Ananya", lastName: "Joshi", age: 23 },
//     { firstName: "Rajesh", lastName: "Shah", age: 32 },
//     { firstName: "Pooja", lastName: "Verma", age: 27 }
// ];



// // fName => age<25


// // var names = users.filter((user)=>{
// //     return user.age<25;
// // }).map((name)=>{
// // return name.firstName
// // });


// var names = users.reduce((acc, curr)=>{
//     if(curr.age<25){
//         acc.push(curr.firstName)
//     }
//     console.log(acc);
//     return acc
// },[])

// console.log(names);


// make row and col 0



debugger;

function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    

//
//

//kadanes


function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr1.length;
const maxSum = maxSubarraySum(arr1, n);
console.log("The maximum subarray sum is: " + maxSum);




///


// 0 1  2

//
function sortArray(arr) {
    let low = 0, mid = 0, high = arr.length - 1; // 3 pointers

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}

function main() {
    let arr = [0, 2, 1, 2, 0, 1];
    sortArray(arr);
    console.log("After sorting:");
    console.log(arr.join(" "));
}

main();


numbers.sort((a,b)=> a-b);

// stock max profit

function maxProfit(prices) {
    let maxPro = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxPro = Math.max(maxPro, prices[i] - minPrice);
    }
    
    return maxPro;
}

let prices = [7, 1, 5, 3, 6, 4];
let maxPro = maxProfit(prices);
console.log("Max profit is: " + maxPro);



///

// rotate by 90

function rotate(matrix) {
    const n = matrix.length;
    // Transposing the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reversing each row of the matrix
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(arr);
console.log("Rotated Image");
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
       // process.stdout.write(arr[i][j] + " ");
    }
    console.log();
}



// overlapping




function mergeOverlappingIntervals(arr) {
    const n = arr.length;
    
    // sort the given intervals
    arr.sort((a, b) => a[0] - b[0]);
    
    const ans = [arr[0]];
    
    for (let i = 1; i < n; i++) {
      const last = ans[ans.length - 1];
      const curr = arr[i];
      
      // if the current interval overlaps with the last interval
      if (curr[0] <= last[1]) {
        last[1] = Math.max(last[1], curr[1]);
      }
      // if the current interval does not overlap with the last interval
      else {
        ans.push(curr);
      }
    }
    
    return ans;
  }
  
  const arr3 = [[1, 3], [8, 10], [2, 6], [15, 18]];
  const ans3 = mergeOverlappingIntervals(arr);
  console.log("The merged intervals are:");
  for (let it of ans3) {
   // console.log(ß`[${it[0]}, ${it[1]}]`);
  }




  print1to5 = (n) => {
        if(n>0){
            print1to5(n-1);
            document.write(n + " ");
        }
        return;
  }
  
  

  print1to5(5);


  
  
  function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6 ,4,5,[8,3,2]])); // Output: [1, 2, 3, 4, 5, 6]



// duplicate

function findDuplicate(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
      if (!freq[arr[i]]) {
        freq[arr[i]] = 1;
      } else {
        return arr[i];
      }
    }
    return 0;
  }
  
  let arr33 = [1, 3, 4, 2, 3];
  console.log("The duplicate element is " + findDuplicate(arr33));
  


  function twoSum(n, arr, target) {
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let moreNeeded = target - num;
        if (map.has(moreNeeded)) {
            return "YES";
        }
        map.set(num, i);
    }
    return "NO";
}

let nu = 5;
let arr22 = [2, 6, 5, 8, 11];
let target = 14;
let ans2 = twoSum(nu, arr22, target);
console.log("This is the answer for variant 1: " + ans2);



function maxLen(A, n) {
    let mpp = new Map();
    let maxi = 0;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += A[i];
      if (sum === 0) {
        maxi = i + 1;
      } else {
        if (mpp.has(sum)) {
          maxi = Math.max(maxi, i - mpp.get(sum));
        } else {
          mpp.set(sum, i);
        }
      }
    }
  
    return maxi;
  }
  
  let A = [9, -3, 3, -1, 6, -5];
  let n = A.length;
  console.log(maxLen(A, n));






function singleNonDuplicate(arr) {
    let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the single element:
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }

        // We are in the left:
        if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
                || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    // Dummy return statement:
    return -1;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);


let flag = 1000;


while(flag--) {
	setTimeout(() => { 
	console.log("flag", flag--);
}, 1000);
}
