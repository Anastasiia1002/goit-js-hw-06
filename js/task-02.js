//1.Створить окремий елемент <li>. Обов'язково використовуй метод 
//document.createElement().
//2.Додасть назву інгредієнта як його текстовий вміст.
//3.Додасть елементу клас item.
//4.Після чого, вставить усі <li> за одну операцію у список 
//ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let arrayIngr = document.querySelector('#ingredients');

let createItem = ingredients.map(elem => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = elem ;
  return ingredientsItem;
})
arrayIngr.append(...createItem);

