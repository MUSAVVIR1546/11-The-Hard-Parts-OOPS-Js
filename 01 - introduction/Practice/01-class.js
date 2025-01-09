class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} makes a sound ${this.sound}.`);
    }
};

const dog = new Animal('Dog', 'Bark');
const hurain = new Animal('Hurain', 'Meow');
hurain.makeSound();
dog.makeSound();