# Mastering OOP Principles in JavaScript

## 01. OOPS (Object-Oriented Programming)
JavaScript uses OOP principles (Object-Oriented Programming). With these principles, we can create a complete program using the `class` keyword. Classes are structured blocks of code containing properties (data) and methods (functions). Classes always return objects.

**Example**
```javascript
class Animal {
  constructor(name, sound) {
    this.name = name; // Property
    this.sound = sound; // Property
  }

  makeSound() {
    console.log(`${this.name} makes a sound: ${this.sound}`); // Method
  }
}

// Creating an object
const dog = new Animal('Dog', 'Bark');
dog.makeSound(); // Output: Dog makes a sound: Bark
```

## 02. Pillars of OOPS

### Encapsulation
Encapsulation means bundling properties (data) and methods (functions) inside a class while hiding internal details.

**Example**
```javascript
class BankAccount {
  #balance; // Private property (hidden from outside)

  constructor(initialBalance) {
    this.#balance = initialBalance; // Encapsulated property
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance; // Controlled access
  }
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited: 500, New Balance: 1500
console.log(account.getBalance()); // Output: 1500
```
### Abstraction
Abstraction involves hiding complex code and showing a user-friendly interface.

**Example**
```javascript
class Car {
  startEngine() {
    console.log('Engine started'); // Simplified user interface
  }

  #startFuelPump() {
    console.log('Fuel pump activated'); // Internal detail
  }

  #ignite() {
    console.log('Ignition system triggered'); // Internal detail
  }

  start() {
    this.#startFuelPump();
    this.#ignite();
    this.startEngine();
  }
}

const car = new Car();
car.start(); 
// Output:
// Fuel pump activated
// Ignition system triggered
// Engine started

```
### Inheritance
Inheritance allows one class to share its properties and methods with another class. Use the `extends` keyword for this purpose.

**Example**
```javascript
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving`);
  }
}

class Bike extends Vehicle {
  constructor(type, brand) {
    super(type); // Calls the parent class constructor
    this.brand = brand;
  }

  move() {
    console.log(`${this.brand} bike is zooming on the road`);
  }
}

const bike = new Bike('Two-wheeler', 'Yamaha');
bike.move(); // Output: Yamaha bike is zooming on the road

```
### Polymorphism
Polymorphism allows different classes to use the same method name in different ways.

**Example**
```javascript
class Shape {
  area() {
    return 0; // Default implementation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius; // Circle-specific implementation
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width; // Rectangle-specific implementation
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => console.log(shape.area()));
// Output:
// 78.53981633974483 (Area of Circle)
// 24 (Area of Rectangle)
```