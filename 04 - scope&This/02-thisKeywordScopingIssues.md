### Understanding `this` in JavaScript  

In JavaScript, the keyword **`this`** is dynamic and depends on *how* a function is called.  

- **If `this` is used in an object or method**, it refers to the object the method belongs to.  
- **If `this` is used in a nested function**, it unexpectedly refers to the `window` object (or `undefined` in strict mode).  

---

### The Problem  
This unexpected behavior can be solved using:  

1. **Arrow Functions**:  
   Arrow functions don’t have their own `this`. Instead, they inherit `this` from the surrounding scope (where they are defined).  

2. **Storing `this` in a Variable**:  
   You can store `this` in a variable (e.g., `const that = this;`) and use it inside the nested function.  

---

### Bonus Concept: Closures  
This concept also reminds us of **closures**! Closures rely on **lexical scoping**, which ensures that an arrow function or nested function retains access to variables (including `this`) from its parent scope.  

```javascript
function UserCreator(name, score) {
    this.name = name;  // Sets the name of the object
    this.score = score; // Sets the score of the object
}

// Added the `increment` method to the prototype
UserCreator.prototype.increment = function () {
    function add1() {
        this.score++;
    };
    add1();
};

// Added the `login` method to the prototype
UserCreator.prototype.login = function () {
    console.log('login');
};

// Created a new object
const user1 = new UserCreator('Eva', 9); // Sets user1's name to 'Eva' and score to 9
user1.increment(); // Increments user1's score (9 -> 10)
```