# **JavaScript and Prototypal Inheritance**

JavaScript uses **prototypal inheritance** to access methods or properties not found directly on an object. If a functionality is not found on an object, JavaScript looks for it in the hidden property called `__proto__`, which contains a reference to another object (the prototype). This mechanism ensures **efficient memory usage**, as methods are shared through the prototype chain, not copied to every object.

However, **manually creating objects** and setting up the prototype chain can be repetitive. To simplify this process, JavaScript provides the **`new` keyword**, which automates three tasks:

1. **Creating an object.**  
2. **Establishing a relationship** between the new object's prototype and the main object's prototype.  
3. **Returning the newly created object.**

---

## **Practical Example**

### **Manual Prototypal Inheritance (Without `new`)**

In this approach, we manually create objects and set up the prototype chain.

```javascript
// Shared methods stored in a prototype object
const userFunctions = {
  increment: function () {
    this.score++;
  },
};

// Creating an object manually and linking its prototype
function createUser(name, score) {
  const newUser = Object.create(userFunctions); // Create an object with a prototype link
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// Using the function to create objects
const user1 = createUser('Alice', 5);
const user2 = createUser('Bob', 10);

// Testing functionality
user1.increment();
console.log(user1.score); // 6
```

### **Automated Approach Using (new)**
The new keyword automates the object creation process and links the prototype for us.
```Javascript
// Constructor function (used with `new`)
function User(name, score) {
  this.name = name;
  this.score = score;
}

// Adding methods to the prototype of User
User.prototype.increment = function () {
  this.score++;
};

// Creating objects using the `new` keyword
const user1 = new User('Alice', 5);
const user2 = new User('Bob', 10);

// Testing functionality
user1.increment();
console.log(user1.score); // 6
```