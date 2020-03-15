
// for loop
// for (let index = 0; index < 5; index++) {
//     console.log('The loop executed for : ' + index + ' time');
// }

// console.log('loop finished');

const array = ['caca', 'pipi', 'popo'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let html = `<div>${element}</div>`;
    console.log(html);
}