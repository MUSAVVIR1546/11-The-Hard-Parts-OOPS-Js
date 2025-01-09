# In this discussion
We learned about Arrow functions and `this`, and how we benefit from using them in object methods.

## Arrow Functions and `this`
Arrow functions inherit `this` from their lexical scope, meaning where they are defined. This protects them from dynamic `this` issues and makes them ideal for use in object methods.

## Performance Impact
On every call, like in this example, a new function (e.g., `add1()`) is created in memory. This slightly impacts performance but improves readability and modularity.

## Garbage Collection
After every call, these functions create their own execution context, and after execution, their execution context is deleted, meaning these functions are also deleted. This process is called Garbage Collection.

## Bonus
We also learned about closures because closures depend on lexical scope, execution context, and Garbage Collection.

### Example.
```javascript
function UserCreator(name, score) {
    this.name = name;  // Sets the name of the object
    this.score = score; // Sets the score of the object
}

// Added the `increment` method to the prototype
UserCreator.prototype.increment = function () {
    const add1 = () => {
        this.score++; // Arrow function binds `this` lexically to the surrounding scope
    };
    add1(); // Call the arrow function
};

// Added the `login` method to the prototype
UserCreator.prototype.login = function () {
    console.log('login');
};

// Created a new object
const user1 = new UserCreator('Eva', 9); // Sets user1's name to 'Eva' and score to 9
user1.increment(); // Increments user1's score (9 -> 10)
console.log(user1.score); // Output: 10

```