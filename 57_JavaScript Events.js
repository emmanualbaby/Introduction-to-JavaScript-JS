// JavaScript Events

// Function to change the text of a paragraph when a button is clicked
function changeText() {
  document.getElementById("myParagraph").innerHTML = "Text has been changed!";
}

// Function to display an alert when the mouse is over a div
function mouseOver() {
  alert("Mouse is over the div!");
}

// Function to display an alert when a key is pressed
function keyPress() {
  alert("A key was pressed!");
}

// Adding event listeners
document.getElementById("myButton").addEventListener("click", changeText);
document.getElementById("myDiv").addEventListener("mouseover", mouseOver);
document.addEventListener("keypress", keyPress);
