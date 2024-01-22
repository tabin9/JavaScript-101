// class based getters and setters


class user {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    // say we don't want to give access to the password or encrypt the password
    // use getters and setters in class


    // we can set getters / setters for any property of the object
    // name of get / set methods need to be same


    // get is used to return value outside of class
    // set is used to set value inside the class

    
    // get / set on password
    get password(){
        return `Can't display password - ACCESS DENIED!`
    }   // if we set getter, we need to set setter or vice versa
    set password(value){
        // 1. this.password = value   
        // returns error => maximum call stack size exceeded. 
        // We're setting password at two places => Constructor and here,
        // hence the error (stack overflow). Solution:
        this._password = value        
        // make new variable, but make sure to change in get as well
    }


    // get / set on email
    get email(){
        return this._email.toUpperCase()
    }   // getters always have return => since someone is trying to get value
    set email(value){
        this._email = value
    }   // setters are not returned
}

const Tabin = new user('tabin@ai', 'hi')
console.log(Tabin.password);            // returns 'Can't display password'
console.log(Tabin.email);               // returns 'TABIN@AI'