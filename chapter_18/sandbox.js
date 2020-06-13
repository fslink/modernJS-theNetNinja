// new Set() filtre les doublons d'un tableau
const perso = ['samir', 'jedi', 'mehdi', 'samir', 'guillaume'];

let result = new Set(perso);
// console.log(result);

// result = [...result];
// console.log(result);

// add()
result.add(25).add('mehdi').add(20).add('jedi').add('mathieu');

// delete()
result.delete('guillaume');

// clear()
// result.clear();

// foreach()
const persDetails = new Set([
    {name: 'roger', age: 50},
    {name: 'thomas', age: 30},
    {name: 'samir', age: 38}
]);

console.log(result, result.size);
console.log(result.has(25), result.has('roger'));

persDetails.forEach(perso => {
    console.log(perso.name, perso.age);
});

// Symbols

const symbolOne = Symbol('a symbol');
const symbolTwo = Symbol('a symbol');

console.log(symbolOne == symbolTwo);

const newPersos = [
    {name: 'roger', age: 50},
    {name: 'thomas', age: 30},
    {name: 'samir', age: 38}
];

newPersos[0][symbolTwo] = 'orange';
newPersos[0][symbolOne] = 'blue';

console.log(newPersos);
