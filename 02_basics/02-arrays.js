// merge two arrays

const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// --push
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// --spread operator
const allNewHeroes = [...dc_heroes, ...marvel_heroes];
// console.log(allNewHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArr = anotherArr.flat(2);  // can set depth to Infinity to flatten it to max depth, here max == 2 //
// console.log(realAnotherArr);

// --isArray
let name = "Tabin";
let bool = Array.isArray(name);
// console.log(bool);

// --from
const nameArray = Array.from(name);
// console.log(nameArray);

// --turning object values and keys into separate arrays
const obj = {myName: "Tabin", fatherName: "Tariq", motherName: "Abida", sisterName: "Taha"};

let arrayOfNames = Array.from(Object.values(obj));
// console.log(arrayOfNames);

let arrayOfKeys = Array.from(Object.keys(obj));
// console.log(arrayOfKeys);

// covert multiple variables into an array
let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));