const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'http://www.thenetninja.co.uk');
link.innerText = 'Link to The Net Ninja website !';

const para = document.querySelector('p');
para.setAttribute('class', 'success');
para.setAttribute('style', 'color:red;');