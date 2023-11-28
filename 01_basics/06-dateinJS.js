// ++ Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// ++ customizing our own date // 
let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

let myNewCreatedDate = new Date(2023, 0, 23, 5, 3, 15);
// console.log(myNewCreatedDate.toLocaleString());

let myNewCreatedDate3 = new Date("2023-01-15");
let myNewCreatedDate2 = new Date("01-15-2023");

// ++ getting month and day from a give date
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// ++++++ Time Stamps ++++++ //
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }));
// console.log(newDate.toLocaleString('default', {
//     weekday: "short",
// }));
console.log(newDate.toLocaleString('default', {
    weekday: "narrow",
    hour: "2-digit",
    minute: "numeric"
}));