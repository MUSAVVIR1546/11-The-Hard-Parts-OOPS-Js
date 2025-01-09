**Explanation:**
Most beginner developers know that dot notation in objects is used only to access the properties and methods of an object, but dot notation can also be used to attach properties and methods to an object.
With dot notation, we can access the properties of an object and we can attach properties and methods too with dot notation. In this example, we create an empty object called `user2` and attach the keys and values:

1. The first key is `name` and the value is `"Julia"`.
2. The second key is `score` and the value is `5`.
3. And lastly, we add a functionality called `incrementScore`, which increases the score by `+1` on every call.

This example shows us that we can attach properties and methods with dot notation.

---

### Example:

```javascript
// Creating an empty object user2
const user2 = {};

// Adding properties using dot notation
user2.name = "Julia";
user2.score = 5;

// Adding a method using dot notation
user2.incrementScore = function() {
  this.score += 1;
};

// Calling the method
user2.incrementScore();  // This will increase the score by 1
console.log(user2.score);  // Output: 6
```