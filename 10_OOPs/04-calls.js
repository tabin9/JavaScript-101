function setUsernamee(username) {
    // complex DB calls
    this.username = username
}

function createUserr (username, email, password) {
    setUsernamee(username);     // used nested function => can't use 'this' here
    // it does get called, but when the execution happens, it is popped off 
    // the call stack and the declared variables are deleted, including 
    // the username => to hold the reference use '.call' method
    this.email = email;
    this.password = password;
}


const tabi = new createUser('Tabin', 'tabin@fb.com', '123');
console.log(tabi);   // didn't log username (Tabin)


// ### FIX ### //
// using .call to fix
function setUsername(username) {
    // complex DB calls
    this.username = username
}

function createUser (username, email, password) {
    setUsername.call(this, username);  // now current 'this' is used
    // not the setUsername's 'this'. Why do we need to do this? 
    // 'this' in setUsername is deleted when setUsername function executes.
    this.email = email;
    this.password = password;
}


const tab = new createUser('Tabin', 'tabin@fb.com', '123');
console.log(tab);   // now username is set 