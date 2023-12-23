// while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}

let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}

// do-while

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10)
// even though 11 > 10, it still get logged to console
// do while is used when you want to log at least once, then you check the condition