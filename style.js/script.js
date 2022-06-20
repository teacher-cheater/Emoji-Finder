import {data} from './modules.js';

const mainBlock = document.querySelector('.main__content');

//placeholder. введенные значения
const enterInput = document.getElementById('main__input'); // вывод введенных значений в input

// получить набор карточек
const  kitCartAll = document.querySelectorAll('.main__cart')

//глобальная переменная для уникальных элементов из объекта data
const uniqData = uniqKeyWords(data);

//перебор старого массива и удаление повторяющихся объектов
function uniqKeyWords(arrayOldData){
   return arrayOldData.map((emojiObj)=> {
      return {...emojiObj, keywords: [...new Set(emojiObj.keywords.split(' '))].join(' ')}
})
}

function createCartInf(divImage, paragr, paragText) {
   let createDivCart = document.createElement('div')
   createDivCart.className = 'main__cart'

   let createDivImg = document.createElement('div')
   createDivImg.className = 'main__picture'
   createDivImg.textContent = divImage
   createDivCart.append(createDivImg)

   let createParag = document.createElement('p')
   createParag.className = 'main__title'
   createParag.textContent = paragr
   createDivCart.append(createParag);

   let createParagText = document.createElement('p')
   createParagText.className = 'main__text'
   createParagText.textContent = paragText
   createDivCart.append(createParagText);

   mainBlock.append(createDivCart); // добавление карт в блок
}

//присвоили каждой карточке свои элементы(symbol-иконка,title-название, keaywords-текст)
uniqData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords))


function inputSearch(event) {
   let newData = uniqData.filter((kitCartAll) => kitCartAll.title.toLowerCase().includes(event.target.value.trim().toLowerCase()))
   mainBlock.innerHTML = '';
   return newData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords));
}
enterInput.addEventListener('input', (event) => inputSearch(event))