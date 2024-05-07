// Stack

const stack = [];
stack.push(1);
stack.push(2);

stack.pop() // 2



// Queue

const queue = [];

queue.push(1);
queue.push(2);

// pop 

queue.shift(); // pop from front, like queue FIFO => 1


// Map / Dict

  const map = new Map();

  map.set('test', 212);
  map.set(10, 'ten');

  // get values

  console.log(map.get(10));

console.log(map.size);

console.log(map.has(10)); // pass key => return Booleans

map.delete(10);

// clear everything

map.clear()


for([key, value] of map){
    console.log(key, value);
}


map.forEach((value, key)=>{
    console.log(key, value);
})


const inte = map.entries();
const keys = map.keys();
const values = map.values();


console.log(inte.next().value); // logd first one




const map2 = new Map([['test', 221], [10, 'ten']])



// set => set of unuque values

const set = new Set();

set.add(123);
set.add(456);

console.log(set.has(123));

set.add({})
set.has({}); // false, as these are different object with value same


set.delete(123);

set.clear()


for(value of set){
    console.log(value);
}

set.forEach((val)=>{
    console.log(val);
})


const inte2 = set.values();
console.log(inte2.next().value);



// set helpful in removing duplicates

const arr = [1,2,2,3,4,3,4];

console.log(Array.from(new Set(arr)))


// weakset and weakmap

/**
 * Keys, values can only be objects
 * 
 * they doesnt prevent garbage collection
 */


const weakSet = new WeakSet();
weakSet.add(123);  // err Uncaught TypeError: Invalid value used in weak set

weakSet({});


// traditonally in a set or a map if we have some obj, that obj cant
// be garbage collected bz theres still a referece to it. the set or map
// is still using that obj. so it cant be garbage collected

// but sometimes ww want the garbage collector to work as usual
// and it should just be removed from the set or map.. when it gets garbage collected


 // so if a value gets garbage collected it is removed from the weakset



(function(){
    const obj = {};
    weakSet.add(obj)

})();

// obj can we garbage collected as its not used out the fn scope, so it would
// removed from the weakset
// we  cant iterate/check size of weakset, only way to  find smth is only by has

console.log(weakSet.has({}));



// linked list


class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    addStart(value){
        const node = new Node(value);
        const tempHead = this.head;
        this.head = node;
        node.next=tempHead;
    }


    addEnd(value){
        const node = new Node(value);
        let curr = this.head;

        if(curr==null){
            this.head=node;
            return;
        }

        while(curr.next!=null){
            curr=curr.next;

        }

        curr.next=node;
    }
}


const list = new LinkedList();

list.addStart(1);
list.addStart(2);
list.addEnd(3);

console.log(list.head.value);
console.log(list.head.next.next.value);




/**
 * Key Terms
Map
A built-in JavaScript class for holding key-value pairs. While similar to standard objects, maps have a few key differences:

Map keys can be of any type, while object keys must be strings or symbols.
Maps maintain insertion order for iteration, while objects do not.
Maps cannot easily be converted to JSON, while objects can.
Objects oftentimes utilize the prototype chain for inheritance, while Maps cannot do this.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Set
A built-in JavaScript class for holding unique values of any type. Values are considered unique if they are different primitives or references to different objects (this means that two different objects with the same contents are considered unique from each other). Values in Sets are kept in insertion order for when the Set is iterated over.

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
WeakMap
A built-in JavaScript class for holding key-value pairs similar to the Map class. There are two primary differences between Map and WeakMap:

WeakMap can only have objects as keys, primitive values cannot be added as keys.
WeakMaps hold "weak" references to objects, meaning that they do not prevent the objects from being garbage collected. If no other references to an object exist, it can be garbage collected and automatically removed from the WeakMap. As a result, WeakMaps cannot be iterated over.
Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
WeakSet
A built-in JavaScript class for holding unique values similar to the Set class. However, a WeakSet acts just like a WeakMap, meaning that the values must all be objects, and references to those objects are "weakly" held.

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 */