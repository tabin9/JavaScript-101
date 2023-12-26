// more on forEach
// forEach does not return a value
// filter creates a new array of elements which meet the
// certain condition passed in the callback function

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const values = coding.forEach(function (item) {
    return item;
})

console.log(values);    // returns undefined
// forEach does not return value


// Solution to this return problem
// FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => {
    return num > 4 
    // remember to use return keyword --> (explicit arrow function) 
})
console.log(newNums1);   // returns [5, 6, 7, 8, 9, 10]
// how filter works?
// filter has a callback function where each value is accessed
// then there's a condition --> if condition is met the values 
// are returned


// using forEach to returns values (the HARD way)
const newNums2 = []     // an empty array
newNums1.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})
console.log(newNums2);  // returns [5, 6, 7, 8, 9, 10]


// more on Filter
// array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// user needs books which are of 'History' genre
let userBooks = books.filter( (bk) => {
    return bk.genre === 'History'
})
console.log(`Books with History genre: `);
console.log(userBooks);

// user wants books which are published after 2000
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995
})
console.log(`Books with publishing date after 1995: `)
console.log(userBooks);

// user wants a book which was published after 
// 1995 and is of "History' genre
userBooks = books.filter( (bk) => {
    return (bk.publish >= 1995 && bk.genre === 'History')
})
console.log(`Books with publishing date after 1995 and of History genre: `)
console.log(userBooks);