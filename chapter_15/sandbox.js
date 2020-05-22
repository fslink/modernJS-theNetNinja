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
    }
}

const userTwo = new User('mario', 'mario@gmail.com');
const userThree = new User('luigi', 'luigi@gmail.com');

console.log(userTwo, userThree);