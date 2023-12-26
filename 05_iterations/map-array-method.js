// MAP method in arrays
// similar to forEach and filter, maps also have a 
// callback function and the same 3 params: value,
// index and array itself
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// add 10 to each value in myNums
let newNums = myNums.map( (num) => {
    return num + 10
})
console.log(newNums);


// do this using forEach 
let addNums = []
myNums.forEach( (num) => {
    addNums.push(num+10)
})
console.log(addNums);


// CHAINING --> using multiple methods at a time
let newNums1 = myNums
            .map((num) => num * 10)
            .map((num) => num + 1) // result of 1st method passed to 2nd method
            .filter((num) => num >= 40)

console.log(`New array after chaining: `);
console.log(newNums1);


// filter and map return values unlike forEach
// The filter() method creates a new array containing elements 
// that pass a certain condition specified by a provided callback function.
// The map() method creates a new array by transforming each element in 
// an existing array using a provided callback function.

// NOTE:
// Both filter() and map() do not modify the original array. 
// They create new arrays based on the specified conditions or transformations.