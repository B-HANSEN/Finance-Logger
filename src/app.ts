// interfaces: enforce certain types of structure within classes and objects
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'bjoern',
    age: 39,
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


import { Invoice } from './classes/invoice.js'; // import the *.js file as the browser will use this

const invOne = new Invoice('mario', 'work on the mario website', 250); // create new instance of this object based on this class
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = []; // only objects using above class can be added to the array
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})


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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value,
    )
})
