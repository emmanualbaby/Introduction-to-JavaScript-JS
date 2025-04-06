// Alert Box
// Alert Box
window.alert("This is an alert box!");


// Confirm Box
// Confirm Box
let userConfirmed = window.confirm("Do you want to proceed?");
if (userConfirmed) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

// Prompt Box
// Prompt Box
let userName = window.prompt("Please enter your name:", "John Doe");
if (userName !== null) {
  console.log("User's name is " + userName);
} else {
  console.log("User cancelled the prompt");
}



