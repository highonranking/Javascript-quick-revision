{/* <script src="Person.js" defer></script>
<script src="helpers.js" defer></script>
<script src="modules.js" defer></script> */}


// Person.js

class Person{
    constructor(name){
        this.name=name;
    }

    hello(){
        console.log('hi'+this.name);
    }
}

// helper.js

function highonranking(){
    console.log("Hey HOR");
}

function creatingtrails(){
    console.log("hi CT");
}


// module.js

function myModule(){  // to make it function scope
    highonranking()

    const abhinav = new Person('Abhinav');
    abhinav.hello();
}

myModule()//  but now its global

(function(){  
    highonranking()

    const abhinav = new Person('Abhinav');
    abhinav.hello();
})()  // immediatedly envoked fn expression


// make script as modules

{/* <script src="" type="module"></script> */}


// now can import and export

import * as hepler from './helper';
import {} from './//'

export function fn(){

}

// same import export logic like in normal react/ or js


// dynamically import modules

const shouldCallHOR = true;
if(shouldCallHOR){
    const highonranking = await import("./helpers.js")   // with modules, we can use await keyword at top level
    highonranking();
}

// module automatically envokes stricct mode
 // so 
 //console.log(this); will be undefined


 // if browsers doesnt support module add nomodule fle in script so browser will ignore all files and will just read nomodule file

 // <script src='' nomodule></script>




 /**
  * Key Terms
Module
JavaScript code that runs in isolation, without polluting the global namespace.

Traditionally modules were implemented using immediately invoked function expressions, but in modern JavaScript there is a type="module" attribute that can be added to script tags. This attribute will have a few key effects:

Identifiers at the top level will be scoped to the file rather than globally.
The file will be in strict mode by default.
The await keyword can be used at the top level.
The script will be deferred by default.
Modules can then access each other by using the import and export keywords. For example:

// File 1:
export const num = 10;

// File 2:
import { num } from 'file1.js';
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
Immediately Invoked Function Expression
Also called an IIFE, a function that is immediately called after its definition. This can be useful for a variety of purposes, most notably to create a function scope to isolate code with.

There are a few ways to define an IIFE, but the most common is using an anonymous or arrow function. This function is then wrapped in parentheses, which causes it to be treated as an expression. Finally, () is added to call the function. For example:

(function() {
  console.log('Wahoo!');
})();
Learn more: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  */





