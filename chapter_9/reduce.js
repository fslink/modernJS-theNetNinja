// const scores = [10,30,80,50,20,10,40];

// const result = scores.reduce((acc, curr) => {
//     if(curr < 20){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

const players = [
    {name: 'mario', score: 10},
    {name: 'luigi', score: 100},
    {name: 'peach', score: 20},
    {name: 'mario', score: 18},
    {name: 'mario', score: 10},
    {name: 'luigi', score: 100},
    {name: 'peach', score: 20},
    {name: 'mario', score: 18},
    {name: 'mario', score: 50},
    {name: 'luigi', score: 100},
    {name: 'peach', score: 20},
    {name: 'mario', score: 75}
];

const marioTotal = players.reduce((acc, curr) => {
    if(curr.name === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);