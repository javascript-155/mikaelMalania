// diff between == and ===

let age = 18;

// if (age == "18") {
//     console.log("You can vote!");
// }

let firstName = "John";

if (firstName == 18 ) {
    console.log("Hello John!");
}

// >=, <=

if (age >= 18) {
    console.log("You can vote!");
} else if (age < 18) {
    console.log("You can't vote yet.");
} else {
    console.log("Please enter a valid age.");
};

// &&, ||

let shopIsOpen = true;
let niniIsHere = true;
let whiteBreadIsAvailable = true;

if (shopIsOpen && niniIsHere && whiteBreadIsAvailable) {
    console.log("I'll buy some bread.");
} else {
    console.log("I'll go to another shop.");
}

let lesson1Learned = true;
let lesson2Learned = false;
let lesson3Learned = true;

if (lesson1Learned || lesson2Learned || lesson3Learned) {
    console.log("I can go to the next level.");
} else {
    console.log("I need to practice more.");
}

// ! (not)

let isRaining = true;

if (!isRaining) {
    console.log("I'll go for a walk.");
} else {
    console.log("I'll stay home.");
}

if (isRaining != true) {
    console.log("I'll go for a walk.");
} else {
    console.log("I'll stay home.");
}