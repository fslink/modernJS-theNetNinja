const todos = [
    {author : 'soso', todo: 'looking for sfr email', rank: 5},
    {author : 'soso', todo: 'amazon books', rank: 4},
    {author : 'soso', todo: 'ENI receipt', rank: 5},
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

let stored = localStorage.getItem('todos');

stored = JSON.parse(stored);
console.log(stored);