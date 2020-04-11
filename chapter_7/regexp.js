// ^ rien avant $ rien après
// [a-z] comprenant la lettre a à z [a-zA-Z0-9] donc majuscules et 0 à 9
// length {6-10} min 6 max 10
// . tous caractères
// ^.{6-10}$
// ^[a-zA-Z0-9]{6-10}$

const username = '45shaunp787';
const pattern = /^[a-z]{6,10}$/;


// let result = pattern.test(username);
let result = username.search(pattern);
console.log(result);

// if(result){
//     console.log('name is in the pattern :)');
// } else {
//     console.log('name is NOT in the pattern :(');
// }


