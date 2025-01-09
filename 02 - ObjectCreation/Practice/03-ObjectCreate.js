const userTemplate = {
    increment: function() {
        this.score++;
    }
}

const user1 = Object.create(userTemplate); // Now this connect to the userTemplate means stored in prototype.
user1.name = "Julia";
user1.score = 9;

console.log(user1.name);
console.log(user1.score);

user1.increment();
console.log(user1.score);