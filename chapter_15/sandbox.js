const userOne = {
    username: 'ryu',
    email: 'ryu@gmail.com',
    logIn(){
        console.log(`the user : ${this.username} is logged !`);
    },
    logOut(){
        console.log(`the user : ${this.username} is log out !`);
    }
};

// console.log(userOne.username, userOne.email);
// userOne.logIn();

class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    logIn(){
        console.log(`${this.username} is logged in`);
        return this;
    }
    logOut(){
        console.log(`${this.username} is logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`The score is ${this.score}`);
        return this;
    }
}

const userTwo = new User('mario', 'mario@gmail.com');
const userThree = new User('luigi', 'luigi@gmail.com');

userTwo.logIn().incScore().incScore().logOut();