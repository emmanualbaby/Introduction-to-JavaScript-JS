// JavaScript Regular Expressions

// Creating a regular expression
let regex = /hello/i; // Case-insensitive match for "hello"

// Testing a regular expression
let testString = "Hello, world!";
let isMatch = regex.test(testString);
console.log("Is match: " + isMatch); // Output: Is match: true

// Executing a regular expression
let execResult = regex.exec(testString);
console.log("Exec result: " + execResult); // Output: Exec result: Hello

// Matching a regular expression
let matchResult = testString.match(regex);
console.log("Match result: " + matchResult); // Output: Match result: Hello

// Replacing with a regular expression
let replaceResult = testString.replace(regex, "Hi");
console.log("Replace result: " + replaceResult); // Output: Replace result: Hi, world!

// Splitting with a regular expression
let splitString = "apple, banana, cherry";
let splitResult = splitString.split(/,\s*/);
console.log("Split result: " + splitResult); // Output: Split result: apple,banana,cherry

// Using special characters in regular expressions
let specialRegex = /\d+/; // Match one or more digits
let specialTestString = "There are 123 apples";
let specialMatchResult = specialTestString.match(specialRegex);
console.log("Special match result: " + specialMatchResult); // Output: Special match result: 123

// Using groups and capturing in regular expressions
let groupRegex = /(\d+)\s(\w+)/;
let groupTestString = "123 apples";
let groupMatchResult = groupTestString.match(groupRegex);
console.log("Group match result: " + groupMatchResult);
// Output: Group match result: 123 apples,123,apples
