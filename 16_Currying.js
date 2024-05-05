function sum(a,b,c){
    return a+b+c;
}

// curried


function sum2(a){
   return function(b){
        return function(c){
            return a+b+c;
        }
        
    }
}



function curry(func){
    return function(a){
        return function(b){
            return function(c){
                return func(a,b,c);
            }
        }
        
    }

}


function curry2(func){
    return (a) => (b) => (c) => func(a,b,c);
}


const curriedSum = curry(sum)
console.log('curriedSum :', curriedSum(1)(4)(10)); // 15
console.log('sum :', sum(1,4,10)); // 15
console.log('sum2 :', sum2(1)(4)(10)); // 15

/**
 * Currying
The process of transforming a function to treat its parameters as a sequence of individual function calls that each take one parameter. For example, func(a, b, c) would become func(a)(b)(c).

Currying is achieved by creating functions that return other functions, taking advantage of closures. For example, a curried sum function would look like this:

function curriedSum(a) {
  return function(b) {
    return a + b;
  };
}
This could then be used to create partial versions of this function, for example an "add four" function:

const addFour = curriedSum(4);
addFour(10); // 14

 */