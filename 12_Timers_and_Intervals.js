{/* <p>Ticks: <span id="counts">0</span></p>

<button id="stop">Stop</button>
<button id="start">Start</button> */}



const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');


// adding event listeners

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

let timerID;
let timeoutID = setTimeout(()=>{
    console.log('timeout'); // it wont run as clearTimeout is there just after this 
},0);
clearTimeout(timeoutID); 
function startTime(){
    // setting up intervals
   timerID =  setInterval(()=>{
        count.textContent++;
    }, 500)

}

function stopTime(){
    clearInterval(timerID)

}

// animation frames
// runs once per frame in the browser => typically 60 times / second => but depemds
 
let animationFrameID;
function startTime(timeStamp){
    console.log(timeStamp);
    count.textContent++;
    animationFrameID=requestAnimationFrame(startTime); 
}

 function stopTime(){
    cancelAnimationFrame( animationFrameID)
 }

 // performance.now()

 setTimeout(()=>{
    console.log(performance.now());
 }, 1000); // 1000+timestamp to run the code


 // Date.now()

 setTimeout(()=>{
    console.log(Date.now());
 }, 1000);  // millisec passed since jan 1 1970



 // creating date objs

 const date = new Date(2024, 3, 10, 9, 25, 10, 110) // year, month(0 based), day, hour, min, sec, millisec
 console.log(date);
 console.log(date.getHours());
 console.log(date.getMonth());

 // setting date

 date.setMonth(4)




 /***
  * Key Terms
setInterval
A JavaScript function for calling a function repeatedly over an interval.

For example, setInterval(myFunction, 1000); would call myFunction every second (however this could take longer if other code needs to finish running).

This function returns an ID, and the interval can be cancelled by calling clearInterval(intervalID);.

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
setTimeout
A JavaScript function for delaying execution of a callback function.

For example, setTimeout(myFunction, 1000); would call myFunction after 1 second (however this could take longer if other code needs to finish running).

This function returns an ID, and the timeout can be cancelled by calling clearTimeout(timeoutID);.

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
requestAnimationFrame
A JavaScript function for calling a callback function before the next browser repaint. These are oftentimes used for animations to update the animation every frame.

For example, requestAnimationFrame(myFunction); would call myFunction before the next repaint.

This function returns an ID, and the callback can be cancelled by calling cancelAnimationFrame(animationFrameID);.

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  */