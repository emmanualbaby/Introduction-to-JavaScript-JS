// JavaScript Strings

// Creating a string
let text = "Hello, World!";

// String length
let length = text.length;
console.log("Length: " + length); // Output: Length: 13

// Finding a substring
let position = text.indexOf("World");
console.log("Position of 'World': " + position); // Output: Position of 'World': 7

// Extracting a substring
let substring = text.slice(7, 12);
console.log("Substring: " + substring); // Output: Substring: World

// Replacing a substring
let newText = text.replace("World", "JavaScript");
console.log("New Text: " + newText); // Output: New Text: Hello, JavaScript!

// Converting to uppercase
let upperText = text.toUpperCase();
console.log("Uppercase: " + upperText); // Output: Uppercase: HELLO, WORLD!

// Converting to lowercase
let lowerText = text.toLowerCase();
console.log("Lowercase: " + lowerText); // Output: Lowercase: hello, world!

// Concatenating strings
let text1 = "Hello";
let text2 = "World";
let concatenatedText = text1.concat(", ", text2, "!");
console.log("Concatenated Text: " + concatenatedText); // Output: Concatenated Text: Hello, World!

// Trimming whitespace
let textWithWhitespace = "   Hello, World!   ";
let trimmedText = textWithWhitespace.trim();
console.log("Trimmed Text: '" + trimmedText + "'"); // Output: Trimmed Text: 'Hello, World!'

// Splitting a string
let splitText = text.split(", ");
console.log("Split Text: ", splitText); // Output: Split Text: [ 'Hello', 'World!' ]
