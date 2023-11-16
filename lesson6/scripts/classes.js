// classes in javascript

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(saysWhat) {
        let birthYear = 2023 - this.age
        console.log(`I am ${this.name} and I am ${this.age} years old, and I say ${saysWhat}`);
        console.log(`I was born in ${birthYear}`)
    }
}

const animal = new Animal('Simba', 3);
animal.speak("Roarrrr");