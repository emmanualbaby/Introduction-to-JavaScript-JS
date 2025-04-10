// JavaScript this Keyword

// In a global context
console.log(this); // Output: Window object (in a browser) or global object (in Node.js)

// In a method
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Output: Hello, John

// In a function (non-strict mode)
function showThis() {
  console.log(this);
}
showThis(); // Output: Window object (in a browser) or global object (in Node.js)

// In a function (strict mode)
function showStrictThis() {
  "use strict";
  console.log(this);
}
showStrictThis(); // Output: undefined

// In an event handler
let button = document.createElement("button");
button.textContent = "Click me";
button.onclick = function() {
  console.log(this); // Output: button element
};
document.body.appendChild(button);

// Using call, apply, and bind
let anotherPerson = {
  name: "Jane"
};

function greet() {
  console.log("Hello, " + this.name);
}

greet.call(anotherPerson); // Output: Hello, Jane
greet.apply(anotherPerson); // Output: Hello, Jane

let boundGreet = greet.bind(anotherPerson);
boundGreet(); // Output: Hello, Jane
