// for...each loop
// we will use this the most in JS
// for each is an array method

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// forEach using regular function
// call back function does NOT have a name
coding.forEach(function (item) {
    console.log(item);
})

// forEach using arrow function
coding.forEach( (val) => {
    console.log(val)
})

// forEach: passing in a function reference
function printMe(item){
    console.log((item));
}
coding.forEach(printMe);


// forEach has other things stored in it
// the value, the index and the array itself
// arrayName.forEach(callbackfn: value, index, array)
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


// array of Objects and use of forEach
const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'JS'
    },
    {
        languageName: 'Java',
        languageFileName: 'Java'
    },
    {
        languageName: 'Python',
        languageFileName: 'PY'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName); 
})