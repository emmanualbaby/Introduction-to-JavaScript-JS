// JavaScript BigInt

// Creating BigInt values
let bigInt1 = BigInt(123456789012345678901234567890);
let bigInt2 = 123456789012345678901234567890n;

// Displaying BigInt values
console.log("BigInt1: " + bigInt1); // Output: BigInt1: 123456789012345678901234567890
console.log("BigInt2: " + bigInt2); // Output: BigInt2: 123456789012345678901234567890

// Adding BigInt values
let sum = bigInt1 + bigInt2;
console.log("Sum: " + sum); // Output: Sum: 246913578024691357802469135780

// Subtracting BigInt values
let difference = bigInt1 - bigInt2;
console.log("Difference: " + difference); // Output: Difference: 0

// Multiplying BigInt values
let product = bigInt1 * bigInt2;
console.log("Product: " + product); // Output: Product: 15241578753238836750495351562536198787501905199875019052100

// Dividing BigInt values
let quotient = bigInt1 / BigInt(2);
console.log("Quotient: " + quotient); // Output: Quotient: 61728394506172839450617283945

// Modulus of BigInt values
let modulus = bigInt1 % BigInt(2);
console.log("Modulus: " + modulus); // Output: Modulus: 0

// Comparing BigInt values
let isEqual = bigInt1 === bigInt2;
console.log("Is Equal: " + isEqual); // Output: Is Equal: true

// Converting BigInt to Number (Note: This may lose precision if the BigInt is too large)
let bigIntToNumber = Number(bigInt1);
console.log("BigInt to Number: " + bigIntToNumber); // Output: BigInt to Number: 1.2345678901234568e+29
