In previous lessons, we saw how to create objects using functions, store methods in their prototypes, use the `this` keyword, understand the prototype chain, and much more.

# In this discussion, we will learn about classes in JavaScript.

Classes in JavaScript simplify the prototype-based system and make code more organized, readable, understandable, and clean.

## Previously in JavaScript

We created functions that returned objects and stored methods in their prototypes using the dot notation (e.g., `.prototype`). However, classes make this process more organized, readable, and automated by bundling the function-object combination and methods into a single class.

## In classes

- The function-object combination is called the **constructor**.
- All functions are called **methods**.
- Bundling properties and methods together is known as **encapsulation**.

## Prototype Mechanism and Classes

In the prototype mechanism, when we call a method like `increment`, JavaScript searches for it in the prototype chain. This process remains the same in classes. However, with classes:
- We no longer need to manually assign methods to the prototype.
- They are automatically handled for us.

### Example :-
```javascript
// Class ka use karke
class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    login() {
        console.log('login');
    }
}

const user1 = new UserCreator('Eva', 9);
user1.increment(); // user1 ka score 10 ho gaya
console.log(user1.score); // Output: 10
```