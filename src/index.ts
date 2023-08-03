
/**
 * Built in types in Typescript:
 * 1. Any
 * 2. Unknown
 * 3. Enum
 * 4. Never
 * 5. Tuple
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