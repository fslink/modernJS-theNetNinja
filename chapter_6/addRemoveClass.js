// const content = document.querySelector('p');
// content.classList.add('error');
// content.classList.add('success');
// content.classList.add('tata');
// console.log(content.classList);

// content.classList.remove('tata');

// console.log(content.classList);

const paras = document.querySelectorAll('div p');
console.log(paras);

paras.forEach(para => {
    if(para.innerText.indexOf('error') !== -1){
        para.classList.add('error');

    } else if(para.innerText.indexOf('success') !== -1){
        para.classList.add('success');
    }
});

const title = document.querySelector('h1');
title.classList.toggle('caca');
title.classList.toggle('caca');


