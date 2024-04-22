const button = document.querySelector('button');

button.addEventListener('click', onClick);

document.body.addEventListener('click', onClick, true)
function onClick(event){
    event.stopPropogation();
    // other option
    event.preventDefault();   // prevent default behaviour of the browser
    console.log(event);
    console.log(event.type); // click
    console.log(event.target); // targeted element

    console.log('Btn Clicked');
}

//other fields
const abortControlller = new AbortController();
document.body.addEventListener('click', onClick, {
    capture: true,
    once: true,
    passive:true, // we wont call prevent default
    signal: abortControlller.signal,
})

abortControlller.abort() // to remove the event listeners


// remove event listeners manually

button.removeEventListener('click', onClick);



// popular eventss

button.addEventListener('dblclick', onClick); // clicking two times
button.addEventListener('mousedown', onClick);  // mouse move down and released
button.addEventListener('mouseup', onClick); // mouse move up and released

button.addEventListener('keydown', onClick) ; // when press key is down
button.addEventListener('keyup', onClick); // when key is released





// scrollable


const scrollable = document.getElementById('scrollable');
scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
});

scrollable.addEventListener('mouseenter', (event)=>{ // mousemove can also be used
    console.log(event.PageX, event.pageY);
})


// drag and drop

{
const scrollable = document.getElementById('scrollable');
const button = document.querySelector('button');

button.addEventListener('dragstart', (event)=>{
    console.log(event);
})

scrollable.addEventListener('drop', event =>{
    scrollable.prepend(button);
});

button.addEventListener('dragover', event =>{
    event.preventDefault();
})
}


// event delegation

scrollable.addEventListener('click', function(event){
    if(event.target!==this){
        event.target.textContent='Clicked';
    }
});
// idea is to have the event listeners beyond the parent
 



/**
 * Key Terms
Event-Driven Programming
A programming paradigm where code runs as a response to events, usually initiated by the user.

To create an event listener, use element.addEventListener(eventName, callback, useCapture). If the third argument is true, the callback will fire during the capturing phase rather than the default bubbling phase.

Additionally, addEventListener can be called with an options object as the third parameter instead of the useCapture boolean. This object can contain the following possible values:

capture: The same as the boolean argument option; true for capturing, false for bubbling.
once: If true, automatically removes the event listener after the event fires once.
passive: If true, indicates to the browser that event.preventDefault() will not be called. This is useful for the browser to optimize performance, particularly with mobile scrolling events such as touchstart and touchmove to indicate to the browser that scrolling will not be cancelled.
signal: An AbortSignal, usually coming from an AbortController. If the signal's abort() method is called, the event listener will be removed.
To remove an event listener, call element.removeEventListener(eventName, callback, useCapture) or element.removeEventListener(eventName, callback, optionsObj) with the exact same parameters as were used to create the event listener.

Event Propagation
The process by which an event travels through the DOM to call event listeners on nested elements. Event propagation consists of 3 phases:

Capturing: The event travels down from the root of the document to the event target.
Target: The event fires on the event target.
Bubbling: The event travels up from the event target to the root of the document.
At any point in the propagation process, an event listener can call event.stopPropagation(), which will stop the propagation process.

Event Delegation
The process of using a single event listener on a parent element to manually delegate events to children, rather than using event listeners on each child.

Event delegation takes advantage of event propagation. For example, after clicking on a button, that event will bubble up to the parent container.

In the event a container has many children that all have similar event listeners, event delegation can make substantial performance improvements by lowering the total number of active event listeners. The event.target property can then be used to determine which child was the source of the event. 
 */