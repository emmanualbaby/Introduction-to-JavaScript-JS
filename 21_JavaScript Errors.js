// JavaScript Errors

// Throwing an error
function throwError() {
  throw new Error("This is an error message");
}

try {
  throwError();
} catch (error) {
  console.log("Caught an error: " + error.message);
}
// Output: Caught an error: This is an error message

// Handling different types of errors
try {
  // ReferenceError
  console.log(nonExistentVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Caught a ReferenceError: " + error.message);
  }
}

try {
  // TypeError
  null.f();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught a TypeError: " + error.message);
  }
}

try {
  // SyntaxError (Note: SyntaxErrors are usually caught during parsing, not at runtime)
  eval("var a = ;");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught a SyntaxError: " + error.message);
  }
}

// Finally block
try {
  console.log("Trying...");
  throw new Error("An error occurred");
} catch (error) {
  console.log("Caught an error: " + error.message);
} finally {
  console.log("This will always run");
}
// Output:
// Trying...
// Caught an error: An error occurred
// This will always run

// Custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error message");
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught a CustomError: " + error.message);
  }
}
// Output: Caught a CustomError: This is a custom error message
