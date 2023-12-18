// Global and Local Scopes

// ++++     let, const and var  ++++ //
let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
// var is a classic way to declare variables
// but then why did we introduce let and const?
// var's are not block scoped, we needed something 
// which would act as block scope, both let and 
// const work as block scope

if (true) {
    let d = 40;
    const e = 50;
    var f = 60;
}
// console.log(d);     // returns error (d not defined)
// console.log(e);     // returns error (e not defined)
// console.log(f);     // returns 60

// var can be redeclared and latest initialization
// overwrites the previous initialization (1 of the
// reason we don't use var anymore)
var z = 300;
z = 30;

console.log(z);     // returns 30


// +++++ Nested Scopes, Closure(overview) +++++ //

// inner function is able to access the variables in the
// outer function -> Lexical Scope
function one() {
    const username = 'Tabin';

    function two() {
        const website = 'YouTube';
        console.log(username);
    }
    // console.log(website);   // error -> out of scope

    two();
}

one();      // iff one is executed then only two is 
            // executed

// ++++++ Some ways to define functions ++++++ //

// 1. basic function.
// in basic functions we can call function before 
// function declaration
console.log(addOne(5)); // no error here
function addOne(num) {
    return num + 1;
}

// 2. function as expression (or as variable).
// functions written as variables CAN NOT be 
// called before function declaration.
console.log(addTwo(5)); // error -> HOISTING
const addTwo = function(num) {
    return num + 2;
}