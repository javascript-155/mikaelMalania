// Ternary operators are a shorthand way of writing if/else statements.

isMember = true;
if (isMember) {
    console.log("$2.00 for a ticket")
} else if (!isMember) {
    console.log("$10.00 for a ticket")
}

console.log(isMember ? "$2.00 for a ticket" : "$10.00 for a ticket")

// nested ternary operators

console.log(isMember ? "$2.00 for a ticket" : (isMember === false ? "$10.00 for a ticket" : "Please enter a valid membership status"))