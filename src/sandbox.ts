let character = 'luigi';
let age = 30;
let isBlackBelt = false;

// TS infers the type:
// character = 20;
character = 'mike';

// age = 'yoshi'
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

// console.log(circ('hello')) in case type not specified ==> NaN
console.log(circ(7.5))

/// ARRAYS ///
let names = ['luigi', 'mario', 'yoshi'];
// names = 'string' ==> not assignable as names must be an array
names.push('toad')
// names.push(3) // ==> not assignable; initialised with strings only

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mario'); ==> not assignable

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; // all acceptable as array was initialised with mixed types


/// OBJECTS ///
let ninja2 = {
  name: 'mario',
  belt: 'black',
  age: 30,
}

ninja2.age = 40;
ninja2.name = 'ryu';
// ninja.age = '30' ==> must be a number
// ninja.skills = ['fighting', 'sneaking'] ==> type does not exist in ninja object 

// ninja = []; => can't change the type; it must be an object
ninja2 = { // must have same structure and types, values can be different
  name: 'yoshi',
  belt: 'orange',
  age: 40, // cannot remove one key as it must match original structure
  // skills: [],  would not comply with original structure
}


// explicit types
let character2: string;
let age2: number;
let isLoggedIn2: boolean;

// age = 'luigi'
age2 = 30;
isLoggedIn2: true;


// arrays
let ninjas: string[] = []; // best practice to initialise as an empty array to enable push()-method
ninjas = ['yoshi', 'mario'];


// union types
let mixed2: (string|number)[] = [];
mixed2.push('hello');
mixed2.push(20);
// mixed.push(false); // cannot add a boolean as it has not been defined

let uid: string|number;
uid = '123';
uid = 123;
// uid = false; // cannot redefine as boolean as bool has not been defined


// objects
let ninjaOne : object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    belt: string,
};

ninjaTwo = {
    name: 'mario',
    age: 20,
    belt: 'black',
    // skills: [], // not allowed
}


let age3: any = 25; // initialised as number

age3 = true; // possible to redefine with another type
age3 = 'hello'
age3 = { name: 'luigi'}


let mixed3: any[] = [];

mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);


let ninja3: { name: any, age: any }

ninja3 = { name: 'yoshi', age: 25 }
ninja3 = { name: 25, age: 'yoshi' }


// to be used when type to be used is unknown
// keep for exceptional usage


/// FUNCTION TYPES: ///
let greet: Function;

greet = () => {
  console.log('hello world');
}
// greet = 'hello' // not possible as declared as function


// const add = (a: number, b: number, c?: number | string): void => { // when lacking return value
const add = (a: number, b: number, c?: number | string) => { // the ? makes the third argument optional (required parameters first, optional parameters at the end)
// const add = (a: number, b: number, c: number | string = 10) => { // do not use optional '?' and default parameter together
  console.log(a + b);
  console.log(c) // undefined
  // console.log(c) // if using default parameter c = '10'

}

add(5, 10);

const minus = (a: number, b: number) => {
// const minus = (a: number, b: number): number => { would be redundant as TypeScript automatically infers the type
  return a + b
}

let result = minus(10, 7) // automatically inferred the type to results
// result = 'something else' // cannot overwrite the inferred type



/// TYPE ALIASES: ///
// to reduce code duplication
type StringOrNum = string | number;
type objWithName = { name: String, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const greetAgain2 = (user: objWithName) => {
  console.log(`${user.name} says hello again`);
}

/// FUNCTION SIGNATURES: ///

// example 1: 
let greet3: (a: string, b: string) => void; // a and b can be later defined as 'name' and 'greeting'; it just indicates that two parameters are passed into the function

greet3 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2:
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => { // must match the signature from above
  if (action === 'add') {
    return numOne + numTwo; 
  } else {
    return numOne - numTwo;
  }
}

// example 3:
let newLogDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number}

newLogDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
