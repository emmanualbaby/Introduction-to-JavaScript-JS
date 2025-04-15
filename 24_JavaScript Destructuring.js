// JavaScript Destructuring

// Array Destructuring
let fruits = ["Apple", "Banana", "Cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("First Fruit: " + firstFruit); // Output: First Fruit: Apple
console.log("Second Fruit: " + secondFruit); // Output: Second Fruit: Banana
console.log("Third Fruit: " + thirdFruit); // Output: Third Fruit: Cherry

// Skipping items in Array Destructuring
let [first, , third] = fruits;
console.log("First: " + first); // Output: First: Apple
console.log("Third: " + third); // Output: Third: Cherry

// Default values in Array Destructuring
let [a, b, c, d = "Default"] = fruits;
console.log("Fourth Fruit: " + d); // Output: Fourth Fruit: Default

// Object Destructuring
let person = { name: "John", age: 30, city: "New York" };
let { name, age, city } = person;
console.log("Name: " + name); // Output: Name: John
console.log("Age: " + age); // Output: Age: 30
console.log("City: " + city); // Output: City: New York

// Renaming variables in Object Destructuring
let { name: personName, age: personAge, city: personCity } = person;
console.log("Person Name: " + personName); // Output: Person Name: John
console.log("Person Age: " + personAge); // Output: Person Age: 30
console.log("Person City: " + personCity); // Output: Person City: New York

// Default values in Object Destructuring
let { name: n, age: a, country = "USA" } = person;
console.log("Country: " + country); // Output: Country: USA

// Nested Object Destructuring
let user = {
  id: 1,
  info: {
    username: "johndoe",
    email: "johndoe@example.com"
  }
};
let { info: { username, email } } = user;
console.log("Username: " + username); // Output: Username: johndoe
console.log("Email: " + email); // Output: Email: johndoe@example.com
