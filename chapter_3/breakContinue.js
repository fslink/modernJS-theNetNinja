let score = [10, 30, 15, 0, 100, 20, 80];

for (let i = 0; i < score.length; i++) {

    if (score[i] === 0) {
        continue;
    }
    
    console.log('Your score is : ' + score[i]);

    if (score[i] === 100) {
        console.log('Congratulation, your score is 100!');
        break;
    }
    
}