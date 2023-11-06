// switch cases
let isDoorOpened = prompt("Is the door opened?");

switch (isDoorOpened) {
    case "yes":
        alert("I'll go out.");
        break;
    case "no":
        alert("I'll stay home.");
        break;
    default:
        alert("Please answer yes or no.");
        break;
}

let guessTheNumber = prompt("Guess the number:");
let numbers = [1, 2, 5, 8, 9];

switch (numbers.includes(Number(guessTheNumber))) {
    case true:
        alert("You guessed the number!");
        break;
    case false:
        alert("You didn't guess the number :(");
        break;
    default:
        alert("Please enter a number.");
        break;
}

