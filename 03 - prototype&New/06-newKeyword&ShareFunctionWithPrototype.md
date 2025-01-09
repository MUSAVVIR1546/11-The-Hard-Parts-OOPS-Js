# __proto__ and prototype Connection Through this Keyword

In this lesson, we learn how `__proto__` and `prototype` are connected to each other through the `this` keyword.

## Step 1: userCreator Function as a Blueprint
The `userCreator` function behaves like an object, and `__proto__` points to the prototype. In this example, we explore how `__proto__` and `prototype` connect to each other.

We define the `userCreator` function, which acts as a blueprint for creating new user objects. The function shares methods like `increment` and `login` in its prototype.

```javascript
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() {
  this.score++;
}

userCreator.prototype.login = function() {
  console.log(this.name + ' logged in');
};
```
---
## Step 2: Benefits of Prototype
The benefit of using prototypes is that they don't consume memory. Every time we create a new user object through the `userCreator` function, the object automatically connects to these shared methods through the prototype.
---
## Step 3: Role of the new Keyword
When we call the `userCreator` function with the `new` keyword, it behaves like an object and passes values to it, such as 'eva' and 9. Now, with these values, the object is connected to the prototype, which contains the shared methods.

The prototype is a place where we can share methods and properties with newly created objects.

```javascript
const user1 = new userCreator('eva', 9);
```

## Step 4: What Happens When We Use new
The `new` keyword does several things for us:

- It creates an empty object.
- It links the object to the `userCreator` prototype.
- It assigns values to `name` and `score`.
- Finally, it returns the object.

```javascript
console.log(user1); // userCreator { name: 'eva', score: 9 }
```
---
## Step 5: Connecting the Object to the Prototype
Now, when we create a new object like `user1`, it's automatically connected to the `userCreator` prototype through the `new` keyword. Every object can access the methods in the prototype through `__proto__`, because every newly created object has a hidden property called `__proto__`, which connects to the `userCreator` prototype through the `new` keyword.

```javascript
console.log(user1.__proto__ === userCreator.prototype); // true
```
---
## Step 6: The `this` Keyword and Its Hidden `__proto__`
Also, the `this` keyword itself has its own object, and within that object, there is a hidden property `__proto__`, which connects to the `userCreator` prototype.

```javascript
console.log(user1.__proto__); // { increment: [Function], login: [Function] }
```
---