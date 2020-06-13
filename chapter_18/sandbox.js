// rest parameter
const double = (...nums) => {
    return nums;
}

let result = double(1,5,6,9,7,10,589,78,63,2,56,7,78,10);
console.log(result);

// spread synthax
const newDouble = [10000, ...result];
console.log(newDouble);

// spread object synthax
const person = {name: 'sofiann', age: 32};
const personClone = {...person, location: 'Nancy'};

console.log(person, personClone);