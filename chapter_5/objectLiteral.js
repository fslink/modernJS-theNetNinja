let ul = document.querySelector('#blogs-list');

let user = {
    name: 'Maurice',
    location: 'Bar-Le-Duc',
    age: 48,
    blogs: ['L\'art du saucisson', 'La mergez du rond point', 'être gilet jaune à Bar'],
    email: 'maurice@gmail.com'
};

const key = 'location';
console.log(user);
console.log(user[key]);

console.log(user.name);
user['blogs'] = ['ici la france', 'bonjour tristesse', 'la palourde de la rivière'];

console.log(user['blogs']);

let html = ``;
user.blogs.forEach(blog => {
    html += `<li style="color:purple;font-size:2em">${blog}</li>`;
});

ul.innerHTML = html;