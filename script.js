const btn1 = document.querySelector('.btn1');
const text = document.querySelector('.card-text');

btn1.addEventListener('click', () => {
    if(text.style.display =='block') {
    text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
});

const btn2 = document.querySelector('.btn2');
const text2 = document.querySelector('.card-text2');

btn2.addEventListener('click', () => {
    if(text2.style.display =='block') {
    text2.style.display = 'none';
    } else {
        text2.style.display = 'block';
    }
});

const btn3 = document.querySelector('.btn3');
const text3 = document.querySelector('.card-text3');

btn3.addEventListener('click', () => {
    if(text3.style.display =='block') {
    text3.style.display = 'none';
    } else {
        text3.style.display = 'block';
    }
});