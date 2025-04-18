// JavaScript for...in Loop

// Looping through the properties of an object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30

// Looping through the indices of an array
let fruits = ["Apple", "Banana", "Cherry"];

for (let index in fruits) {
  console.log("Index " + index + ": " + fruits[index]);
}
// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Cherry
