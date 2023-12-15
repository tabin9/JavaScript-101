// functions

// num1 and num2 here are parametes
function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}

// executing functions(with params) with no args return NaN
addTwoNums();

// 3, 4 are arguments
addTwoNums(3, 4);       // returns 7
addTwoNums(3, '4');     // returns 34
addTwoNums(3, 'a');     // returns 3a
addTwoNums(3, null);    // returns 3


function mulTwoNums(num1, num2) {
    let result = num1 * num2;
    return result;
    console.log("Check if this executes after return");
}
// code after return won't execute

const result = mulTwoNums(4, 4);
console.log("Result: ", result);    //returns 16

//executing function with no args returns NaN
const learn = mulTwoNums();
console.log(learn); // returns NaN

// another function
function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Tabin"));
// returns Tabin just logged in

console.log(loginUserMessage(""));
// returns "empty_space" just logged in

console.log(loginUserMessage());
// returns undefined just loggen in

// ++++++                   ++++++ //
// now there's a case in shopping carts where we don't know how many items the user will add, but need to add the price of the itmes in the cart
// similarly, sometimes we don't know the number of parameters
// to solve this we use REST OPERATOR (same denotion as spread operator) we'll learn more in future
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); // returns an array

// another case where we use more variables with ...num1
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));// returns [500, 2000], 200 is in val1 and 400 is in val2



// ++++ Passing in objects to a function ++++ //
const user = {
    username: "Tabin",
    id: 199
};
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`)    // this is how we access the username and id of the object here
};
handleObject(user)  // execute the function with user as its arg

// can also directly pass in an object in the handleObject function
handleObject({
    username: "Tariq",
    id: 200
});


// ++++ Passing in Arrays in a function ++++ //
const myNewArray = [200, 300, 600, 400];

function returnSecondValue (get_array) {
    return get_array[1];
};
console.log(returnSecondValue(myNewArray)); // returns 300

// similar to objects, we can pass arrays directly in the function
console.log(returnSecondValue([100, 200, 800, 1000])); // returns 200