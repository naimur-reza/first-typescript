
/**
 * Built in types in Typescript:
 * 1. Any (Allow anything)
 * 2. Unknown (Ensure someone using this type declares what the type is)
 * 3. Enum ()
 * 4. Never (It's not possible that this type could happen)
 * 5. Tuple
 * 6. Void (a function which returns undefined or has no return value)
 */

// Array defining method
let age = [1, 1, 1, 'awkward'];
// empty array
let number: number[] = [];
number[0] = 1;
// number[1] = '2'; => this is can not assignable;

// tuple defining method
let users: [number, string] = [20, "Anik"]; 
// or
let person: [number, string, boolean, number] = [20, 'Reza', true, 4];


// Enum
// if we use constant, js file will give the more optimized code.
const enum Size { Small = 1, Medium, large };
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function Calculation(age: number) {
    if(age > 20)
    return age;
}
 

// interface creation
interface User {
    name: string;
    id: number
    
}

const user: User = {
    name: "Anik",
    id:9
}

type myBool = true | false;
type WindowStates = "Locked" | "Unlocked";


// object creation
let employee: {
    readonly id: number,
    name: string,
    // we can use return method by using retire
    retire: (date: Date) => void
} = {
    id: 3,
    name: 'Jacky',
    retire: (date: Date) => 
        console.log(date)
}


// literal type
type Quantity = 20 | 10;
let quantity: Quantity = 10;


// nullable types with union operator
function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toLowerCase());
    else
        console.log('Not a valid string')

}

greet(undefined);


// optional chaining
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined{
    return id === 0? null : { birthday : new Date()}
}

let customer = getCustomer(0);
// we can use optional operator when we get null or undefined.
console.log(customer?.birthday)


// optional element access operator
// customers?.[0]