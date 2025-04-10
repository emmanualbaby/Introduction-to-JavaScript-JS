
// JavaScript Arrow Functions

// Basic arrow function
const add = (a, b) => a + b;
console.log("Sum: " + add(2, 3)); // Output: Sum: 5

// Arrow function with a single parameter
const square = x => x * x;
console.log("Square: " + square(4)); // Output: Square: 16

// Arrow function with no parameters
const greet = () => "Hello, world!";
console.log(greet()); // Output: Hello, world!

// Arrow function with multiple statements
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Product: " + multiply(3, 4)); // Output: Product: 12

// Arrow function as a callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled: " + doubled); // Output: Doubled: 2,4,6,8,10

// Arrow function and this keyword
const person = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};
person.greet(); // Output: Hello, John (after 1 second)
