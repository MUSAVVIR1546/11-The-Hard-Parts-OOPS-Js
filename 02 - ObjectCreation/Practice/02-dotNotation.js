const user = {};

user.name = 'Abdul'; // Using dot notation for attach name.
user.score = 9; // Using dot notation for attach score.

user.increment = function() { // Using dot notation for attach methods.
    this.score += 1;
}

user.increment();
console.log(user.score); // Using dot notation for access properties.
console.log(user.name); // Using dot notation for access properties.