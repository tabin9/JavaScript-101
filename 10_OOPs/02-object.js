function mulByFive (num) {
    return num * 5
}

mulByFive.power = 2

console.log(mulByFive(5));          // 25
console.log(mulByFive.power);       // 2
console.log(mulByFive.prototype);   // {}

// everything in JS is a Object
// we can even handle functions as objects if we want to
// why? Prototypal inheritance. Everything goes to object


// constructor function
function createUser (username, score) {
    this.username = username
    this.score = score
}

// injecting a prototype into an function (since function can also be an object)
// through prototype we inject increment function to createUser function
createUser.prototype.increment = function () {
    this.score++
}
// this => jis ne bi bulaya hai uske pass jao

// through prototype, we inject printMe function to createUser function
createUser.prototype.printMe = function () {
    console.log(`ID is ${this.score}`);
}
// this => jis ne bi bulaya hai uske pass jao

const tab = new createUser('Tabin', 99)     // creates a new user
const tar = new createUser('Tariq', 250)    // creates a new user

tab.increment()     // increment 99 to 100
tab.printMe()       // prints tab user

/* 
'new' keyword functionality:

1. A new object is created: The new keyword initiates the creation of new
    javascript object.

2. A prototype is linked: The newly created object gets linked to the 
    prototype property of the constructor function. This means that it has 
    access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the 
    specified arguments and this is bound to the newly created Object. If no
    explicit return value is specified from the constructor, JavaScript assumes
    this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, 
    if it doesn't return a non-primitive value (object, array, function, etc),
    the newly created object is returned

*/