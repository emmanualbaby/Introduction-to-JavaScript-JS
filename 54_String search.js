// JavaScript String Search Methods

let text = "Hello, World!";

// indexOf() method
let position = text.indexOf("World");
console.log("Position of 'World': " + position); // Output: Position of 'World': 7

// lastIndexOf() method
let lastPosition = text.lastIndexOf("o");
console.log("Last position of 'o': " + lastPosition); // Output: Last position of 'o': 8

// search() method
let searchPosition = text.search("World");
console.log("Search position of 'World': " + searchPosition); // Output: Search position of 'World': 7

// includes() method
let includesWorld = text.includes("World");
console.log("Includes 'World': " + includesWorld); // Output: Includes 'World': true

// startsWith() method
let startsWithHello = text.startsWith("Hello");
console.log("Starts with 'Hello': " + startsWithHello); // Output: Starts with 'Hello': true

// endsWith() method
let endsWithWorld = text.endsWith("World!");
console.log("Ends with 'World!': " + endsWithWorld); // Output: Ends with 'World!': true

// match() method
let matchResult = text.match(/World/g);
console.log("Match result: " + matchResult); // Output: Match result: World

// matchAll() method
let matchAllResult = text.matchAll(/o/g);
for (const match of matchAllResult) {
  console.log("Match all result: " + match); // Output: Match all result: o
}
