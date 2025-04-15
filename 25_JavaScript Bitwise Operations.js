// JavaScript Bitwise Operations

// Bitwise AND (&)
let andResult = 5 & 3; // 0101 & 0011 = 0001
console.log("Bitwise AND: " + andResult); // Output: Bitwise AND: 1

// Bitwise OR (|)
let orResult = 5 | 3; // 0101 | 0011 = 0111
console.log("Bitwise OR: " + orResult); // Output: Bitwise OR: 7

// Bitwise XOR (^)
let xorResult = 5 ^ 3; // 0101 ^ 0011 = 0110
console.log("Bitwise XOR: " + xorResult); // Output: Bitwise XOR: 6

// Bitwise NOT (~)
let notResult = ~5; // ~0101 = 1010 (in 32-bit representation: 11111111111111111111111111111010)
console.log("Bitwise NOT: " + notResult); // Output: Bitwise NOT: -6

// Bitwise Left Shift (<<)
let leftShiftResult = 5 << 1; // 0101 << 1 = 1010
console.log("Bitwise Left Shift: " + leftShiftResult); // Output: Bitwise Left Shift: 10

// Bitwise Right Shift (>>)
let rightShiftResult = 5 >> 1; // 0101 >> 1 = 0010
console.log("Bitwise Right Shift: " + rightShiftResult); // Output: Bitwise Right Shift: 2

// Bitwise Zero-Fill Right Shift (>>>)
let zeroFillRightShiftResult = 5 >>> 1; // 0101 >>> 1 = 0010
console.log("Bitwise Zero-Fill Right Shift: " + zeroFillRightShiftResult); // Output: Bitwise Zero-Fill Right Shift: 2
