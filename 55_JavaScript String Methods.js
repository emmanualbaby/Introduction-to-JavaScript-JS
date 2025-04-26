// JavaScript String Methods

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

// Checking if a string includes a substring
let includesWorld = text.includes("World");
console.log("Includes 'World': " + includesWorld); // Output: Includes 'World': true

// Checking if a string starts with a substring
let startsWithHello = text.startsWith("Hello");
console.log("Starts with 'Hello': " + startsWithHello); // Output: Starts with 'Hello': true

// Checking if a string ends with a substring
let endsWithWorld = text.endsWith("World!");
console.log("Ends with 'World!': " + endsWithWorld); // Output: Ends with 'World!': true

// Repeating a string
let repeatedText = text.repeat(2);
console.log("Repeated Text: " + repeatedText); // Output: Repeated Text: Hello, World!Hello, World!

// Getting a character at a specific index
let charAtIndex = text.charAt(1);
console.log("Character at index 1: " + charAtIndex); // Output: Character at index 1: e

// Getting the Unicode value of a character at a specific index
let charCodeAtIndex = text.charCodeAt(1);
console.log("Unicode value at index 1: " + charCodeAtIndex); // Output: Unicode value at index 1: 101

// Converting a string to an array of characters
let charArray = Array.from(text);
console.log("Array of characters: ", charArray); // Output: Array of characters: [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]
