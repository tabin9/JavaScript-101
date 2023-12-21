// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);  // returns the first value, if possible

let val2;
val2 = null ?? 10
console.log(val2);  // returns 10, since first value is null

let val3 = undefined ?? 15
console.log(val3);  // returns 15, since the first value
// is undefined

let val4 = null ?? 10 ?? 20
console.log(val4);  // returns 10, the first one possible