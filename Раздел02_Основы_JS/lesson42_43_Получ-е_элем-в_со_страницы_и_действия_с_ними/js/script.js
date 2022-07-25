'use strict';

// 
// Lesson 42. Получение элементов со страницы

// обращ-ся к елементу по id
const box= document.getElementById('box');
// надпись ниже сработ-т только в браузере!
// console.log(box);

// обращ-ся к елементу по назв. тега
const btns = document.getElementsByTagName('button');
// console.log(btns);
// доступ к определенной кнопке по тегу, например к 3-й кнопке
const btns2 = document.getElementsByTagName('button')[2];
// console.log(btns2);
// или
// console.log(btns2[2]);

// обращаемся по классу к елементу
const circles = document.getElementsByClassName('circle');
// console.log(circles);

// обращение по имени(испол-ся редко)
const names = document.getElementsByName('two');
// console.log(names[1]);

// более современные методы обращения к DOM элементам
// .querySelectorAll(), этот метод действительно мощный, потому что можно использовать любой CSS-селектор
let elements = document.querySelectorAll('ul > li:last-child');
  for (let elem of elements) {
    // console.log(elem.innerHTML);  // "тест", "пройден"
    // если укажем просто без .innerHTML то получим доступ просто к <li> элементам
    // console.log(elem);
  }
// если будем обращаться к классу то ставим .перед именем класса
const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// querySelectorAll имеет метод перебора forEach, в примере ниже выводим все елементы на стр-цу
hearts.forEach(item => {
  // console.log(item);
});
// console.log(hearts);

// querySelector - возвр-т 1-й попавшийся(под описание) элемент на стр-це
const oneHearts = document.querySelector('.heart');
// console.log(oneHearts);  // <div class="heart">1</div>
// если мы захочем получ-ть 1-й попав-ся div на стр-це
const oneHearts2 = document.querySelector('div');
// console.log(oneHearts2);   // 	<div class="box" id="box"></div>
// 1-й попав-ся id на стр-це
const oneHearts3 = document.querySelector('#heart-three');
// console.log(oneHearts3);




// Lesson 43. Действия с элементами на странице
const boxA = document.getElementById('box'),    // псевдомассивы
      btnsA = document.getElementsByTagName('button'),
      circlesA = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      heartsA = document.querySelectorAll('.heart'),
      oneHeartsA = document.querySelector('.heart');
      // мы можем не узазывать .document, если четко знаем внутри чего(а именно какой перем-й) мы ищем!
      // heartsA = wrapper.querySelectorAll('.heart'),
      // oneHeartsA = wrapper.querySelector('.heart');

// смотрим на элемент в качестве объекта
// console.dir(boxA);

// 
boxA.style.backgroundColor = 'yellow';
// или
boxA.style.backgroundColor = '#345654';
// всегда указываем единицу измрения в ''
boxA.style.width = '450px';
boxA.style.height = '250px';
boxA.style.borderRadius = '20px';
// чтобы обратится ко 2-й например кнопке пишем в [] ее номер, счет идет нач с 0, т.е. 1 это 2-я кнопка
btnsA[1].style.borderRadius = '100%';
// тут если мы не укажем четко элемент, [0], какой нужно закрасить,то получим ошибку! Т.к. кружков у нас много, а
// псевдомассив ничего не знает про .style
circlesA[0].style.backgroundColor = 'red';

// назначить сразу несколько inline стилей, испол-м спец. св-во cssText, где в "" пишем стили уже как в css
btnsA[2].style.cssText = 'background-color: blue; border-radius: 100%; width: 200px;';
// если нам нужно вставить в св-то переменную то мы можем испол-ть тут `${}`
// btnsA[2].style.cssText = `width: ${num}px;`;

// методы перебор for, for...of, forEach(работает только с querySelectorAll) 09:00 video
hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});


// метод document.createElement - В HTML-документах создаёт элемент c тем тегом, что указан в аргументе
const div = document.createElement('div');

// метод add свойства classList, т.е. в примере ниже мы создаем класс 'black' в нашем div елементе
div.classList.add('black');     // добавился <div class="black"></div>
// но пока этот элемент с классом сущест-т только в JS, его нет на странице и его нужно туда добавить

// для этого есть спец. методы, напр. append, prepend и тд
document.body.append(div);  // теперь <div class="black"></div> появился на странице
// т.е. в примере выше мы добавили наш div елемент в body, где он появится в самом конце(за это отвечает append)

// если нам нужно вст-ть наш div например в div с классом wrapper 
// document.querySelector('.wrapper').append(div);
// перенесем надпись выше в отдел. const wrapper, в начале урока, тогда запись будет след-й
wrapper.append(div);

// метод prepend вставит элемент в начало родителя
// wrapper.prepend(div);

// есть также методы .before() - встав-т перед елементом 
// heartsA[0].before(div);
// и .after() - вст-т после соот.
heartsA[0].after(div);

// метод удаления ненужного узла( елемента), .remove()
// circlesA[0].remove();
// или
// boxA.remove();

// метод замены одного элемента(узла) на другой .replaceWidth()
// heartsA[0].replaceWith(circlesA[0]);


// устаревшие методы для работы с DOM узлами

// метод .appendChild(), делает тоже самое что и .append()
// wrapper.appendChild(div);

// метод insertBefore() заменяет методы .prepend, .before и .after, где в () мы указыв-м 2 аргум-та
// 1-й это блок(елемент) что мы вст-м, а 2-й это перед каким элементом вст-м, где в [] указыв-м номер
// wrapper.insertBefore(div, heartsA[2]);

// метод удаления .removeChild() заменяет .remove, синтаксис отличается, перед методом указываем родителя элемента, а
// в () указыв-м елемент что хотим удалить
// wrapper.removeChild(hearts[1]);

// метод .replaceChild заменяет .replaceWith, отличается и синтакисис
wrapper.replaceChild(circlesA[0], heartsA[0]);
// запись выше аналогична - heartsA[0].replaceWith(circlesA[0]);


// Что-бы вписать текст в HTML есть метод innerHTML
// div.innerHTML = 'Hello World';
div.style.color = 'yellow';
// также он позволяет встявлять и HTML стр-ру в элемент!!!
// div.innerHTML = '<h1>Hello</h1>';

// есть также метод .textContent который работает только с текстом
div.textContent = 'Hi Dima';
// и если пользователь во внутрь вставим HTML стр-ру или скрипт с текстом то этот метод выдаст нам только текст
// это очень важно, например когда данные приходят от пользователя! Таким образом у нас на сайте ничегоне слом-ся!
// div.innerHTML = '<h1>Hello 789</h1>';    // мы увидим только - Hello 789

// метод .insertAdjacentHTML
div.insertAdjacentHTML('afterend', '<h2>Hello 1984</h2>');

