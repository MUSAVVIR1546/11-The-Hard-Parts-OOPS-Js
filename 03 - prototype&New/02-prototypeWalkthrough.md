## Prototype Walkthrough.
We can avoid the duplication of methods in this way. In this example, the `userCreator` function has 2 parameters: `name` and `score`. This function contains a constant `newUser`, which uses the `Object.create()` method to create an empty object. This object is then connected to its prototype (`userFunctionStore`) and returned.

The `userFunctionStore` object contains 2 keys, and their values are functions. Through the prototype, the methods in `userFunctionStore` are shared with the objects created by `userCreator`. This approach ensures that these methods do not consume additional memory every time we call `userCreator` with different arguments. Instead, each object created by `userCreator` has its own properties (`name` and `score`) while maintaining a hidden connection to `userFunctionStore` through the prototype. This allows all the objects to share the `increment` and `login` methods efficiently.

```Javascript
// Prototype Object with shared methods
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log(`${this.name} has logged in.`);
  }
};

// Function to create user objects
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); // Create object with bond to userFunctionStore
  newUser.name = name; // Add properties
  newUser.score = score;
  return newUser; // Return the object
}

// Create users
const user1 = userCreator('Phil', 4);
const user2 = userCreator('Julia', 5);

// Usage
user1.increment(); // Access shared method from prototype
user2.login(); // Logs: Julia has logged in

console.log(user1.score); // Output: 5
console.log(user2.name); // Output: Julia
```
