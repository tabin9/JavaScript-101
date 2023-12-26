// REDUCE
// mainly used for shopping carts
// add the total
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

// the ,0 in the end is the initial value given to the
// accuulator. initial value can be any number you want.

// reduce in arrow func
const newTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(newTotal);


// shopping cart example, we have to add the prices:
const shoppingCart = [
    {
        itemName: 'JS course',
        price: 2999
    },
    {
        itemName: 'PY course',
        price: 999
    },
    {
        itemName: 'Mobile Dev course',
        price: 5999
    },
    {
        itemName: 'Data Science course',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(priceToPay);    // returns total price in the cart --> 22996

// find max value in the array
const numbers = [10, 25, 8, 30, 15];
const maxNum = numbers.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity)
// we set the initial value to leastest number --> -Infinity (nothing is less than that) then compare
// it with the currentValue in the array, if currentVal > maxValue (accumulator),
// then maxValue = currentVal. Loop end with the max value stored in maxValue, which is returned.
console.log(maxNum);


// find min value in the array
const minNum = numbers.reduce((minValue, currentValue) => Math.min(minValue, currentValue), Infinity)
console.log(minNum);