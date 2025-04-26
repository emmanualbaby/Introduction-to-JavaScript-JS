// JavaScript Object Constructors
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

// Creating a new object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Jane", "Doe", 48, "green");

// Accessing object properties
console.log(myFather.firstName); // Output: John
console.log(myMother.eyeColor);  // Output: green
