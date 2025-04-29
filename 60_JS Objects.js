// JS Objects - Example
let car = {
  type: "Fiat",
  model: "500",
  color: "white",
  start: function() { // Method to start the car
    console.log("Car started");
  }
};

console.log("Car type: " + car.type);
console.log("Car model: " + car.model);
console.log("Car color: " + car.color);
car.start(); // Call the start method
