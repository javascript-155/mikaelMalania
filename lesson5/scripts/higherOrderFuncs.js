// high order functions

// filter method
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filteredArray = [];

for (let number1 of arrayOfNumbers) {
  if (number1 > 5) {
    filteredArray.push(number1);
}
}
// console.log(filteredArray);

let moreThanFive = arrayOfNumbers.filter((number) => number > 5);
let moreThanFiveV2 = arrayOfNumbers.filter(function (number) {
    return number > 5;
});

// console.log(moreThanFive, moreThanFiveV2);

// map method
let multipliedArray = arrayOfNumbers.map((number) => number * 2);
let multipliedArrayV2 = arrayOfNumbers.map(function (number) {
    return number * 2;
});

// console.log(multipliedArray);
// console.log(multipliedArrayV2);

let sumOfNumbers = arrayOfNumbers.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue});
let sumOfNumbersV2 = arrayOfNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

// forEach method
arrayOfNumbers.forEach((number) => {
    if (number > 5) {
        console.log(number);
    }
});

console.log("==========");

// analog of
for (let number of arrayOfNumbers) {
    // console.log(number);
    if (number > 5) {
        console.log(number);
    }
}