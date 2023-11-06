// Functions in js

function sayHello() {
    return "Hello World!";
}

// console.log(sayHello());

// calculator function

function calculator(num1, num2, operator="+") {
    console.log(operator)
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

console.log(calculator(2, 3, "-"));

// function expression

let sayHello2 = function() {
    return "Hello World!";
}

let calculator2 = function(num1, num2, operator="+") {
    console.log(operator)
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

// arrow function

let sayHello3 = () => {
    return "Hello World!";
}

let calculator3 = (num1, num2, operator="+") => {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

// void function
// ისეთი ფუნქცია რომელიც return-ის მეშვეობით შედეგს არ აბრუნებს ეწოდება void ფუნქცია.
function sayHello4() {
    console.log("Hello World!");
}

let calculatorResult = calculator3(2, 3, "-");

sayHello4();   