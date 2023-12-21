// if statement

// comparisons: ==, ===, <, >, <=, >=, !=, &&, ||  
if (true) {
    // code executes
}
if (false) {
    // code never executes
}

if (condition) {
    //code
} else if (condition) {
    //code
} else if (condition) {
    //code
} else {
    //code
}

// terniary Operator
// condition ? expIfTrue : expIfFalse
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`greater than 80`);