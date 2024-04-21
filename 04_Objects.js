const myKey = 'key';

const developer = {
    name: "Abhinav",
    rating: 4.8,
    skills: ['React', 'Node', 'Javascript'],
    isAwesome: true,
    'multi word key':0,
    [myKey]:1234,
};

console.log(developer[myKey]);
console.log(developer['name']);
console.log(developer.name);

developer.name = 'OG Abhinav';

console.log(developer.name); //OG Abhinav



developer.crush = 'ECMA';
console.log(developer); // now it will have crush key value

delete developer.crush;
console.log(developer); // crush gone!!

console.log({} == {});  // false => 2 obj are not equal to eachj othe on the basis of their values
const obj = {};
console.log(obj === obj); // true


const name = "Abhinav";
const obj2 = {
    name
}
console.log(obj2);



const obj3 = new Object();
obj3.name = "highonranking";
console.log(obj3);


// function constructor

function Developer(name, rating, skills){
    this.name = name;
    this.rating = rating;
    this.skills = skills;
}


const developer1 = new Developer('Abhinav Dixit', 5, ['react', 'node']);
console.log(developer1.skills);


// symbol

const id = Symbol('id')  //Returns a new unique Symbol value.
const id2 = Symbol('id2');

const obj4 = {
    [id]: 1234,
    [id2]:3456
}

console.log(obj[id]);

//Symbol.for ===> Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
const id3 = Symbol.for('id');
const id4 = Symbol.for('id');

console.log(id3===id4);







// check if key is present in an obj

const developer = {
    name: "Abhinav",
    rating: 4.8,
    skills: ['React', 'Node', 'Javascript'],
    isAwesome: true,
    'multi word key':0,
};


console.log('name' in developer);  // true   => this also checks for props of the obj from where it was inherited
console.log(developer.hasOwnProperty('name')); // true   // this doesnt check for that


// eg..

console.log('toString' in developer); // this will return true as toString key was inherited 
// but below will return false as the key is not presented in developer obj

console.log(developer.hasOwnProperty('toString')); // false


// methods on objs

const developer = {
    name: "Abhinav",
    rating: 4.8,
    skills: ['React', 'Node', 'Javascript'],
    sayHello: () => {
        console.log('Hello Devs');
    },
    sayHello2(){
        console.log('Hello Devs');
    },

    // getter

    get getRating(){
        return this.rating;
    },

    // setter

    set setRating(val){
        this.rating = val;
    }
};

developer.sayHello2();
console.log(developer.getRating);
console.log(developer.setRating=5);



// inheritence 

const developer = {
    name: "Abhinav",
    rating: 4.8,
    skills: ['React', 'Node', 'Javascript'],
};

const developer2 = {
    __proto__:developer
}


console.log(developer2.name);  // Abhinav




// iterations
const developer3 = {
    foo:'bar',     // own property
    [Symbol('id')]: 0,    // symbols
    __proto__:developer     // inherited obj prop
}


// 1st option

console.log(Object.keys(developer3)); //['foo'] => only own prop keys
console.log(Object.values(developer3)); //['bar'] => only own prop values
console.log(Object.entries(developer3)); // key val of own props

// 2nd

for(const key in developer3){
    console.log(key); // own + inherited (no symbols)
}


// copying objs

const myObj = {
    original:123
}
const newObj={}
Object.assign(myObj, developer) // developer object assigned to myObj ==> logs enumerable own properties
//{original: 123, name: 'Abhinav', rating: 4.8, skills: Array(3)}


// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
Object.freeze(developer)


// to check if object is frozen
console.log(Object.isFrozen(developer)); // T/Fs


Object.seal(developer); // can change key but can not add new key
// similarly we have
Object.isSealed(developer);




const developer = {
    name: "Abhinav",
    rating: 4.8,
    skills: ['React', 'Node', 'Javascript'],
    [Symbol.toPrimitive](hint){
        if(hint==='number') return 5;
        else if(hint==='string') return 'hello';
        return 1;
    }
};

developer.toString = function()  {
    return 'Hey';
}

developer.valueOf = function(){
    return 2;
}

console.log(developer-1); // 2-1

console.log(Number(developer));  //5
console.log(String(developer)); // hello
console.log(Number(developer+1));   // + may work as both add(number) and concat(string), so, it retured default value and didnt went ender if else




