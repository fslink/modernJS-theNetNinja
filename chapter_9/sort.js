const scores = [10,20,5,15,50,90,100,10,58];
const names = ['mario', 'luigi', 'mother-fucker', 'street-fucker', 'midnight-fucker'];

scores.sort((a, b) => b - a);
scores.reverse();
console.log(scores);

// names.sort();
// names.reverse();
// console.log(names);

const players = [
    {name: 'mario', score: 20},
    {name: 'mother-fucker', score: 200},
    {name: 'Othelo', score: 15},
    {name: 'Le Roi', score: 1000},
    {name: 'luigi', score: 35},
    {name: 'sysiphe', score: 45}
];

// players.sort((a, b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if(b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// players.sort((a, b) => b.score - a.score);

// console.log(players);
