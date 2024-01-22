// old way of get / set when class was not introduced in JS
// get / set inside a constructor function

function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        }, set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        }, set: function(value){
            this._password = value
        }
    })
}

const tab = new user ('tabin@google.com', 'password')
console.log(tab.password);          // returns in uppercase
console.log(tab.email);             // returns in uppercase