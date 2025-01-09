# In this discussion, we will learn whether JavaScript is an OOP language or not.

The answer is **NO**. JavaScript is a prototypal language and a multi-paradigm programming language that supports OOP principles but is not strictly an OOP language.

## Prototypal Inheritance in JavaScript

- In JavaScript, prototypal inheritance is used to optimize memory usage and share functionalities.  
- Instead of copying a method in every object, methods are stored in the object's prototype and accessed through the prototype chain.

## Introduction of Classes in JavaScript

- Later, JavaScript introduced Classes, which simplify the system by following the OOP paradigm of languages like Java and Python.  
- However, under the hood, JavaScript still uses prototypal inheritance.  
- This is called **syntactic sugar**, meaning it provides a cleaner syntax while functioning the same way as prototypal inheritance.

## Importance of Understanding Prototypal Inheritance

- It is important to understand prototypal inheritance in JavaScript because arrays and functions always have hidden links like `__proto__`, which allow them to access shared functionalities.

```javascript
// Solution: Prototypal inheritance
function User(name, score) {
    this.name = name;
    this.score = score;
}
User.prototype.increment = function () {
    this.score++;
};

// Creating objects
const user1 = new User("Eva", 9);
user1.increment();
console.log(user1.score); // 10

// Solution: Using Classes (syntactic sugar)
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
}

// Creating objects with classes
const user2 = new User("John", 15);
user2.increment();
console.log(user2.score); // 16
```