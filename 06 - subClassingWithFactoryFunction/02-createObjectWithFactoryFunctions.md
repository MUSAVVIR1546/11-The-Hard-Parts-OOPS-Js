In this lesson, we learn how we can make objects using factory functions without using the `new` keyword and establish a relationship between object prototypes (methods in this case).

### What is a factory function?
Factory functions are functions that create objects without using the `new` keyword. You can create many objects, such as `user1`, `user2`, `user1000`, or any name of your choice.

As you can see in my example, we create a factory function that returns objects like `user1`, `user2`, and any name you want. In this function, we declare `const user = Object.create(userFunctions)` and declare `userFunctions` outside of `userCreator`. `userFunctions` is an object that contains methods like `sayName` and `incrementScore`.

Because of `Object.create()`, objects created by `userCreator` can access all methods and properties of `userFunctions` because this method establishes a relationship between the `userCreator` objects and the `userFunctions` object. This access is possible due to the prototype chain because `userFunctions` is now stored in the prototype.

In this lesson, we are reminded of inheritance and subclassing, as well as the prototype chain.

```javascript
// Factory function to create users
function userCreator(name, score) {
  const user = Object.create(userFunctions); // Prototype chain se userFunctions link hota hai
  user.name = name;
  user.score = score;
  return user;
}

// Shared functions (user functions prototype)
const userFunctions = {
  sayName() {
    console.log(this.name); // Prototype chain se name access kar rahe hain
  },
  incrementScore() {
    this.score++; // Prototype chain se score access kar rahe hain
  }
};

// Create user (user1) using userCreator
const user1 = userCreator("Phil", 5);
user1.sayName(); // Output: Phil

// Create paid user (paidUser1) using paidUserCreator
function paidUserCreator(name, score, accountBalance) {
  const paidUser = userCreator(name, score); // userCreator se properties aur methods inherit ho rahe hain
  paidUser.accountBalance = accountBalance;  // Paid user ke liye extra property add ho rahi hai
  return paidUser;
}

const paidUser1 = paidUserCreator("Alyssa", 8, 1000);
console.log(paidUser1.accountBalance); // Output: 1000
paidUser1.sayName(); // Output: Alyssa (Inherited sayName method from userFunctions)
```