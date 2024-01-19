class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }   // this has access to the whole class
}

// now teacher has functionality of user
class teacher extends user{
    constructor(username, email, password) {
        super(username)     // 'super' keyword  (this, call)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const showkatSir = new teacher('Showkat', 'showkat@dps.com', '123')

showkatSir.addCourse()
showkatSir.logMe()

const tab = new user('Tabin')
tab.logMe()     

console.log(showkatSir === tab);                // false
console.log(showkatSir instanceof teacher);     // true
console.log(showkatSir instanceof user);        // true