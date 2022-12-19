let btn = document.querySelector('.btn');
let test2 = document.querySelector('.test2');
let clrs = ['red', 'blue'];
let i = 0;

btn.addEventListener('click', ()=> {
    test2.style.background = clrs[i];
    i = i^1;
})