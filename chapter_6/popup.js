const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('OI you copy me buddy !');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    // console.log(e.target.textCon);
    e.target.textContent = `pos x - ${e.offsetX} & pos y - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})