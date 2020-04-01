const para = document.querySelector('p');
para.innerText = 'Hello my little Ninja !';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += ' new text';
});

const content = document.querySelector('.container');
console.log(content);
const persos = ['mario', 'luigi', 'peach'];

persos.forEach(perso => {
    content.innerHTML += `<p>New persos in the game : ${perso} is here !</p>`;
})