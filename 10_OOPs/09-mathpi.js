console.log(Math.PI);           // returns 3.14159265...

// say we want to change it

Math.PI = 5         // after logging this still returns 3.1415...


const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')    
// getOwnPropertyDescription - shows hidden properties of Objects

console.log(descripter);        // gives an entire Object with many key-values

const myNewObject = {
    name: 'Tabin',
    ID: '250',
    isAvailable: true,

    orderChai: function(){
        console.log('chai nahi bani');
    }
}

console.log(myNewObject);           // returns entire object
// are there any descripter properties for myNewObject? How do I set? Are they available?

console.log(Object.getOwnPropertyDescriptor(myNewObject));     // undefined
// myNewObject is an object not a property

console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'));
// returns description of the 'name' property with various key-value pairs

for (let[key, value] of Object.entries(myNewObject)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}       // returns entire key-value pairs of myNewObject except methods

// can we change these values of key-value pairs?
Object.defineProperty(myNewObject, 'name', {
    writable: false,        // now won't be able to edit value
    enumerable: false       // now won't be able to loop through the object
})

console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'));
// now returns updated key-value pairs

for (let[key, value] of Object.entries(myNewObject)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}       // returns all key-value pairs of myNewObject except 'name' property
        // where we disabled its enumerable property


// conclusion: we can modify objects, we can set their iteration to false and
//             not let them iterate through.
// So the answer to the question if we can change value of PI in Math object
// is clear now. We cannot change the value, because the property 'writable'
// is set to false in the descriptor of (Math, 'PI'). Also, we cannot change 
// the descriptor properties, because the configurable is also set to 'false'.