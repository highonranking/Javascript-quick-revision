const slowBtn = documet.getElementById('slow');
const sayHelloBtn = document.getElementById('hello');


slowBtn.addEventListener('click', slowOperation);
slowBtn.addEventListener('click', sayHello);



function slowOperation(){
    for(let i=0; i<3000000000; i++){
        1+2;
    }  // slowing down operation

    console.log('slow op finished');
}



function sayHello(){
    console.log('hi');
}


/**
 * while clicking slow btn, it will take time to print console
 * so when we quickly clik on slow, and then hello btn
 * until slow will finish, nothing else will happen
 * bcz slow op was in call stack
 * 
 * 
 * 
 * 
 * 
 * so we can create a web worker to fix this....
 */


function slowOperation2(){

    const worker = new Worker('worker.js') // file to run a separate thread


}


// in worker.js

for(let i=0; i<3000000000; i++){
    1+2;
}  // slowing down operation

console.log('slow op finished');  
// now slow op will run in separate thread, it wont stop other program from running. 

// in worker, we dont have access to document so

//document.body or anything will return error of not defined




// sending msg to worker

function slowOperation2(){

    const worker = new Worker('worker.js') // file to run a separate thread
    worker.postMessage(10)



}


// in worker

self.addEventListener('message', event=>{
    console.log(event.data);
})

// or

onmessage = function(event){
    console.log(event.data);
}



// sending info from worker to js file

self.addEventListener('message', event=>{
    console.log(event.data);
    self.postMessage(event.datan*10);
})

// in js

worker.addEventListener('message', event=>{
    console.log(event.data);
})


// terminate / stop worker from running

worker.terminate();



// shared workers -- can be accessible by different tabs of same domain, or iFrames


const worker = new SharedWorker('worker.js');

worker.port.postMessage(10);

worker.port.onmessage = event => {
    console.log(event);
}

// in worker

addEventListener('connect', event => {

    const port = event.port[0];

    port.onmessage = event => {
        console.log(event.data);
        port.postMessage(event.data*10);

    }
})




/**
 * Web Worker
A browser API for running scripts in a separate thread from the main execution thread.

A worker object is created with the Worker(filePath) constructor function. The argument to this function is a path to another JavaScript file that will run in a separate thread.

Workers can send messages back and forth with the main thread via the postMessage(message) method and the onmessage event. For example:

// main JavaScript file
const worker = new Worker('worker.js');
worker.postMessage('hello');
worker.addEventListener('message', (event) => {
  console.log(event.data); // 'world'
});

// worker.js
postMessage('world');
addEventListener('message', (event) => {
  console.log(event.data); // 'hello'
});
In general, most workers are dedicated workers, meaning they can only communicate with the script that created them. However, a SharedWorker can also be created to share a worker with multiple tabs or iframes. That said, SharedWorkers still do not have widespread support across browsers.

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
 */