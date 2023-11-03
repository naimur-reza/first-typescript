// Array defining method
var age = [1, 1, 1, "awkward"];
// empty array
var number = [];
number[0] = 1;
// number[1] = '2'; => this is can not assignable;
// tuple defining method
var users = [20, "Anik"];
// or
var person = [20, "Reza", true, 4];
var mySize = 2; /* Size.Medium */
console.log(mySize);
// function
function Calculation(age) {
  if (age > 20) return age;
}
var user = {
  name: "Anik",
  id: 9,
};
// object creation
var employee = {
  id: 3,
  name: "Jacky",
  retire: function (date) {
    return console.log(date);
  },
};
var quantity = 10;
// nullable types with union operator
function greet(name) {
  if (name) console.log(name.toLowerCase());
  else console.log("Not a valid string");
}
greet(undefined);
function getCustomer(id) {
  return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
// we can use optional operator when we get null or undefined.
console.log(
  customer === null || customer === void 0 ? void 0 : customer.birthday
);
// optional element access operator
// customers?.[0]
