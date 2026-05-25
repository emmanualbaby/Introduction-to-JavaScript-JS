// Setting a Cookie 
// Setting a Cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Example: Set a cookie named "username" with value "JohnDoe" that expires in 7 days
setCookie("username", "JohnDoe", 7);


// Getting a Cookie
// Getting a Cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Example: Get the value of the cookie named "username"
let username = getCookie("username");
console.log("Username: " + username);


//Deleting a Cookie
// Deleting a Cookie
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Example: Delete the cookie named "username"
deleteCookie("username");
