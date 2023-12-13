// singleton object
// objects using constructors

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Chloe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// -- objects in objects
const regularUser = {
    email: "some@email.com",
    fullName: {
        userFullName: {
            firstName: "Tabin",
            lastName: "Tariq"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {4: 'a', 5: 'b', 6: 'c'};
const obj3 = {7: 'a', 8: 'b', 9: 'c'};

// -- combining 2 objects using .assign
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4)

// --combining 2 objects using spread operator
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);

// -- values which come from DB
// -- they're usually an array of objects
const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail@com"
    },
    {
        id: 3,
        email: "b@gmail@com"
    },
    {
        id: 4,
        email: "i@gmail@com"
    },
    {
        id: 5,
        email: "n@gmail@com"
    }
];

users[1].email //accessing the email of first object

// --retrieving all keys of an objects as an array
console.log(Object.keys(tinderUser));

// --retrieving all values of an objects as an array
console.log(Object.values(tinderUser));

// --trun key-value pair as an array in an array 
console.log(Object.entries(tinderUser));

// --while finding values in objects, sometimes
// the value we are looking for does not exist
// there is a possibility of crash. To avoid:
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

//                  ######               //
// --destructuring in Objects
const course = {
    courseName: 'JavaScript',
    price: '$100',
    courseInstructor: 'Tabin'
}

console.log(course.courseInstructor);

// using dot notation again and again can be hectic sometimes,
// we can use the following to ease our lives
const {courseInstructor} = course;
console.log(courseInstructor);

// we can further minimize the name if we wish
const {courseInstructor: instructor} = course;
console.log(instructor);
// this is how we DESTRUCTURE Objects

//                  ######                 //
// --APIs intro:
// hand over our work to someone else
// API values are in JSON
// JSON can be in the format of an Object or an array 
// but without a name; ignore the errors for now

{
    'name': 'Tabin',
    'courseName': 'JavaScript',
    'price': 'Free'
}

[
    {},
    {},
    {}
]

// randomuser me API
// JSON formater - Copy and Paste to beautify and understand