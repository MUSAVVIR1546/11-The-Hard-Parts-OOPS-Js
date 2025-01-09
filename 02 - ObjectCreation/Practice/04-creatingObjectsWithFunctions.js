function userTemplate(name, score) {
    const newUser = {};
    newUser.name = name; // Attach key (name) and name value is userTemplate name.
    newUser.score = score; // // Attach key (score) and score value is userTemplate score.
    newUser.increment = function() { // // Attach a method call increment who increment the score by +1.
        this.score++;
    };
    return newUser; // Return newUser
}

const user1 = userTemplate('Abdul', 9); // Now userTemplate will return newUser and newUser have 2 keys and values {name : 'Abdul', score : 9}.

console.log(user1.name);
console.log(user1.score);

user1.increment();
console.log(user1.score);