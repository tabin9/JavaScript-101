// ######### 1. object literal ########
const useer = {
    username: 'Tabin',
    loginCount: 8,
    signedIn : true,

    getUserDetails: function(){
        console.log('Got user details from DB');
        // console.log(`username: ${username}`)    // returns error
        console.log(`username: ${this.username}`);  // returns Tabin
        console.log(this);      // returns entire 'user' object
    }
}
console.log(useer.username);
console.log(useer.getUserDetails());
// Objects are collection of properties and methods
// each pair of data is called key-value pair or properties
// 'this' is used to know the current context, will learn more in next file

console.log(this);      // global context in node is {}
// global context in browser => window object



// ######## 2. constructor function and 'new' keyword ##########
// say we want more users but with same key-value pairs
// we can't keep creating new object everytime we add a user
// it's best to use a constructor function

const promiseOne = new Promise()
const date = new Date()
// new keyword is basically a constructor function
// new keyword creates a new context of a object literal
// 'new' is used to create a new context

// constructor function for user
function user(username, loginCount, isLoggedIn){
    this.username = username    // left - variable and right - value passed in
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // this is empty in node, we can add variable => this.variable_name

    return this 
}
// new keyword
const _userOne = user('Tabin', 7, true)
const _userTwo = user('Tariq', 5, false)
console.log(userOne);   // returns Tariq, 5, false
// using it this way will overwrite userOne, that's why we need 'new' keyword

const userOne = new user('Tabin', 7, true)
const userTwo = new user('Tariq', 5, false)
console.log(userOne);   // returns Tabin, 7, true
// whenever we use 'new' a new object is created (called instance)

// Can we access the constructor function
console.log(userOne.constructor);   // returns reference to itself