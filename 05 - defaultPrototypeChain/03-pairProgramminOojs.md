### Pair Programming OOJS.
Will Sentance introduced pair programming to reinforce understanding of object-oriented programming concepts. He suggested two platforms for practicing:  

1. **csx.codesmith.io**: Offers challenges with a "Check my Answer" feature that runs tests on your code.  
2. **csbin.io/oop**: Provides similar challenges but requires debugging via console logs.  

Participants were asked to:  
- Self-assess their knowledge using a score from 1 to 9.  
- Pair up based on experience levels.  

Online participants were guided on how to pair program by creating shared live coding sessions on **csbin.io**.  

---

**Example Challenge:**  
Write a constructor function and explore the prototype chain.  

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

// Creating an instance
const john = new Person("John");

// Testing the prototype method
console.log(john.greet()); // Output: Hello, my name is John
```
