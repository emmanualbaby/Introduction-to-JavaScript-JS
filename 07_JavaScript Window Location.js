// Location Properties

// Location Properties

// Get the URL of the current page
let url = window.location.href;
console.log("URL: " + url); // Output: URL: [current URL]

// Get the hostname of the current page
let hostname = window.location.hostname;
console.log("Hostname: " + hostname); // Output: Hostname: [current hostname]

// Get the path of the current page
let pathname = window.location.pathname;
console.log("Pathname: " + pathname); // Output: Pathname: [current pathname]

// Get the protocol of the current page
let protocol = window.location.protocol;
console.log("Protocol: " + protocol); // Output: Protocol: [current protocol]

// Get the port of the current page
let port = window.location.port;
console.log("Port: " + port); // Output: Port: [current port]


//Location Methods

// Location Methods

// Redirect to a new URL
window.location.href = "https://www.example.com";

// Reload the current page
window.location.reload();

// Assign a new URL
window.location.assign("https://www.example.com");

// Replace the current URL
window.location.replace("https://www.example.com");

