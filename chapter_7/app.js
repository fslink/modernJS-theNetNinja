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
    resultScore.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        resultScore.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
