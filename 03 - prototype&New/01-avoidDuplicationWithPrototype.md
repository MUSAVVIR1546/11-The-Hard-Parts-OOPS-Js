## Avoid Duplication with Prototype.
Creating a new object for every user is a waste of memory. To avoid this, we have a solution called **prototype**. With prototypes, we can share a function across every user, preventing duplication.  

Instead of attaching a function to each user object, we can store the functionality in a prototype object and link the user object to this prototype. JavaScript’s prototype chain ensures that if an object doesn't have a particular property or functionality, JavaScript will check the prototype for it.  

To make this link, we use `Object.create()`. This approach is memory efficient and bundles the functionality and data together. This also explains the mechanism behind the `new` keyword.

In this example, we create a `functionStore` variable that holds the `increment` function.  
Then, we create another constant `user1`, and use `Object.create()` to link it to the `functionStore` prototype. On the second line, we call `user1.increment()`, which means it looks for the `increment` function in the `functionStore` prototype. Finally, we print the result using `console.log()`.


```Javascript
const functionStore = {
  increment: function () {
    this.score++;
  }
};

const user1 = Object.create(functionStore); // functionStore se link
user1.name = "Alice";
user1.score = 0;

user1.increment(); // functionStore se increment ko access karo
console.log(user1.score); // 1
```
