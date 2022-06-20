import {data} from './modules.js';

const mainBlock = document.querySelector('.main__content');

//placeholder. введенные значения
const enterInput = document.getElementById('main__input'); // вывод введенных значений в input

// получить набор карточек
const  kitCartAll = document.querySelectorAll('.main__cart')

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
data.forEach((item) => createCartInf(item.symbol, item.title, item.keywords))

//получить тексты в карточкаъ (keywords)
//let wordsOnTheCart = document.querySelector('.main__text')

//function inputSearch() {
   //let item = document.querySelectorAll('.item'); //all collection cart
   //let kitCartAll = document.querySelectorAll('.main__cart')
   //let kitCartAll = document.querySelectorAll('.main__cart')
//   enterInput.onchange = function () {
//      let inputValue = kitCartAll.value //
//      let newData = data.filter((item) => item.title === inputValue)
//      return newData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords));
//   }
//}

//inputSearch() //Вызов функции поиска по карточкам (item)

//TODO удаление повторяющихся элементов (начало кода)
//повторяющиеся элементы (delete)
//let filterNoRepeat = wordsOnTheCart.filter((item, index) => wordsOnTheCart.indexOf(item) === index);
//console.log(filterNoRepeat);

//function uniq(a) {
//   return a.sort().filter(function(item, pos, ary) {
//      return !pos || item != ary[pos - 1];
//   });
//}
//console.log(uniq)

//let filterNoRepeat = kitCartAll.filter((item, index) => kitCartAll.indexOf(item) === index);
//console.log(filterNoRepeat);

//function uniqByKeepFirst(a, key) {
//   let seen = new Set();
//   return a.filter(item => {
//      let k = key(item);
//      return seen.has(k) ? false : seen.add(k);
//   });
//}
//let seen = new Set(data);
//console.log(seen)

//console.log(uniqByKeepLast(data1, it => it.u))
//TODO удаление повторяющихся элементов (конец)

function inputSearch(event) {
   let newData = data.filter((kitCartAll) => kitCartAll.title.toLowerCase().includes(event.target.value.trim().toLowerCase()))
   mainBlock.innerHTML = '';
   return newData.forEach((item) => createCartInf(item.symbol, item.title, item.keywords));
}
enterInput.addEventListener('input', (event) => inputSearch(event))