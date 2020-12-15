"use strict";
var character = 'luigi';
var age = 30;
var isBlackBelt = false;
// TS infers the type:
// character = 20;
character = 'mike';
// age = 'yoshi'
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello')) in case type not specified ==> NaN
console.log(circ(7.5));
/// ARRAYS ///
var names = ['luigi', 'mario', 'yoshi'];
// names = 'string' ==> not assignable as names must be an array
names.push('toad');
// names.push(3) // ==> not assignable; initialised with strings only
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mario'); ==> not assignable
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; // all acceptable as array was initialised with mixed types
/// OBJECTS ///
var ninja2 = {
    name: 'mario',
    belt: 'black',
    age: 30,
};
ninja2.age = 40;
ninja2.name = 'ryu';
// ninja.age = '30' ==> must be a number
// ninja.skills = ['fighting', 'sneaking'] ==> type does not exist in ninja object 
// ninja = []; => can't change the type; it must be an object
ninja2 = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
};
// explicit types
var character2;
var age2;
var isLoggedIn2;
// age = 'luigi'
age2 = 30;
isLoggedIn2: true;
// arrays
var ninjas = []; // best practice to initialise as an empty array to enable push()-method
ninjas = ['yoshi', 'mario'];
// union types
var mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
// mixed.push(false); // cannot add a boolean as it has not been defined
var uid;
uid = '123';
uid = 123;
// uid = false; // cannot redefine as boolean as bool has not been defined
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    belt: 'black',
};
var age3 = 25; // initialised as number
age3 = true; // possible to redefine with another type
age3 = 'hello';
age3 = { name: 'luigi' };
var mixed3 = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
var ninja3;
ninja3 = { name: 'yoshi', age: 25 };
ninja3 = { name: 25, age: 'yoshi' };
// to be used when type to be used is unknown
// keep for exceptional usage
/// FUNCTION TYPES: ///
var greet;
greet = function () {
    console.log('hello world');
};
// greet = 'hello' // not possible as declared as function
// const add = (a: number, b: number, c?: number | string): void => { // when lacking return value
var add = function (a, b, c) {
    // const add = (a: number, b: number, c: number | string = 10) => { // do not use optional '?' and default parameter together
    console.log(a + b);
    console.log(c); // undefined
    // console.log(c) // if using default parameter c = '10'
};
add(5, 10);
var minus = function (a, b) {
    // const minus = (a: number, b: number): number => { would be redundant as TypeScript automatically infers the type
    return a + b;
};
var result = minus(10, 7); // automatically inferred the type to results
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain2 = function (user) {
    console.log(user.name + " says hello again");
};
/// FUNCTION SIGNATURES: ///
// example 1: 
var greet3; // a and b can be later defined as 'name' and 'greeting'; it just indicates that two parameters are passed into the function
greet3 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2:
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3:
var newLogDetails;
newLogDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
