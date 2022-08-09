//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість смиволів повинна бути в інпуті, зазначається в його 
//атрибуті data - length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, 
//які ми вже додали у вихідні файли завдання.

const inputName = document.querySelector("#validation-input")

inputName.addEventListener("blur", onInputBlur)


function onInputBlur() {
    if (inputName.value.length === +inputName.dataset.length) {
          inputName.classList.remove(`invalid`);
        inputName.classList.add(`valid`);
       
    } else if (inputName.value.length > +inputName.dataset.length){
        inputName.classList.remove(`valid`);  
        inputName.classList.add(`invalid`); 
   }
}
