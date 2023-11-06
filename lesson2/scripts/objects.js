let person = {
    name: "John",
    age: 30,
    isMarried: true,
    children: [
        {
            name: "Luke",
            age: 5
        },
        {
            name: "George",
            age: 3
        },
        {
            name: "Mary",
            age: 1
        }
    ]
};

// console.log(person.children[2].name);

person.profession = "Developer";
person["hobbies"] = ["Reading", "Running", "Swimming"];
console.log(person);

delete person.age;

console.log(person);