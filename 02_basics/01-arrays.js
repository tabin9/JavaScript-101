// ++ Declaring Arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Superman", "Batman", "Spiderman"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myHeroes[2]);

// ++ Array methods

// --push
const myArr3 = [0, 1, 2, 3, 4, 5];
myArr3.push(6);
// console.log(myArr3);

// --pop
myArr3.pop();
// console.log(myArr3);

// --unshift
myArr3.unshift(6);
// console.log(myArr3);

// --shift
myArr3.shift();
// console.log(myArr3);

// --includes and indexOf
// console.log(myArr3.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr3.indexOf(3));

// --join()
const newArr = myArr3.join();
// console.log(myArr3);
// console.log(newArr);
// console.log(typeof newArr);

// --slice and splice
console.log("A", myArr3);