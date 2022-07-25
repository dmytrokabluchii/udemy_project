'use strict';

// Lesson 63 ClassList и делегирование событий
// Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
// elem.classList – это специальный объект с методами для добавления/удаления одного класса.
// Синтаксис: let elementClasses = elem.classList;
// Результат - псевдомассив DOMTokenList, содержащий все классы узла elem

// Пример с Юдеми
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// узнать сколько классов у элемента, в данном случае у 1-й кнопки
console.log(btns[0].classList.length);  // 2


// у св-ва classList есть свои методы
// например метод item, позвол-т получит класс(т.е имя класса по счету) кот-й наход-ся под опред-м индексом
console.log(btns[0].classList.item(0));  // blue

// elem.classList.add/remove("class") – добавить/удалить класс.
btns[0].classList.add('red');  // <button class="blue some red"></button> 
btns[0].classList.remove('blue');  // <button class="some red"></button>

// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
btns[0].classList.toggle('some');  // <button class="red"></button>

// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
// провер-м на наличие класса и выпол-м какое-то действие
// и этот метод открывает нам двери в динамическое преобразование стр-цы
btns[1].classList.add('red'); 
if (btns[1].classList.contains('red')) {
  console.log('It is red-class!');
}


// испол-е метода выше можно часто увидеть и на примере burger-menu! Реал-м схожий способ с кнопкой
btns[0].addEventListener('click', () => {
  // если у кнопки нет класса ред то мы ее добавим
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  }else{
    btns[1].classList.remove('red');
  }
});


// свойство className(устарело) - это примитивная альтернатива classList, которое содержит значение атрибута class элемента
// В себе оно содержит классы в качестве одной строки и чтобы манипулировать классами нужно постоянно менять 
// эту строчку каким-то методом, что неудобно
// console.log(btns[0].className);



// Делегирование событий
// Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – делегирование.
// Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, 
// то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.
// Из него можно получить целевой элемент event.target, понять на каком именно потомке произошло событие и обработать его.
// Т.е. Делегирование это - когда мы делегируем(передаём) событие с родителя на его потомков!
wrapper.addEventListener('click', (event) => {
   // у нашей кнопки есть встр-е св-во tagName: "BUTTON" и его мы можем увидеть в console.dir
  // console.dir(event.target);
  // ниже провер-м на сущест-е event.target(это гугл реком-я)
  if (event.target && event.target.tagName == "BUTTON") {
    console.log('hello');
    // теперь при клике именно на кнопки мы видим в консоле hello - эт и есть класич-е делегирование событий!

    // таким же образом можно проверять и на наличие классов например
    // if (event.target && event.target.classList.contains('blue'))
  }
});

// создадим новый элемент(кнопку) на стр-це
const btnNew = document.createElement('button');
btnNew.classList.add('red');
// и помещаем эту кнопку в нашу обертку и теперь этот элемент тоже будет впол-ть теж же действия что и конопки выше!
wrapper.append(btnNew);

// также есть еще один способ проверки варианта с if (event.target && event.target.tagName == "BUTTON") 
// его любят испол-ть сотр-ки гугл, это метод .matches()
// Метод Element.matches() вернёт true или false, в зависимости от того, соответствует ли элемент указанному css-селектору.
// т.е. он провер-т совпадает ли какой-то элемент с чем-то 
wrapper.addEventListener('click', (event) => {
  // где 'button это наш тег а .red класс котрый к нему добав-м!
 if (event.target && event.target.matches('button.red')) {
   console.log('hello');
 }
});
