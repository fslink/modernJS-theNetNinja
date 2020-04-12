const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(form.username.value);
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'Good input, very good !';
    } else {
        feedback.textContent = 'The username must contains letters only and don\'t overpass 12 length';
    }
});