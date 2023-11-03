"use strict";
let age = [1, 1, 1, 'awkward'];
let number = [];
number[0] = 1;
let users = [20, "Anik"];
let person = [20, 'Reza', true, 4];
;
let mySize = 2;
console.log(mySize);
function Calculation(age) {
    if (age > 20)
        return age;
}
const user = {
    name: "Anik",
    id: 9
};
let employee = {
    id: 3,
    name: 'Jacky',
    retire: (date) => console.log(date)
};
let quantity = 10;
function greet(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Not a valid string');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
