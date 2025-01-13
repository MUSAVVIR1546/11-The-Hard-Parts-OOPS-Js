### Inheritance and Subclassing in JavaScript.

#### Inheritance:
Inheritance allows one object to access the properties and methods of another object without rewriting the entire code. It promotes **readability**, **reusability**, and **avoids duplication**.

#### Subclassing:
Suppose we create a class called `User`, and in this class, we define properties like `name` and `score`, along with methods like `incrementScore()`. This class will return objects like `user1`, `user2`, and many more. 

Now, let's say we create another class called `PaidUser`. This class needs the same methods and properties as the `User` class. Instead of redefining everything, we can inherit them from the `User` class using the `extends` keyword.

### Example:

```javascript
// Base class User
class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score += 1;
  }
}

// Subclass PaidUser inherits from User
class PaidUser extends User {
  constructor(name, score, accountBalance) {
    super(name, score); // Calls the parent class constructor
    this.accountBalance = accountBalance;
  }

  increaseBalance(amount) {
    this.accountBalance += amount;
  }
}

const user1 = new User('Alice', 10);
user1.incrementScore();  // 11

const paidUser1 = new PaidUser('Bob', 20, 100);
paidUser1.incrementScore();  // 21
paidUser1.increaseBalance(50);  // 150
```

### Key Notes:

- **Inheritance** helps in avoiding redundant code by allowing objects to access properties and methods of other objects.
- **Subclassing** allows us to create a more specific version of an object without rewriting code, by extending a parent class.
