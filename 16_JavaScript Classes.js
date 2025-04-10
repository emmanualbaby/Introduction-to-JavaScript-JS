// JavaScript Classes

// Defining a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method in a class
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the class
let person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  // Method in the derived class
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Creating an instance of the derived class
let student1 = new Student("Jane", 20, "A");
student1.greet(); // Output: Hello, my name is Jane and I am 20 years old.
student1.study(); // Output: Jane is studying in grade A.

// Static method
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log("Sum: " + MathUtil.add(5, 3)); // Output: Sum: 8

// Getters and Setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }

  // Setter
  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

let rect = new Rectangle(4, 5);
console.log("Area: " + rect.area); // Output: Area: 20
rect.area = 25;
console.log("New Width: " + rect.width); // Output: New Width: 5
console.log("New Height: " + rect.height); // Output: New Height: 5
