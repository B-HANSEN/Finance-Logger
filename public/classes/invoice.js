// classes
// module system disadvantages: (1) only modern browsers support it, (2) several *.js files will be created resulting in several network requests (could overcome with webpack)
export class Invoice {
    // readonly client: string; // read also outside the class but not change value
    // private details: string; // read and write only inside class
    // public amount: number; // default: read and write in and outside class
    constructor(// use access modifiers here, TS automatically assigns value to properties of this class
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
