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

// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     logIn(){
//         console.log(`${this.username} is logged in`);
//         return this;
//     }
//     logOut(){
//         console.log(`${this.username} is logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`The score is ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User{
//     constructor(username, email, title){
//         super(username, email);
//         this.title = title;
//     }
//     deleteUSer(user){
//         users = users.filter(u => u.username !== user.username);
//     }
// }

function User(username, email, title){
    this.username = username;
    this.email = email;
    this.title = title;
}

User.prototype.login = function(){
    console.log(`the user : ${this.username} is logged in !`);
    return this;
};

User.prototype.logout = function(){
    console.log(`the user : ${this.username} is logged out !`);
    return this;
}

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

const userTwo = new User('mario', 'mario@gmail.com');
const userThree = new User('luigi', 'luigi@gmail.com');
const userFour = new Admin('sofiann', 'sofiann@gmail.com', 'black-belt-ninja');

console.log(userTwo, userThree, userFour);
