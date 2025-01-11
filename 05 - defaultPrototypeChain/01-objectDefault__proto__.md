## "Understanding the hasOwnProperty Method and Prototype Chain in JavaScript".

In this lesson, we will discuss the **hasOwnProperty** method in objects.

When we search for an object's key using **hasOwnProperty**, JavaScript first looks for the **hasOwnProperty** method in the main object (like `obj` in my example). If the method is not found in the main object, JavaScript will then check the hidden property called **`__proto__`** of the object. If it still isn't found, JavaScript will continue looking up the prototype chain.

Each object is linked to its **parent prototype** through `__proto__`. The last prototype in this chain is **Object.prototype**, which has the **hasOwnProperty** method.

If JavaScript doesn't find the property in the entire prototype chain, it checks the last object, which has this method in its prototype. Once found, JavaScript grabs the method and returns the result.

Finally, **hasOwnProperty** checks our searched property (like `num`) and returns it.

### Example:-
```javascript
const obj = { num: 3 };

// Step 1: First, check for hasOwnProperty method on obj
console.log(obj.hasOwnProperty('num')); // Output: true, because 'num' is a direct property of obj

const anotherObj = Object.create(obj); // Create a new object, prototype of obj

// Step 2: Now check for 'hasOwnProperty' on anotherObj
console.log(anotherObj.hasOwnProperty('num')); // Output: false, because 'num' is not directly in anotherObj

// But 'hasOwnProperty' method is still available through the prototype chain!
```
