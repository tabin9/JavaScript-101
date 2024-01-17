// ES6
// class is just syntactial sugar in JS

// creating a class
class user {
    // constructor inside a class
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // method inside a class
    encryptPassword(){
        return `${this.password}abc`   // adds abc to pass
    }

    // another method inside a class
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const tabi = new user('Tabin', 'tabin@fb.com', '123');
console.log(tabi.encryptPassword());    // returns 123abc
console.log(tabi.changeUsername());     // retuns TABIN



// ### USING .prototype to do the same ### //

function userr(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

userr.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

userr.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tab = new userr('Tabin', 'tabin@fb.com', '123');
console.log(tab.encryptPassword());     // returns 123abc
console.log(tab.changeUsername());      // retuns TABIN