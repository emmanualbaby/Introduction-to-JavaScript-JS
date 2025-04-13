// JavaScript "use strict"

// Using "use strict" in a function
function strictFunction() {
  "use strict";
  // Code here is executed in strict mode
  let x = 3.14;
  // x = 3.14; // Error: Assignment to undeclared variable x
  console.log("Strict mode function: " + x);
}

strictFunction();

// Using "use strict" in the global scope
"use strict";
// Code here is executed in strict mode
let y = 3.14;
// y = 3.14; // Error: Assignment to undeclared variable y
console.log("Strict mode global: " + y);

// Strict mode prevents the use of undeclared variables
try {
  undeclaredVar = 10; // Error: Assignment to undeclared variable
} catch (error) {
  console.log("Error: " + error.message);
}

// Strict mode prevents the use of duplicate parameter names
try {
  function duplicateParam(a, a) {
    "use strict";
    return a + a;
  }
} catch (error) {
  console.log("Error: " + error.message);
}

// Strict mode prevents the use of octal literals
try {
  let octal = 010; // Error: Octal literals are not allowed in strict mode
} catch (error) {
  console.log("Error: " + error.message);
}

// Strict mode prevents the use of the with statement
try {
  with (Math) {
    let x = cos(2);
  }
} catch (error) {
  console.log("Error: " + error.message);
}
