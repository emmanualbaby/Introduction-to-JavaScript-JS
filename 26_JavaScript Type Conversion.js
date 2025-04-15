// JavaScript Type Conversion

// Converting a string to a number
let str = "123";
let num = Number(str);
console.log("String to Number: " + num); // Output: String to Number: 123

// Converting a number to a string
let numToStr = num.toString();
console.log("Number to String: " + numToStr); // Output: Number to String: 123

// Converting a boolean to a number
let bool = true;
let boolToNum = Number(bool);
console.log("Boolean to Number: " + boolToNum); // Output: Boolean to Number: 1

// Converting a number to a boolean
let numToBool = Boolean(num);
console.log("Number to Boolean: " + numToBool); // Output: Number to Boolean: true

// Converting a string to a boolean
let strToBool = Boolean(str);
console.log("String to Boolean: " + strToBool); // Output: String to Boolean: true

// Converting a boolean to a string
let boolToStr = bool.toString();
console.log("Boolean to String: " + boolToStr); // Output: Boolean to String: true

// Parsing integers and floating-point numbers from strings
let intStr = "456";
let floatStr = "123.45";

let parsedInt = parseInt(intStr);
let parsedFloat = parseFloat(floatStr);

console.log("Parsed Integer: " + parsedInt); // Output: Parsed Integer: 456
console.log("Parsed Float: " + parsedFloat); // Output: Parsed Float: 123.45

// Converting a date to a string
let date = new Date();
let dateToStr = date.toString();
console.log("Date to String: " + dateToStr); // Output: Date to String: (current date and time)

// Converting a string to a date
let dateStr = "2024-12-27T18:05:00";
let strToDate = new Date(dateStr);
console.log("String to Date: " + strToDate); // Output: String to Date: Fri Dec 27 2024 18:05:00 GMT+0530 (India Standard Time)
