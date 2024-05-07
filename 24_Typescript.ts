let test = 123;
//    test = '123'; //Type 'string' is not assignable to type 'number'.ts(2322)


let myNum: number = 123;

let myString: string = '123';


let anyThing: any = '333';

let numOrString: number | string = 123
numOrString = 'abc';


type numString = number | string; 
let variableNumString: numString = '2232';
variableNumString = 343;


// generic type

type State = 'on' | 'off';
let myState: State = 'on'
myState = 'off'; 




// enum as types

enum StateObj {
  Pending = 'pending',
  Expired = 'expired',
  Active = 'active',
  Closed = 'closed'

}

let myVarState: StateObj = StateObj.Pending;
myVarState = StateObj.Active;
console.log(myVarState);


// function



function add(x: number,y: number): void{
     console.log(x+y);
}


console.log(add(1,2));


// obj

interface ObjType{
    name: String;
    age: Number;
    sex: AgeType
}

enum AgeType{
    Male= 'm',
    Female= 'f',
}

const abhinav: ObjType = {
    name:"Abhinav",
    age: 22,
    sex: AgeType.Male

}


const ekta: ObjType = {
    name: "Ekta",
    age: 22,
    sex: AgeType.Female
}
interface ObjType1{
    name: string;
    age: number;
    sex?: string;
}

class Developer implements ObjType1 {
    name: string;
    age: number;

    constructor(name: string, age: number ){
        this.name = name;
        this.age = age;
    }


}


const Abhinav = new Developer('Abhinav', 22 )


// array

const myarr: Array<number> = [1,2,3,4];

interface GetterSetter<Key, Value>{
    set: (key: Key, value: Value) => void;
    get: (key:Key) => Value
}

class StringNumGetterSetter implements GetterSetter<string, number>{
    map: Map<string, number> = new Map();

    set(key: string, value: number): void{
        this.map.set(key, value);
    } 

    get(key:string): number{
        return this.map.get(key); 
    }
}



