//import {data} from './modules.js';
const mainBlock = document.querySelector('.main__content');

//placeholder. введенные значения
const enterInput = document.getElementById('main__input'); // вывод введенных значений в input

// получить набор карточек
const kitCartAll = document.querySelectorAll('.main__cart')


//создали асинхронную функцию 
async function data() {
   const prom = await fetch('http://localhost:7000/emoji', {
      method: 'GET',
      headers: {
         'Access-Control-Allow-Origin': '*'
      }
   });
   console.log(prom)
   const data = await prom.json()
   console.log(data)

   //глобальная переменная для уникальных элементов из объекта data
   const uniqData = uniqKeyWords(data);
   //перебор старого массива и удаление повторяющихся объектов
   function uniqKeyWords(arrayOldData) {
      return arrayOldData.map((emojiObj) => {
         return { ...emojiObj, keywords: [...new Set(emojiObj.keywords.split(' '))].join(' ') }
      })
   }

   //присвоили каждой карточке свои элементы(symbol-иконка,title-название, keaywords-текст)
   uniqData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords))

   //функция: фильтр карт, поиск по title(убрали зависимость от пробелов и регистра)
   function inputSearch(event) {
      let newData = uniqData.filter((kitCartAll) => kitCartAll.title.toLowerCase().includes(event.target.value.trim().toLowerCase()))
      mainBlock.innerHTML = ''; //очистили блок со старыми картами
      return newData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords));//создали новыуб карту со знач.введенными в input
   }
   enterInput.addEventListener('input', (event) => inputSearch(event))//присвоили прослушку по введенным значениям
}
data()

//функция: создание блоков, в которых создали и добавили карты с эмоджи
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



