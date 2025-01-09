## Calling Prototype Method.
In this lecture, the speaker explains how the `this` keyword works in methods. 

As we can see this example When we call the `user1.increment()` method, JavaScript first searches for the `increment` method inside the `user1` object itself. If it doesn’t find the method there, it doesn’t panic. Instead, JavaScript moves to check the `UserCreator.prototype` object, where all shared methods are stored for the objects created by the `UserCreator` constructor.

Once JavaScript finds the `increment` method in the prototype, it executes it. But here’s the key: the `this` keyword inside the `increment` method refers to the object that called the method (the one on the left-hand side of the dot). For example:
- When you call `user1.increment()`, `this` refers to `user1`, so `user1.score` is updated.
- Similarly, when you call `user20.increment()`, `this` refers to `user20`, so `user20.score` is updated.

In simple words, the prototype allows all objects (like `user1`, `user20`) to share methods without duplicating them in every object. But the `this` keyword dynamically refers to the specific object calling the method, ensuring that the correct object’s data is modified.

### Example :-
```javascript
function UserCreator(name, score) {
    this.name = name;  // Sets the name of the object
    this.score = score; // Sets the score of the object
}

// Added the `increment` method to the prototype
UserCreator.prototype.increment = function () {
    this.score++; // Increments the score of the object
};

// Added the `login` method to the prototype
UserCreator.prototype.login = function () {
    console.log('login');
};

// Created a new object
const user1 = new UserCreator('Eva', 9); // Sets user1's name to 'Eva' and score to 9
user1.increment(); // Increments user1's score (9 -> 10)
```