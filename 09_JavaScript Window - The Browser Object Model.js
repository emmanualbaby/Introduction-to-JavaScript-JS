//   Window Object


// Window Object

// Display an alert box
window.alert("Hello, world!");

// Open a new browser window
let newWindow = window.open("https://www.example.com", "_blank");

// Close the new browser window
newWindow.close();

// Print the current page
window.print();



//  Window Properties

// Window Properties

// Get the inner width and height of the window
let width = window.innerWidth;
let height = window.innerHeight;
console.log("Width: " + width + ", Height: " + height);

// Get the outer width and height of the window
let outerWidth = window.outerWidth;
let outerHeight = window.outerHeight;
console.log("Outer Width: " + outerWidth + ", Outer Height: " + outerHeight);

// Get the URL of the current page
let url = window.location.href;
console.log("URL: " + url);

// Get the hostname of the current page
let hostname = window.location.hostname;
console.log("Hostname: " + hostname);

// Get the path of the current page
let pathname = window.location.pathname;
console.log("Pathname: " + pathname);

// Get the protocol of the current page
let protocol = window.location.protocol;
console.log("Protocol: " + protocol);



// Window Methods

// Window Methods

// Set a timeout to execute a function after 2 seconds
let timeoutId = window.setTimeout(() => {
  console.log("Timeout executed");
}, 2000);

// Clear the timeout
window.clearTimeout(timeoutId);

// Set an interval to execute a function every 1 second
let intervalId = window.setInterval(() => {
  console.log("Interval executed");
}, 1000);

// Clear the interval
window.clearInterval(intervalId);



// Navigator Object

// Navigator Object

// Get the user agent string
let userAgent = window.navigator.userAgent;
console.log("User Agent: " + userAgent);

// Get the platform
let platform = window.navigator.platform;
console.log("Platform: " + platform);

// Check if cookies are enabled
let cookiesEnabled = window.navigator.cookieEnabled;
console.log("Cookies Enabled: " + cookiesEnabled);


// Screen Object

// Screen Object

// Get the screen width and height
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
console.log("Screen Width: " + screenWidth + ", Screen Height: " + screenHeight);

// Get the available screen width and height
let availWidth = window.screen.availWidth;
let availHeight = window.screen.availHeight;
console.log("Available Screen Width: " + availWidth + ", Available Screen Height: " + availHeight);



// History Object


// History Object

// Go back to the previous page
window.history.back();

// Go forward to the next page
window.history.forward();

// Go to a specific page in the history
window.history.go(-2); // Go back 2 pages



