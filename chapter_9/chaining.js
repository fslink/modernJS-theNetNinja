const players = [
    {name: 'mario', score: 20},
    {name: 'mother-fucker', score: 200},
    {name: 'Othelo', score: 15},
    {name: 'Le Roi', score: 1000},
    {name: 'luigi', score: 35},
    {name: 'sysiphe', score: 45}
];

// const filtered = players.filter(player => player.score > 40);
// // console.log(filtered);
// const formated = filtered.map(player => `The player ${player.name} has a score of ${player.score}`);
// // console.log(formated);

const formated = players
                    .filter(player => player.score > 40)
                    .map(player => `The player ${player.name} has a score of ${player.score}`);

const scoreList = document.querySelector('ul');
// console.log(scoreList);
formated.forEach(playerSCore => scoreList.innerHTML += '<li>' + playerSCore + '</li>');