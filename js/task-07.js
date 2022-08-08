//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
//і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

const inputName = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text')

inputName.addEventListener('input', inputNameFun);

inputText.style.fontSize = inputName.value + 'px'

function inputNameFun()  {
    inputText.style.fontSize = `${inputName.value }px`;
}