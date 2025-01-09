Do you know in JavaScript, functions are saved as a **function-object combo**?  
This means that with a function, there is both a callable function and an object.  
This object is used to store additional properties without affecting the callable function's behavior.  

```javascript
function multiplyBy2(num) {
  return num * 2;
}

// Adding a property to the function's object part
multiplyBy2.description = "This function multiplies a number by 2";

console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy2.description); // Output: This function multiplies a number by 2
```

With every function, there is a hidden property called **`prototype`**.  
This `prototype` is also a regular object that stores additional properties.  
When we create a new object through the **`new` keyword**, the function's `prototype` is automatically set for the newly created object.  
This is used for storing additional methods and properties that every object can access.  

```javascript
function User(name) {
  this.name = name;
}

// Adding a method to the prototype
User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

// Creating a new object
const user1 = new User("Abdul");
console.log(user1.greet()); // Output: Hello, Abdul
```

### **Main Points**
1. In JavaScript, functions are a combination of callable functions and objects.  
2. Every function has a hidden property called **`prototype`**, which is used for inheritance.


