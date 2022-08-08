const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = document.querySelector('.gallery');

const img = ({ url, alt } = {}) => { 
  return `<li class="js-item"><img class="js-image" src="${url}" alt="${alt}" width=300px heigth=300px></li>`;
}

const imgArray = images.map(img).join("");
galleryItems.insertAdjacentHTML("beforeend", imgArray);

// const img = images.map((elem) => {
//   const imgItem = document.createElement("li");
//   imgItem.classList.add("item");
//   imgItem.textContent = elem.alt;
//   imgItem.insertAdjacentHTML("afterbegin", elem.url);
//   return imgItem
// }
//   )
// arrayImg.append(...img)

//elem.insertAdjacentHTML(afterend , string);