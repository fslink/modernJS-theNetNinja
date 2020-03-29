// Primitive Types
// let scoreOne = 30;
// let scoreTwo = scoreOne;

// console.log(`score One : ${scoreOne}, score Two : ${scoreTwo}`);
// console.log('update...');
// scoreTwo = 100;
// console.log(`score One : ${scoreOne}, score Two : ${scoreTwo}`);

//Reference Types
let person = {name: 'Maurice', age: 40};
let person2 = person;

console.log(person, person2);
console.log('update...');
person2.name = 'Maurice Junior';
console.log(person, person2);

