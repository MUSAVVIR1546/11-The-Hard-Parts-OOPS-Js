class QuizGame {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    userDetail() {
        return `The user name is ${this.name} and user score is ${this.score}.`
    }
};

const user1 = new QuizGame('Vishwas', 9);
user1.increment();
console.log(user1.score);
console.log(user1.userDetail());