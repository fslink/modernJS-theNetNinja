const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(form.username.value);
    const username = form.username.value;
    

    if (usernamePattern.test(username)) {
        feedback.textContent = 'Good input, very good !';
    } else {
        feedback.textContent = 'The username must contains letters only and don\'t overpass 12 length';
    }
});

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        console.log(e.target);
        e.target.setAttribute('class', 'success');

    } else {
        console.log(e.target);
        e.target.setAttribute('class', 'error');
    }
});