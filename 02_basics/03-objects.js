// singleton - NOT declared as literals
// singleton - declared using constructors
// singleton - object.create

// object literals
const jsUser = {
    name: "Tabin",
    "full name": "Tabin Tariq",
    age: "25",
    location: "Srinagar",
    email: "TabinT9@gmail.com",
    lastLoginDays: ["Monday", "Friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); //CANNOT access full name using dot notation

// add more key-value pairs 
jsUser.device_type = "Windows";

// adding function to the jsUser object 
jsUser.greetingFunc1 = function() {
    console.log("Hello JS user");
}
// using this keyword to access the keys in the current object
jsUser.greetingFunc2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

jsUser.greetingFunc1();
jsUser.greetingFunc2();

// change/overwrite values in objects
jsUser.email = "emailBeforeFreeze@gmail.com";

// Object.freeze
Object.freeze(jsUser);   // won't be able to make any changes to the object now

jsUser.email = "emailAfterFreeze@gmail.com";

console.log(jsUser);

// decalaring Symbol and using it as key objects
const mySym1 = Symbol("key1");   // declaring a symbol
const mySym2 = Symbol("key2");
const symAsKey = {
    [mySym1]: "myKey1",     // symbol1 as key
    [mySym2]: "myKey2"      // symbol2 as key
}
console.log(symAsKey);
console.log(symAsKey[mySym1]); // the only way to access symbol-key
console.log(symAsKey[mySym2]); // accessing the value of symbol-key