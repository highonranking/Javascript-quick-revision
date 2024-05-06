// If JavaScript is a single-threaded programming language, then how is it able run code asynchronously? 
// sorry sir... only one task at a time - THE JS ❤️
// event looooop


/*
 JS engine
 - program to execute js code
 - each browser has js engine
 - chrome has v8 engine


 - it has heap, and a call stack 
 - heap: memory allocation
 - call stack: function calls -- ofc its a stack 

 */


 /**
  * *** THE Event Loop **
  * 
  * 1. Dequeue 1 task
  * 2. Execute until the call stack is empty
  * 3. Render DOM changes
  * 4. Goto step 1.
  */



 /**
  * 
  * Key Terms
JavaScript Engine
A program used to execute JavaScript code.

These engines can differ a lot in implementation across browsers, but for the most part they contain two primary components:

Heap: Used for memory allocation to store objects. This can be thought of as a largely unstructured data store.
Call Stack: A stack data structure used to keep track of the currently executing function. Each function call pushes a stack frame onto the stack, which contains information about the function and its local variables. When a function ends, it is popped off the stack. When the stack is empty, there is no code currently running.
JavaScript Runtime Environment
The larger environment that JavaScript is executed in. In the browser, this environment provides access to a variety of web APIs. These APIs include the functions for timers, HTTP requests, DOM manipulation and much more.

Event Loop
The concurrency model within JavaScript. This is a constantly running loop within the browser, roughly following this algorithm:

Remove one task from the task queue.
Execute code until the call stack is empty.
Execute microtasks one at a time until the microtask queue is empty.
Render any changes to the DOM.
Go to step one.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
Task Queue
A queue data structure for storing asynchronous callbacks to be added to the call stack. This queue is also known as the "Message Queue", "Callback Queue" or "Macrotask Queue".

Web APIs move callbacks into the task queue, where they wait for the call stack to be empty before executing.

Microtask Queue
A queue data structure, similar to the task queue, used for storing microtasks.

Microtasks are primarily used for callback functions passed to promise.then(), promise.catch() and promise.finally() as well as their async/await equivalents. Additionally, microtasks can be manually queued using the queueMicrotask() function.

Microtasks can be considered to have a higher priority than standard tasks, since the entire microtask queue must be empty before the browser will move on to a task.

Chunking
A process for preventing slow functions from clogging the call stack and thus making the entire page unresponsive. The core idea of chunking is to take large tasks and split them up into smaller ones.

In practice, chunking is usually achieved by using setTimeout after some number of iterations, forcing future chunks to move to the end of the task queue.
  */





// chunking

function chunkedSlowFunction(){
    setTimeout(processChunk, 0,0);
}

function processChunk(start){
    const end = start + 100000;
    for(let i=0; i<end; i++){
        doCalculations(i);
    }

    if(end < 100000000){
        setTimeout(processChunk, 0, i+1)
    }
}


