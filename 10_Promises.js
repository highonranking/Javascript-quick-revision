// state --> pending, fulfilled, rejected
{
const promise = new Promise((resolve, reject) => {
    resolve(2); //
    // or reject
    reject(2);
})

console.log(promise); //Promise {2}

}


 ///////////////// bad aproach ///// 🙈
{
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>resolve(2), 1000);
    })
    
    console.log(promise); //Promise <pending>
    setTimeout(()=>console.log(promise),1500)// promise resolved in 1 sec, so got Promise(2)
}

// good one

promise.then((value)=> console.log(value), error => console.log('phewww' + error ));

// shorter version

promie.then(console.log).catch(error=>console.log(error)) 



///


const promise = Promise.resolve(3);
console.log(promise);


promise.then(value=>value*2)
        .then(value=>value+1)
        .then(console.log)
        .catch(error=>console.log(`phreeee ${error}`));
//3 => 3*2 =6 => 6+1=7


promise.then(value=>value*2)
        .then(value=>value+1)
        .then(value=>{throw new Error('Something went wrong')})
        .then(console.log)
        .catch(error=>console.log(`phreeee ${error}`));

        // didnt went to log, and went to catch



        promise.then(value=>value*2)
        .then(value=>value+1)
        .then(value=>{throw new Error('Something went wrong')})
        .then(console.log)
        .catch(error=>{
            console.log(`phreeee ${error}`)
            return 10;
    
    })
        .then(console.log)
        

        // logs error and then logs 10 retued by catch to next then 




        promise.then(value=>value*2)
        .then(value=>value+1)
        .then(value=>{throw new Error('Something went wrong')})
        .then(console.log)
        .catch(error=>{
            console.log(`phreeee ${error}`)
            return 10;
    
    })
        .then(console.log)
        .finally(
            () => console.log('Donef ')
        ) // wi ll run always 


////

// Promise.all ==> if any promise fails, return err immediately, else wait to resolve promise
Promise.all([
    Promise.resolve(3),
     Promise.resolve(2),
     new Promise((res, rej)=> { 
        setTimeout(()=>res(5), 1000);
     })

]).then(console.log) // (3) [3, 2, 5]



// Promise.race ==> which ever promise resolve firt => return // agar rejct bhi pehle hue h to error hi catch krke dedo


Promise.race([
     new Promise((res, rej)=> { 
        setTimeout(()=>res(5), 2000);
     }),
     new Promise((res, rej)=> { 
        setTimeout(()=>res(1), 1000);
     }),
     new Promise((res, rej)=> { 
        setTimeout(()=>res(4), 3000);
     })

]).then(console.log)//1



// First proimise to fulfill??? ==>> Promise.any() ❤️
// all rejected? throw err

Promise.any([
    new Promise((res, rej)=> { 
       setTimeout(()=>res(5), 2000);
    }),
    new Promise((res, rej)=> { 
       setTimeout(()=>rej(1), 1000);  //rejected
    }),
    new Promise((res, rej)=> { 
       setTimeout(()=>res(4), 3000);
    })

]).then(console.log).catch((err)=>console.log(err))  // 5

// others are allSettled => wait for all to either res/rej and then return arr for all including err





// Async Await

// async fun => implicitly return a promise

async function tester(){
    return 3;
}
console.log(tester);   // Promise {3}

// it uses await keyword that wait for promise to settle before it continues
 
async function tester(){
   const value = await new Promise((res,rej)=>setTimeout(()=>res(2), 1000));
   console.log(value);
}
tester(); // after  1 sec, logs 2


// inside try catch


async function tester(){
    try{
        const value = await new Promise((res,rej)=>setTimeout(()=>rej(new Error('Something went wrong')), 1000));
        console.log(value);
    } catch(err){
        console.log(`oh no ${err}`);
    }
    
 }
 tester()

 // other syntax, as async fun always returns a promise to we will attach then to it

 async function tester(){
    return await new Promise((res,rej)=>setTimeout(()=>rej(new Error('Something went wrong')), 1000));
    
 }
 tester().then(console.log).catch(err=>console.log(`Oh no ${err}`))
 
 /**
* Key Terms
Promise
An object used for asynchronous operations. These objects have a state of either pending, fulfilled or rejected.

A Promise is created with the Promise() constructor, which takes in a callback function, oftentimes called the executor. This callback function has two callback functions as parameters:

resolve(value): Fulfills the Promise and sets its value.
reject(error): Rejects the Promise and sets an error message.
The Promise object has three primary functions:

then(fulfilledFn rejectedFn): Calls fulfilledFn if the Promise is fulfilled and rejectedFn if it is rejected. Returns a new fulfilled Promise with the return value of the callback function.
catch(rejectedFn): Calls rejectedFn if the Promise is rejected. returns a new fulfilled Promise with the return value of the callback function.
finally(callback): Calls the callback function whenever the Promise is settled (fulfilled or rejected).
Since these functions all return a new Promise, they can be chained together, such as promise.then(doX).then(doY).catch(handleError).finally(doZ).

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
async function
A function declared using the async keyword, causing the function to implicitly return a Promise and allowing for usage of the await keyword.

Asynchronous functions are primarily an alternative syntax to chaining calls to Promise.then.

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
await
A keyword indicating that JavaScript should wait for a Promise to settle before continuing execution of the code. Traditionally this is only available in async functions, but it can also be used at the top level of modules.

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
  */