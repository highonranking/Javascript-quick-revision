/**
 * A function along with a saved reference to the lexical environment it was defined in.
 * Simply put, this means functions have access to all of the variables in scope at the time of definition, even if the parent function has returned
 */
{
const globalNum = 5;

function logNum(){
    const localNum = 1;
    console.log(globalNum+localNum);
}


logNum();  // 6
}


{
let globalNum = 5;

function logNum(){
    const localNum = 1;
    console.log(globalNum+localNum);
}

globalNum = 10;

logNum();  // 11

}


{
    function example(){
        const num = 5;

        return function(){
            console.log(num);
        }

    }
    const innerFun = example();

    innerFun(); // 5
}


// application of closures


function makeFunction(){
    let privateNum = 0;
    function privateIncrement(){
        privateNum++;
    }
    return{
        logNum:()=>console.log(privateNum),
        increment:()=>{
            privateIncrement();
            console.log('Increment');
        }

    }
    

}


const {logNum, increment} = makeFunction();
const {logNum:logNum2, increment:increment2} = makeFunction();
logNum();
increment();
logNum()
logNum2();
increment2();
logNum();

// similar implementation
function x(){
    let count = 0;
    this.increment  = ()=>{

        count++;
        console.log(count);
    }
    this.decrement = () => {
        count--;
        console.log(count);

    }
}

let c = new x();
c.increment();
c.decrement();



/** Other example */

for(var i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i);
    }, 1000)
    
} // 5 5 5 5 5 =>  with var 


for(let i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i);
    }, 1000)
    
} // 0 1 2 3 4



// Creating closures in loops: A common mistake


/**
 * <p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
 */

// we do common err
function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      // Culprit is the use of `var` on this line
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    }
  }
  
  setupHelp();
/*
The helpText array defines three helpful hints, each associated with the ID of an input field in the document. The loop cycles through these definitions, hooking up an onfocus event to each one that shows the associated help method.

If you try this code out, you'll see that it doesn't work as expected. No matter what field you focus on, the message about your age will be displayed.

The reason for this is that the functions assigned to onfocus form closures; they consist of the function definition and the captured environment from the setupHelp function's scope. Three closures have been created by the loop, but each one shares the same single lexical environment, which has a variable with changing values (item). This is because the variable item is declared with var and thus has function scope due to hoisting. The value of item.help is determined when the onfocus callbacks are executed. Because the loop has already run its course by that time, the item variable object (shared by all three closures) has been left pointing to the last entry in the helpText list.
*/

//other way to write the above using anonymous closures is:


function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      (function () {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
          showHelp(item.help);
        };
      })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
    }
  }
  
  setupHelp();


  //If you don't want to use more closures, you can use the let or const keyword:

  function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    const helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (let i = 0; i < helpText.length; i++) {
      const item = helpText[i];
      document.getElementById(item.id).onfocus = () => {
        showHelp(item.help);
      };
    }
  }
  
  setupHelp();
  
  

/**
* Key Terms
Closure
A function along with a saved reference to the lexical environment it was defined in. 
Simply put, this means functions have access to all of the variables in scope at the time of definition, even if the parent function has returned.

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Lexical Environment
An internal data structure used for keeping track of identifiers (variable and function names) and their values. 
A lexical environment stores all of the locally available identifiers as well as a reference to the parent environment.

Lexical Scoping
The scoping system in JavaScript that ensures all code blocks have access to all identifiers in their parent environment. 
When an identifier is not defined locally, JavaScript will look to the parent environment for it. 
If it is still not found there, it will look in grandparent's environment and so on before looking in the global environment.
 */