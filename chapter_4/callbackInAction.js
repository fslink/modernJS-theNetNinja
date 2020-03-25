let people = ['luigi', 'mario', 'peach', 'toad', 'fdp'];
let ul = document.querySelector('.persons');

let html = ``;

people.forEach(function(person){
    html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;

