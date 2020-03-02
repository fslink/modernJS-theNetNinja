let author = 'Romano le Forain';
let likes = 10000;
let title = 'Biographie';

// concatenation
// let result = 'Le titre est ' + title + ' et l\'auteur s\'appelle ' + author + ' ' + likes + ' LIKES';
// console.log(result);

//template string
// let result = `le titre est ${title}, l'auteur est ${author}, ${likes} LIKES`;
// console.log(result);

// html template
let html = `
    <h2>Le nouveau titre ${title}</h2>
    <p>Auteur : ${author}</p>
    <span>Nombre de Likes : ${likes}</span>
`;

console.log(html);
