const userEmail = "tabin9@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// without comparison we were able to go in the 
// if condition. How? That's a truthy value, 
// it is assumed to be true. If userEmail = ""
// was empty string the condition is falsy

// falsy values:
// 1. Boolean false
// 2. 0, -0 (negative zero)
// 3. BigInt 0n
// 4. "" (empty strings)
// 5. null, undefined, Nan

// rest are truthy values, like:
// 1. "0"   (0 in a string)
// 2. "false" (false in a string)
// 3. " "   (space in a string)
// 4. []    (empty array)
// 5. {}    (empty object)
// 6. function(){}  (empty function)


// How to check if an array is empty?
const emptyArr = []
if (emptyArr.length === 0){
    console.log("Empty Array");
}
// check if the length of the array is 0


// How to check if an object is empty?
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
}
// How did this work?
// We learnt when we use Object keyword as we 
// did up there (Object.keys(object_name)), the 
// object turns into an array then we use the 
// length method in arrays to check if the length
// is 0 or not.