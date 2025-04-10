//             Exporting from a module (math.js):



// math.js

// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;




//  Importing in another module (main.js):

// main.js

// Importing named exports
import { add, subtract } from './math.js';

// Importing the default export
import multiply from './math.js';

console.log("Add: " + add(2, 3)); // Output: Add: 5
console.log("Subtract: " + subtract(5, 2)); // Output: Subtract: 3
console.log("Multiply: " + multiply(4, 3)); // Output: Multiply: 12



//   Aggregating exports (index.js):
// index.js

export * from './math.js';
export { default as multiply } from './math.js';




//Importing aggregated modules (main.js):
// main.js

import { add, subtract, multiply } from './index.js';

console.log("Add: " + add(2, 3)); // Output: Add: 5
console.log("Subtract: " + subtract(5, 2)); // Output: Subtract: 3
console.log("Multiply: " + multiply(4, 3)); // Output: Multiply: 12


//Dynamic Imports
//Using dynamic imports (main.js):

// main.js

async function loadMathModule() {
  const math = await import('./math.js');
  console.log("Add: " + math.add(2, 3)); // Output: Add: 5
  console.log("Subtract: " + math.subtract(5, 2)); // Output: Subtract: 3
  console.log("Multiply: " + math.default(4, 3)); // Output: Multiply: 12
}

loadMathModule();





