//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
//на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body
const colorBG = document.querySelector('.color')
const colorChange = document.querySelector('.change-color')

// colorChange.addEventListener('ckick', clickChangeColor)

function clickChangeColor ()  {
  bodyEl.style.backgroundColor = getRandomHexColor()
  colorBG.textContent = bodyEl.style.backgroundColor
  colorChange.style.backgroundColor = getRandomHexColor()
}
 colorChange.addEventListener('click', clickChangeColor)