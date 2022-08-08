//1.Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
//2.Додай слухачів кліків до кнопок, всередині яких збільшуй або
//зменшуй значення лічильника.
//3.Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue  = document.querySelector('#value')
const decrementBt = document.querySelector('button[data-action="decrement"]')
const incrementBt = document.querySelector('button[data-action="increment"]')



function increment() {
    counterValue.textContent = +counterValue.textContent + 1; 
    incrementBt.style.color = 'green'
}
function decrement() {
    counterValue.textContent = +counterValue.textContent - 1;
    decrementBt.style.color = 'red'
}

decrementBt.addEventListener('click', decrement);
incrementBt.addEventListener('click', increment);

//document.querySelector('[data-action="add"]')