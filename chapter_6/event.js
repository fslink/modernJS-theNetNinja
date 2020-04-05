const button = document.querySelector('button');

button.addEventListener('click', () =>{
    console.log('You click to me !')
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    // console.log(item);
    item.addEventListener('click', e => {
        // console.log(e);
        // console.log(e.target);
        e.target.style.textDecoration = 'line-through';
    });
})