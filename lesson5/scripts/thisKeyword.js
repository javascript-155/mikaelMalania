// this keyword
// this keyword refers to the object that is executing the current function

const person = {
    name: "John",
    birthYear: 1990,
    calcAge: function () {
        return 2023 - this.birthYear;
    }
};

console.log(`Person with the name of ${person.name} is ${person.calcAge()} years old.`);