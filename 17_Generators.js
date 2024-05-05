function* getNumbers(){
    yield 1;
    yield 2;
    yield 3;

    return 4;
}


const generator = getNumbers();
console.log('q :', generator.next()); /// q : { value: 1, done: false }
console.log('q :', generator.next()); //q : { value: 2, done: false }
console.log('q :', generator.next()); //q : { value: 3, done: false }
console.log('q :', generator.next());// q : { value: 4, done: true }


function* generateNumbers2(count){
    for (let index = 0; index < count; index++) {
       yield index; 
    }
}


function* getNumbers3(count){
    const value = yield 0;
    yield value+3;
}

const generator3 = getNumbers3(3);
 
console.log(generator3.next()); //{ value: 0, done: false }
console.log(generator3.next(5));  //{ value: 8, done: false }

console.log(generator3.return(5));

// this makes done as true and after all values be undefined


console.log(generator3.throw(new Error('Error occoured')));


function* fn(){
    yield* fn1();
    yield 2
    yield* fn2()
}

/**
 * Generator
An iterable object created by using a generator function.

A generator function is defined using function*. Then each yield results in another item being added to the iterable generator object.

The generator object has three methods:

next(value): Returns an object with the next value in the iterator and a done boolean. Optionally passes a value back into the generator function.
return(value): Adds a passed in argument to the iterable results and ends iteration.
throw(error): Throws an error, stopping code execution unless the error is caught.
For example:

function* genNumbers() {
  const x = yield 1;
  yield x + 2;
  yield 3;
}

const generatorObj = genNumbers();
console.log(generatorObj.next().value); // 1
console.log(generatorObj.next(3).value); // 5
console.log(generatorObj.return(7).value); // 7
console.log(generatorObj.next().value); // undefined

 */