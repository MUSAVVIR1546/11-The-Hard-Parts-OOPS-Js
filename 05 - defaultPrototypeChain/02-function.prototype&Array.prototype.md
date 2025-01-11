## Prototype Chain in JavaScript: Functions, Built-in Methods, and Inheritance

**Short Explanation**:  
In JavaScript, the prototype chain allows functions, objects, and arrays to inherit properties and methods from their prototype. If a method is not found in the current object, JS looks for it in the prototype chain, which ultimately leads to built-in methods like `toString`, `call`, `apply`, `bind`, etc.

---

In this lesson, one more time we learned about the prototype chain with functions and built-in methods. In the previous lesson, we learned how we can access `hasOwnProperty` from the prototype chain. In this lesson, we learned how JS searches for built-in methods like `toString`, `call`, `apply`, `bind`, and many more in the prototype chain.

Just like objects have a hidden property `__proto__`, arrays and functions also have the same hidden property. When we want to access an object method or any method (like in this example, `multiplyBy2.toString()`), JS first searches for this method in the main object, like `multiplyBy2`. If it doesn't find it there, JS searches the prototype chain until it finds it.

As I told you in the previous lesson, the prototype chain ends at `Object.prototype`, and similarly, the prototype of functions or arrays ends at `Function.prototype` or `Array.prototype`. If the method is not found in the prototype chain, JS looks for it in `Function.prototype`. This object contains all the built-in methods. In the end, JS finds the method we want, grabs it, and executes it to give us the result.

JS's prototype chain gives us the ability to inherit objects. This means if we create a `User` object and create many users from it (like `user1`, `paidUser`), then both `paidUser` and `user1` will have the functions of `User`, and we can add more functionalities to them.

### Example:-

```javascript
function multiplyByTwo() {
  return this * 2;
}

// Calling toString method from the prototype
console.log(multiplyByTwo.toString()); // [Function: multiplyByTwo]
// Explanation: Calling the 'toString' method, which is inherited from Function.prototype

// Prototype chain ke through methods access karna
console.log(multiplyByTwo.hasOwnProperty('toString')); // false
// Explanation: Checking if 'toString' is a direct property of 'multiplyByTwo'. It's not, so it returns false.
// 'toString' is inherited through the prototype chain, not defined directly on 'multiplyByTwo'.
```