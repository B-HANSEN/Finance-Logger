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
// names.push(3) ==> not assignable; initialised with strings only


let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mario'); ==> not assignable

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; // all acceptable as array was initialised with mixed types


/// OBJECTS ///
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
}

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30' ==> must be a number
// ninja.skills = ['fighting', 'sneaking'] ==> type does not exist in ninja object 

// ninja = []; => can't change the type; it must be an object
ninja = { // must have same structure and types, values can be different
  name: 'yoshi',
  belt: 'orange',
  age: 40, // cannot remove one key as it must match original structure
  // skills: [],  would not comply with original structure
}

