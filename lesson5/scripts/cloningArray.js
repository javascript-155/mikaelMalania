// array cloning methods

let originalArray = ['apple', 'orange', 'banana', 'mango', 'grapes'];
let copiedArray1 = originalArray.slice();
copiedArray1.pop();

let badCopy = originalArray;

badCopy.pop();

// console.log(originalArray);
// console.log(copiedArray1);

let copiedArray2 = [...originalArray];

// ამოწმებს კონკრეტული მონაცემი მასვია თუ არა
let isDataArray = Array.isArray(originalArray);

let copiedArray3 = Array.from(originalArray);

let copiedArray4 = [].concat(originalArray);

console.log(copiedArray2);  
console.log(copiedArray3);
console.log(copiedArray4);



