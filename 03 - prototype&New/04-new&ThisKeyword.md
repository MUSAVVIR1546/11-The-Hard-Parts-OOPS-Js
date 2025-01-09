# **Understanding the `new` Keyword and `this` in JavaScript**

In the previous lesson, we used the `Object.create()` method to create objects, but this method was repetitive. The `new` keyword makes this process easier by handling all the tasks for us.

### **How the `new` Keyword Works**
- The `new` keyword automatically creates a new object, so we don’t need to create it manually using `Object.create()` or return it ourselves. Instead, JavaScript does it for us.

### **Role of the `this` Keyword**
- To refer to this newly created object, we use the `this` keyword inside the constructor function.
- The `this` keyword dynamically points to the object being created at that moment.
- It specifically points to the object in whose scope the `this` keyword is defined.
- Whatever properties or methods we define using `this` will directly belong to the new object being created.

### **Automatic Bond Between Object and Prototype**
- In earlier code, we manually created a bond between the object and its `__proto__`.
- With the `new` keyword, this bond is automatically established.
- The new object gets linked to the prototype of the constructor function without us writing any extra code.

#### Example 

```Javascript
// Constructor function to create a user object
function UserCreator(name, age) {
  this.name = name;
  this.age = age;
  // No need to manually return an object or link to functions
}

// Shared functions automatically linked through the prototype
UserCreator.prototype.incrementAge = function() {
  this.age++;
};

UserCreator.prototype.login = function() {
  console.log(`${this.name} logged in.`);
};

// Creating a new user using the 'new' keyword
const user1 = new UserCreator('John', 25);
user1.incrementAge(); // Automatically links to incrementAge function
user1.login(); // Automatically links to login function
console.log(user1.age); // 26
```