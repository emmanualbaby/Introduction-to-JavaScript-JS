// JavaScript Numbers

// Integer
let x = 10;
console.log("Integer: " + x); // Output: Integer: 10

// Floating-point number
let y = 10.5;
console.log("Floating-point number: " + y); // Output: Floating-point number: 10.5

// Exponential notation
let z = 1.23e5;
console.log("Exponential notation: " + z); // Output: Exponential notation: 123000

// Number methods
let num = 123.456;

// toString() method
let numString = num.toString();
console.log("Number as string: " + numString); // Output: Number as string: 123.456

// toFixed() method
let numFixed = num.toFixed(2);
console.log("Number with fixed decimals: " + numFixed); // Output: Number with fixed decimals: 123.46

// toPrecision() method
let numPrecision = num.toPrecision(4);
console.log("Number with precision: " + numPrecision); // Output: Number with precision: 123.5

// valueOf() method
let numValue = num.valueOf();
console.log("Number value: " + numValue); // Output: Number value: 123.456

// Number() function
let str = "123.456";
let numFromString = Number(str);
console.log("Number from string: " + numFromString); // Output: Number from string: 123.456

// parseInt() function
let intFromString = parseInt(str);
console.log("Integer from string: " + intFromString); // Output: Integer from string: 123

// parseFloat() function
let floatFromString = parseFloat(str);
console.log("Float from string: " + floatFromString); // Output: Float from string: 123.456

// isNaN() function
let notANumber = isNaN("Hello");
console.log("Is 'Hello' NaN: " + notANumber); // Output: Is 'Hello' NaN: true

// isFinite() function
let finiteNumber = isFinite(123);
console.log("Is 123 finite: " + finiteNumber); // Output: Is 123 finite: true

// Infinity and -Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log("Positive Infinity: " + positiveInfinity); // Output: Positive Infinity: Infinity
console.log("Negative Infinity: " + negativeInfinity); // Output: Negative Infinity: -Infinity
