//1.Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
const text = document.querySelectorAll(".item");
console.log(`Number of categories : ${text.length} `)
//Number of categories : 3

//2.Для кожного элемента li.item у спику ul#categories, 
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const textItem = text.forEach(element => {
    let elemH = element.firstElementChild.textContent;
    let elLength = element.lastElementChild.children.length 
    console.log("Category: " + elemH + "\n" + "Elements: " + elLength)
 });

//
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
//