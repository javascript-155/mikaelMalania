// string management methods in javascript

const sampleString = "This is a sample string";

// length
const sampleStringLength = sampleString.length;
console.log(sampleStringLength);

// toUpperCase and toLowerCase
const upperCaseString = sampleString.toUpperCase();
console.log(upperCaseString);
const lowerCaseString = sampleString.toLowerCase();
console.log(lowerCaseString);

// indexOf
const indexOfS = sampleString.indexOf("s");
console.log(indexOfS);

// lastIndexOf
const lastIndexOfS = sampleString.lastIndexOf("s");
console.log(lastIndexOfS);

// charAt
const charAt3 = sampleString.charAt(3);
console.log(charAt3);

// slice
const sliceString = sampleString.slice(3, 7);
console.log(sliceString);

// replace
const replaceString = sampleString.replace("sample", "new");
console.log(replaceString);
// replaceAll
const replaceAllString = sampleString.replaceAll("s", "S");
console.log(replaceAllString);

// split
const splitString = sampleString.split(" ");
console.log(splitString);

// array to string
const arrayToString = splitString.join(" ");
console.log(arrayToString);

// count occurence of specific char in string
console.log(sampleString.split("s"))
const countSoccurence = sampleString.split("s").length - 1;
console.log(countSoccurence);
