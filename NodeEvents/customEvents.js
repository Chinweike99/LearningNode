const EventEmitter = require('events');

class User extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
    login(){
        console.log(`${this.name} is logging in...`);
        this.emit('loggedIn', this.name);
    }
}

const user1 = new User('Kemi');
user1.on('loggedIn', (username) => {
    console.log(`User ${username} logged in successfully!`);
});

user1.login();