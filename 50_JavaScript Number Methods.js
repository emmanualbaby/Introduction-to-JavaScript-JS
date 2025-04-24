// JavaScript Number Methods

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

// isInteger() method
let isInteger = Number.isInteger(123);
console.log("Is 123 an integer: " + isInteger); // Output: Is 123 an integer: true

// isSafeInteger() method
let isSafeInteger = Number.isSafeInteger(123);
console.log("Is 123 a safe integer: " + isSafeInteger); // Output: Is 123 a safe integer: true

// toExponential() method
let numExponential = num.toExponential(2);
console.log("Number in exponential form: " + numExponential); // Output: Number in exponential form: 1.23e+2

// Number.MAX_VALUE
console.log("Maximum value: " + Number.MAX_VALUE); // Output: Maximum value: 1.7976931348623157e+308

// Number.MIN_VALUE
console.log("Minimum value: " + Number.MIN_VALUE); // Output: Minimum value: 5e-324

// Number.POSITIVE_INFINITY
console.log("Positive Infinity: " + Number.POSITIVE_INFINITY); // Output: Positive Infinity: Infinity

// Number.NEGATIVE_INFINITY
console.log("Negative Infinity: " + Number.NEGATIVE_INFINITY); // Output: Negative Infinity: -Infinity

// Number.NaN
console.log("Not a Number: " + Number.NaN); // Output: Not a Number: NaN
