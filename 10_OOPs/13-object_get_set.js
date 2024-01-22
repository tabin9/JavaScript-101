// get / set in direct objects


const user = {
    _email: 'tabin@openai',
    _password: 'passwordInLower',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}
console.log(user.email);        // returns in upper case
console.log(tea._email);        // returns email as it is, did not get

const tea = Object.create(user)