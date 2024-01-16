/*
Challenge: Build a property (truelength) which gets the actual length 
of string without the extra spaces. Will have the same functionality of 
.trim().length
*/

let myName = 'Tabin     '
let myLastName = 'Tariq    '

console.log(myName.truelength);     // should return 10, explained below
console.log(myName.trim().length);  // returns 10

// ### CHALLENGE ### //
let anotherUsername = 'Tabin    '
String.prototype.truelength = function() {
    // console.log(`${this}`);     // returns Tabin
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"Tabintt  ".truelength()

let myHeroes = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// injecting prototype to Object
Object.prototype.tabin = function(){
    console.log(`Tabin is present in all objects`);
}   // we add a new prototype to all Objects (object literals, arrays, etc)

heroPower.tabin()  // works for object literals
myHeroes.tabin()   // works for arrays as well (since Arrays are also an object)

// inject prototype to Array
Array.prototype.heyTabin = function(){
    console.log(`Hey Tabin in Array`);
}
myHeroes.heyTabin()     // returns Hey Tabin
// heroPower.heyTabin()    // Won't work as the prototype was injected in Array


/*
Inheritance
*/
const user = {
    name: 'Tabin',
    email: 'Tabin@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
// link objects using a property (__proto__)
Teacher.__proto__ = user

// modern syntax to link objects
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(Teacher.email);     // returns email of user using Teacher object