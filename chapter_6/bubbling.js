const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something new !';
    // ul.append(li);
    ul.prepend(li);
});

const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.remove();
//         console.log('LI');
//         console.log(e.target);
//         e.stopPropagation();
//     });
// });

ul.addEventListener('click', e => {
   if(e.target.tagName === 'LI'){
       e.target.remove();
   }
});
