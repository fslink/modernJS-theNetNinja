const correctANswers = ['B', 'B','B', 'B'];
const form = document.querySelector('.quiz-form');
const resultScore = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const answers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value];

    let score = 0;
    answers.forEach((answer, index) => {
        if(answer === correctANswers[index]){
            score += 25;
        }
    });

    //resultScore.firstElementChild.firstElementChild.firstElementChild.textContent = score + '%';
    window.scrollTo(0,0);
    resultScore.querySelector('span').textContent = `${score}%`;
    resultScore.classList.remove('d-none');

});

// console.log('hello');
// window.console.log('hello');

// alert('hello');
// window.alert('hello');

// window.setTimeout(() =>{
//     window.alert('Salut ma gueule !');
// }, 4000)