// History Methods

// Go back to the previous page
window.history.back();

// Go forward to the next page
window.history.forward();

// Go to a specific page in the history
window.history.go(-2); // Go back 2 pages
window.history.go(1); // Go forward 1 page

// Push a new state onto the history stack
window.history.pushState({ page: 1 }, "title 1", "?page=1");

// Replace the current state on the history stack
window.history.replaceState({ page: 2 }, "title 2", "?page=2");

// Listen for popstate events
window.addEventListener("popstate", function(event) {
  console.log("Location: " + document.location + ", State: " + JSON.stringify(event.state));
});
