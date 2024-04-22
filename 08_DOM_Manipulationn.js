// DOM Manipulation
//Using JavaScript to change the content, structure or styles of the page.


const ele = document.getElementById('id_name');

const sele = document.querySelector('li'); // selecting first list element

const allList = document.querySelectorAll('li'); // selecting all elements
// returns NodeList contaning all elemets of that tag

// we can iterate using forEach loop.

allList.forEach((list)=>{
    console.log(list);
});

// however, map doesnt work with it.

allList.map((list)=>{
    console.log(list);
})  // TypeError: allList.map() is not a function


// but we can convert allList to arr to use map

Array.from(allList).map((list)=>{
    console.log(list);
});


// by class


document.getElementsByClassName('class_name');
// get all elements with that className


document.getElementsByTagName('li');
// returns a HTML Collection which is not powerful as NodeList
//  ie we cant use forEach with this


const allList2 = document.querySelectorAll('li'); // selecting all elements



// Styling
allList2[0].style.color = 'red';
 
// change text contnet

allList2[0].textContent = 'Updated one!'


// set Attribute

allList2[0].value = 5; // in li,it will start from 5..
//Sets or retrieves the value of a list item.



// alternate
allList2[0].setAttribute('value', '5');
//Sets the value of element's first attribute whose qualified name is qualifiedName to value.

// can also set class
allList2[0].setAttribute('class', 'class_Name');
// will set class='blue' to the particular list item...
 

// classes

allList2[0].classList.remove('class_name');
allList2[0].classList.add('class_name');

// toggle class

allList2[0].classList.toggle('class_name'); // present ? remove: add



// DOM Nodes

const p = document.createElement('p');
p.textContent="para"


// adding to DOM

document.body.appendChild(p);
// will append p to the body...

// also can use append => that can also take simple text and multiple arg as  well

document.body.append(p, 'Appended text');

// we also have prepend, to add to beginning

document.body.prepend(p);

// we can also create text Node instead of just adding textContent
const p = document.createElement('p');
const text = document.createTextNode('Hello world');
p.append(text);


// using innerHTML

document.body.innerHTML += '<p>Inner HTML </p>'; // to much buggy

// can use it if we wanna remove all content of body like

document.body.innerHTML = '';

// but never use in for input as user may run script inside it

document.body.innerHTML = '<script>somethingBad()</script>' 



// add elements in a loop

// brute

for(let i=0; i<3; i++){
    const parent = document.querySelector('ol');
    const li = doccument.createElement('li');
    const text = document.createTextNode(`List item no ${i+1}`)
    li.append(text);
    parent.append(li); 
}
// it is expensive opertion though


// other option
const parent = document.querySelector('ol');
const fragment = document.createDocumentFragment();
for(let i=0; i<3; i++){
    const li = doccument.createElement('li');
    const text = document.createTextNode(`List item no ${i+1}`)
    li.append(text);
    fragment.append(li);
}
parent.append(fragment);


// remove elements from DOM

allList2[0].parentNode.removeChild(allList2[0]);
// or simply
allList2[0].remove();



// DOM sizess


console.log(window.innerWidth); // width of the window
console.log(window.innerHeight); // height of the window

// getStyles

window.getComputedStyle(allList2[0]).fontSize;  // it will return font sizr of li tag

const scrollable = document.getElementById('scrollable')

scrollable.clientHeight; // return visible height (includes padding)
scrollable.offsetHeight; // return height + border height


scrollable.scrollHeight; // total height of content including the content thats not in the view

scrollable.offsetTop; // distance from outer border to inner positioned parent // apne parent se kitna door hai


// scrollingg

scrollable.querySelectorAll('p')[5].scrollIntoView();


// other


scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavior: 'smooth'
})
 



/**
 * Key Terms
Dom Manipulation
Using JavaScript to change the content, structure or styles of the page. There are a lot of functions and properties related to dom manipulation, but these are some of the more common ones:

Getting Elements:

document.getElementById(id): Gets a single element based on its id attribute.
document.querySelector(cssSelector): Gets a single element based on a CSS selector. If multiple elements match the selector, returns the first one.
document.querySelectorAll(cssSelector): Gets all elements matching a CSS selector as a NodeList.
document.getElementsByTagName(tagName): Gets all elements with a specific HTML tag as an HTMLCollection.
document.getElementsByClassName(className): Gets all elements with a specific class as an HTMLCollection.
Setting Attributes:

element.style.property: Sets a CSS property using inline styles, although CSS classes should usually be preferred. The style object will only contain inline styles, not those set with CSS.
element.setAttribute('attribute', 'value'): Sets an HTML attribute to a specific value.
element.textContent: The text content of an element, including that of any children. Note: this is slightly different from element.innerText, which only gets text that is actually rendered and element.innerHTML which gets the entire HTML code as a string.
element.attribute: An alternative to the setAttribute function, attributes can be directly edited via their property name. For example, element.value would get the value attribute of the element.
element.classList: An object for updating CSS classes. Specifically, this contains 3 primary functions: add(className), remove(className) and toggle(className).
Adding And Removing Elements:

document.createElement(tagName): Creates a new HTML element.
document.createTextNode(text): Creates a text node as an alternative to setting textContent.
document.createDocumentFragment(): Creates a document fragment, which is useful for appending multiple elements at once after a loop.
element.appendChild(element): Appends an element to the end of the contents of another element.
element.append(node1, node2, ...): Appends 1 or more nodes (elements or text) to the end of the contents of another element.
element.prepend(node1, node2, ...): Prepends 1 or more nodes (elements or text) to the beginning of the contents of another element.
element.remove(): Removes the element from the DOM.
Sizes and Scrolling:

window.innerWidth: The width of the browser window.
window.innerHeight: The height of the browser window.
window.getComputedStyle(element): Gets styles as they are currently rendered on the page, converted to pixels.
element.clientHeight: The height of visible content and padding.
element.offsetHeight: The height of visible content, padding, borders and scrollbars.
element.scrollHeight: The height of all content and padding, including content scrolled out of view.
element.offsetTop: The distance from the outer top border of the element to the inner top border of the nearest positioned parent.
element.scrollIntoView(): Scrolls the container so the element is in view.
element.scrollTo(optionsObj): Scrolls the element to a specified top value in the options object. Additionally, behavior: 'smooth' will create a smooth transition.
 */