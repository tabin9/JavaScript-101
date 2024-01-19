class user {
    constructor (username) {
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }

    // create ID whenever new user is added
    static createId(){
        return `123`        
    }
}

const tab = new user('Tabin')
// console.log(tab.createId());    // returns 123 without 'static'
// console.log(tab.createId())        // returns error with 'static'  
// sometimes we don't want instances to access a certain method, we use static

class teacher extends user {
    constructor (username, email) {
        super(username);
        this.email = email;
    }
}

const iPhone = new teacher ('iPhone', 'i@phone.com')
iPhone.logMe()      // returns username is iPhone
iPhone.createId()   // returns an error with 'static'