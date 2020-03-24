// const myFunct = function(callBack){
//     let value = 50;
//     callBack(value);
// };

// const callBack = function(value){
//     console.log(value);
// };

// myFunct(callBack);

let people = ['luigi', 'mario', 'peach', 'toad', 'fdp'];
const myFunct = function(person, index){
    console.log(`Hello ${person}, you are the ${index} to log in`);
};

people.forEach(myFunct);

