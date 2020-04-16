const correctANswers = ['B', 'B','B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const answers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value];

    let score = 0;
    answers.forEach((answer, index) => {
        if(answer === correctANswers[index]){
            score += 25;
        }
    });

    console.log(score);
});