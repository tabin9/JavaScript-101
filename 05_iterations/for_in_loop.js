// for-in loops
// iterating objects

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

// printing keys of Object using for...in
for (const key in myObject) {
    console.log(key);       // prints all keys
}
// printing values of Object using for...in
for (const key in myObject) {
    console.log(myObject[key]);
}
// printing key value pairs of Object using for...in
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}


// can we use for-in on arrays?
const programming = ['js', 'rb', 'py', 'java', 'cpp'];

// for...in loops print keys of array
for (const key in programming) {
    console.log(key);   // print array keys: 0, 1, 2, 3, 4
}
// printing values of array using for...in
for (const key in programming) {
    console.log(programming[key]);
}

// this is the major difference between for...of and for...in
// using for...of we get values directly
// using for...in we get keys directly then use keys to find values


// for...in on maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key);// no output // maps not iterable in for-in loops
}


// Summary:
// Objects --> use for...in
// Arrays --> use for...of