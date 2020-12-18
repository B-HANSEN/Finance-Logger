import { HasFormatter } from '../interfaces/HasFormatter.js';


// classes
// module system disadvantages: (1) only modern browsers support it, (2) several *.js files will be created resulting in several network requests (could overcome with webpack)

export class Invoice implements HasFormatter { // default behaviour of classes: all properties are public
    // readonly client: string; // read also outside the class but not change value
    // private details: string; // read and write only inside class
    // public amount: number; // default: read and write in and outside class

    constructor( // use access modifiers here, TS automatically assigns value to properties of this class
        readonly client: string,
        private details: string,
        public amount: number,
    ) { // whenever create a new Invoice object based on this class, the constructor will assign values to the properties

    }

    format() { // return a string where we format the different details
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}
