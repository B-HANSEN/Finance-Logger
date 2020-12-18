import { Invoice } from './classes/Invoice.js';  // import the *.js file as the browser will use this
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


// let docOne: HasFormatter; // this variable must implement this interface
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// // every object inside here has a format function that returns a string
// let docs: HasFormatter[] = []; // restricting what can go into docs, can come from different classes but need to have this HasFormatter interface
// docs.push(docOne);
// docs.push(docTwo);

// console.log('docs', docs)


// interfaces: enforce certain types of structure within classes and objects
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'bjoern',
    age: 38,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

console.log(me)
let someone: IsPerson; // enforces the rules on a variable

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

// greetPerson({ name: 'mike' }) // does not work because it does not match the structure
greetPerson(me) // matching structure

// const invOne = new Invoice('mario', 'work on the mario website', 250); // create new instance of this object based on this class
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = []; // only objects using above class can be added to the array
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })


// const anchor = document.querySelector('a')!; // add '!' to indicate this will not be null 
// if(anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);


/// TYPE CASTING ///
// const form = document.querySelector('form')!; // not certain we address the right element
const form = document.querySelector('.new-item-form') as HTMLFormElement; // typecasting that class .new-item-form
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement; // #type to grab ID:  <select id="type">
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] // if that tuple would not be defined, ...values would return in an error as types are not defined
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
})


// tuples
let arr = ['ryu', 25, true]; // in arrays, positions can be overwritten with any type
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true]; // in tuples, positions must comply with how the tuple is initiated
tup[0] = 'ken'; // must be a string
tup[1] = 30; // must be a number

let student: [string, number];
// student = [2345234, 'ken'] // does not comply to the original declaration
student = ['ken', 32535] // compies to the original declaration
