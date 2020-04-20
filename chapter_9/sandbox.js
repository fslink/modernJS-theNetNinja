// const scores = [10, 20, 40, 15, 30, 55];

// scoresFiltered = scores.filter((score) => {
//     return score === 10;
// });

// console.log(scoresFiltered);

const users = [
    {name: 'shaun', premium: true},
    {name: 'mario', premium: false},
    {name: 'luigi', premium: false},
    {name: 'link', premium: true}
];

const usersFiltered = users.filter(user => user.premium);

console.log(usersFiltered);