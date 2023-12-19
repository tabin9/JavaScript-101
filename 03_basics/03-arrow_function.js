// ++ THIS keyword ++ //

const user = {
    username: 'Tabin',
    id: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        // this keyword is used to let the compiler 
        // know we're referring to the current 
        // context -> MEANING this block scope
        console.log(this);  // cuurent context;
                            // returns the entire
                            // user object
    }
}

user.welcomeMessage();      
user.username = 'Taha';
user.welcomeMessage();

// ++ logging this in a program --> empty object
console.log(this)   // --> current context is empty
                    // returns an empty object {}
// using console.log(this) in browser we get window{...}
// In node.js, the global variable is the 'global object'
// in browser, the global variable is the 'window object'

// ++ logging this inside a function --> various values //
function chai() {
    console.log(this);
}
chai();     // returns gloabl object and its various values

// ++ cannot use THIS inside a function as we used 
// it in case objects
function chai2() {
    let username = 'Tabin'
    console.log(this.username);
}
chai2();     // returns undefined


// ++++ This keyword in Arrow Functions ++++ //
const regular_function = function() {
    let username = 'Tabin'
    console.log(this.username);
}
regular_function();     // returns undefined

const arrow_function = () => {
    let username = 'Tabin'
    console.log(this.username);
}
arrow_function();       // returns undefined

const arrow_function1 = () => {
    let username = 'Tabin'
    console.log(this);
}
arrow_function1();   // returns empty object {}
//  In arrow functions, the behavior of the 'this' keyword 
// differs from that in regular functions. Arrow functions
// do not have their own this context but instead inherit
// this from the surrounding context (mostly Global context)


// +++ Arrow Functions Syntax +++ //
// Basic Arrow Function (Explicit Return Type)
// Curly Braces then type return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));    // returns 7

// Implicit Return Type
// No curly braces and no return
const mulTwo = (num1, num2) => num1 + num2;

// OR can be in regular braces
const divideTwo = (num1, num2) => (num1 / num2);
// why use regular braces? 
// say we want to return an Object:
const return_obj = (num1, num2) => ({username: 'Tabin'})
console.log(return_obj(3, 4));      // reurns {username: 'Tabin}