// class inheritance

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`I am ${this.name}`)
    }
}

// Derived class (inherits from Animal) // მემკვიდრეობითობით მიიღებს Animal-დან მონაცემებს

class Dog extends Animal {
    constructor(name, breed) {
        // საწყისი კლასის(Animal) კონსტრუქტორის გამოძახება
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }

    // Animal-კლასში არსებული speak მეთოდის თავზე გადაწერა
    speak() {
        console.log(`I am ${this.name} the ${this.breed}`);
    }
}

// creating instances
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog('Rex', 'Golden Retriever');

genericAnimal.speak();
myDog.speak();
myDog.bark();
