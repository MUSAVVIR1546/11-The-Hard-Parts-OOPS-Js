**`Object.create()`** creates a new empty object. If we assign another object as an input to this method, the new object can inherit some features (properties or methods) from the input object.

In this example, some properties like `name`, `score`, and `increment` are manually added to the empty object. However, adding properties manually is inefficient because, in the real world, when a user logs in, a reusable function is used to add these properties dynamically. This process is more efficient and avoids repetitive tasks.

**Example 01:**

```javascript
// Using Object.create to create a new object
const userTemplate = {
  increment: function () {
    this.score++;
  },
};

// Creating a new object using Object.create
const user = Object.create(userTemplate);

// Adding properties manually
user.name = "Eva";
user.score = 9;

console.log(user.name); // Output: Eva
console.log(user.score); // Output: 9

// Calling the increment method
user.increment();
console.log(user.score); // Output: 10

// Explanation:
// `user` inherits the `increment` method from `userTemplate`.
// Adding properties manually (e.g., `name` and `score`) is inefficient in real-world applications.
// Instead, a reusable function should dynamically assign these properties.
```
**Example 02:**
```Javascript
// Creating an empty object and adding properties manually
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
    this.score++;
};

// Using a reusable function for efficiency
function createUser(name, score) {
    const user = Object.create(null);
    user.name = name;
    user.score = score;
    user.increment = function () {
        this.score++;
    };
    return user;
}

const user4 = createUser("Terry", 10); // Reusable and dynamic
console.log(user4); // { name: "Terry", score: 10, increment: [Function] }
```