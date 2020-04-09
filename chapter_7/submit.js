// button = document.querySelector('input[type="submit"]');
// console.log(button);
const username = document.querySelector('#username');

const form = document.querySelector('.signup-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    console.log(form.username.value);
})