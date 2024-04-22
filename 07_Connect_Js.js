// wanna add js in head? 


//The DOMContentLoaded event fires when the HTML document has been completely parsed, 
//and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. 
//It doesn't wait for other things like images, subframes, and async scripts to finish loadin
window.addEventListener("DOMContentLoaded", main) // wait to load DOM tree
function main() {
    // js here
}


// 2nd option

//he load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, 
//scripts, iframes, and images. This is in contrast to DOMContentLoaded,
//which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.
window.addEventListener("load", main)
function main(){
    // js here 
}


// 3rd option

/**
 * defer
This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document 
has been parsed, but before firing DOMContentLoaded.
 */
<script src='index.js' defer></script>

/**
 * async: Fetch the script asynchronously without blocking the page.
 *  Whenever the script is ready, stop parsing the DOM and execute the script. 
 * This is usually only for scripts that do not need access to the DOM, 
 * because otherwise the behavior will be inconsistent based on how quickly the script downloaded.

 */

