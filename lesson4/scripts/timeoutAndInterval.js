// setTimeout and setInterval

// setTimeout(() => {
//     console.log("This is a delayed message")
// }, 3000)

// console.log("This is a message that will be printed immediately");

let counter = 0;

let intervalId = setInterval(() => {
    counter++;
    console.log(`Executed every 2 seconds count: ${counter}`);

    if (counter === 5) {
        clearInterval(intervalId);
    }
}, 2000);