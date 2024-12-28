# Encapsulation.
If we want a quiz game or anything like that, we have to store users' data in an object and define some functions to handle the game. Instead of this, we can create a class named `QuizGame` or something similar. In this class, we can bundle all the data and methods together. This way, we don't have to worry about finding them in different places. This process is called **encapsulation**.

### Example
**Basic Examples**
**Without Class (Using Objects)**

```
const user1 = {
  name: "Phil",
  score: 4,
  incrementScore: function () {
    this.score++;
  },
};

user1.incrementScore();
console.log(user1.score); // Output: 5

```

**With Class (Better Approach)**
```
class QuizGame {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score++;
  }
}

const user1 = new QuizGame("Phil", 4);
user1.incrementScore();
console.log(user1.score); // Output: 5

```