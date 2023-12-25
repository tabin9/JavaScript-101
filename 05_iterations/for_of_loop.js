// all these loops are array specific

// for-of loops

emptyArrStr =  ["", "", ""]     // array of strings
emptyArrObj =  [{}, {}, {}]     // array of objects

// for...of on Arrays
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// num is just like index of our array 'arr'
// for-of loop can be used on any kind (arrays, strings, maps, etc)

// for-of on strings
const greetings = 'Hello World';
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// outputs each char in greetings


// Maps --> Key value pairs
// key value pairs in maps are unique and order of insertion preserved

// Difference between Objects and Maps:
// 1. In objects, keys are restricted to strings or symbols. Any 
// other type used as a key gets converted to a string.
// 2. Maps allow any data type(including objects and functions)as keys
// Objects do not guarantee the preservation of order of insertion
// while as Maps do
// 4. Objects are not iterable, while maps are. As we see above 
// using for....of loop objects throw an error when iterated
// There are other ways to iterate objects, will discuss in future
const map = new Map()
map.set('IN', 'India')      // adding key, value pair in map
map.set('USA', 'United States of America')
map.set('FR', 'France')
console.log(map);

for (const country of map) {
    console.log(country);   // returns 3 arrays of the map for each
}

// way to print keys and values dy destructuring the array
for (const [country_id, country_name] of map) {
    console.log(country_id, ':', country_name);
}

// for-of loop on objects
const myObj = {
    game1: 'NFS',
    game2: 'GTA',
    game3: 'PUBG'
}

for (const game of myObj) {
    console.log(myObj)  // error --> for-of don't work on Objects
}
for (const [game, name] of myObj) {
    console.log(game, ':', name);   // error
}