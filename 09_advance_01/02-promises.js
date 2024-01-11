// promise in an Object
// promises can be in 3 states

// // mostly promises are mostly consumed
// fetch('http://something.com').then().catch().finally()

// two parts of promises - consumption and creation

// CREATING:
// we create Promise using 'new' keyword 
const promiseOne = new Promise((resolve, reject) => {
    // Do an Async Tasks
        // DB calls, cryptography, network call
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve()   // need to call this to connect with .then
    }, 1000)
})

// consumption
promiseOne.then(function(){
    console.log(`Promise Consumed`);
})
// .then is connected with resolve --> need to do it manually
// call resolve method when creating a promise


// another way to do the same
// here we didn't store Promise in a variable
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log(`Async task 2`);
        resolve()
    }, 1000)
}).then(function(){
    console.log(`Async 2 resolved`);
})


// third promise -> passing data using resolve to .then()
// creation:
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Tabin', email: 'tabintariq9@gmail.com'})
        // data passed in resolve parameters, mostly an object
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);  // returns entire object in resolve
})
// values are passed from creation to consumption


// fourth promise --> use of reject (catching error), finally() and chaining
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false    // to check if request is resolved or rejected
        if (!error) {
            resolve({username: 'Tabin', password: '123'})
        } else {
            reject(`ERROR: Something went wrong`)
        }
    }, 1000)
})
// promiseFour.then().catch()  // then for values, catch for catching errors

// we can use as many .then()'s => 'chaining'
// say we want only the username from promiseFour
// const user = promiseFour.then()  // NOTE: cannot set to a variable
// to solve this issue we use chaining
promiseFour.then((user) => {    
    console.log(user)
    return user.username
}).then((username) => {     // 2nd .then() has the value returned in 1st .then()
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))
// finally is kind of a default it displays a message everytime


// promiseFive => use of async-await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:'JavaScript', password: '123'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// there is a alternative to .then => async-await
// async-await waits for a bit then consumes
// async-await does not give errors directly
// the best way to handle errors is to wrap it in try-catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// consume API using async-await
// why use await? some tasks take some time, that's why we use await
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()      // convert response from string
        // to json, remember to use await. Why await?
        // many things take time, similarly converting to json takes time. 
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}
getAllUsers()


// same function using .then().catch()
fetch('https://api.github.com/users/tabin9')
.then((response) => {
    return response.json()
}).then((data) => {       // 'thening' using data returned from previous then
    console.log(data);
})
.catch((error) => console.log(error))


// what gets printed first in the log?
// all the data from API is displayed first, then all the others get logged
// discussed in next file