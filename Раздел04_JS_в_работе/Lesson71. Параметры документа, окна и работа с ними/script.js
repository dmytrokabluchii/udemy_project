'use strict';

// Document - Каждая веб-страница, которая загружается в браузер, имеет свой собственный объект document. 
// Интерфейс документа служит точкой входа для получения содержимого веб-страницы 
// (всего DOM - дерева, включая такие элементы как <body> и <table> (en-US)).
// Что содер-ся в обэекте можно посм-ть через console.dir(document); в консоле браузера

// Window - Объект window представляет собой окно, содержащее DOM документ; свойство document указывает на 
// DOM document, загруженный в данном окне. 

// Существует множество JavaScript-свойств, которые позволяют считывать информацию об элементе: ширину, высоту
// и другие геометрические характеристики. Значениями свойств являются числа, подразумевается, что они в пикселях.

const box = document.querySelector('.box'),
btn = document.querySelector('button');

// clientTop/Left
// clientWidth/Height - Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки:
// const width = box.clientWidth;
// const height = box.clientHeight;
// console.log(width, height);  // 383 333

// offsetWidth/Height - Эти два свойства – самые простые. Они содержат «внешнюю» ширину/высоту элемента, 
// то есть его полный размер, включая рамки.
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width, height);   // 400 350

// scrollLeft/scrollTop и scrollWidth/Height  
// Эти свойства – как clientWidth/clientHeight, но также включают в себя прокрученную (которую не видно) часть элемента.
// Другими словами, свойство scrollTop – это «сколько уже прокручено вверх».
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);  // 383 1382

// Пример показа полного текста по клику
btn.addEventListener('click', () => {
    // мы после клика у элем-а box устна-м полную высоту с учетом всей прокр-ки
    // box.style.height = box.scrollHeight + 'px';

    // св-ва scrollLeft/scrollTop также могут быть модиф-ны
    // увидеть сколько px было прокр-но
    console.log(box.scrollTop);
});

// в JS коор-ты расчит-ся не так как в css, они начин-ся в левом верхнем углу экрана, есть метод кот-ый получ-т все коод-ты
// Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport 
// (часть страницы, показанная на экране, и которую мы видим).
console.log(box.getBoundingClientRect());  // DOMRect {x: 568, y: 50, width: 400, height: 350, top: 50, …}
console.log(box.getBoundingClientRect().top);  // 50

// Метод window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после 
// применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать.
// Метод предоставляет все значения CSS-свойств элементов после применения текущей таблицы стилей или базового расчёта 
// каких-либо значений, которые могут быть.
const style = window.getComputedStyle(box);
console.log(style);   // CSSStyleDeclaration {0: 'accent-color', ...}
// если нас интресует конкр-е св-во
console.log(style.display);  // block
// getComputedStyle может получить информацию о стилях из псевдо-элемента (например - ::after, ::before, ...)
// при помощи JS мы не можем работать с псевдо-элементами, мы их не получим со стр-цы(это прописано в стандарте)
// но стили этих элементов мы получить можем!
const h3 = document.querySelector('h3');
const result = getComputedStyle(h3, ':after').content;
console.log('the generated content is: ', result);   // the generated content is:  "rocks!"


// Методы для перем-я по стр-це!
// чтобы получ-ть кол-во px котор-е польз-ль уже отлистал на стр-це есть свойство Document.documentElement
// свойство только для чтения, возвращает элемент Element , который является коренным элементом документа  document 
// (например элемент <html> для HTML документов).
console.log(document.documentElement.clientWidth);  // 1519
console.log(document.documentElement.scrollTop);    // 181.60000610351562
// используя этот метод мы можем проскролить сто-цу наверх например при клике на кнопку(элемент)!!!
// document.documentElement.scrollTop = 0;

// Window.scroll() - Прокручивает страницу до указанного места.
// Синтаксис: window.scroll(x-coord,y-coord)
// Параметры: x-coord - это x-координата пикселя, который окажется в верхнем левом углу экрана.
// y-coord- это y-координата пикселя, который окажется в верхнем левом углу экрана.

// метод Window.scrollBy() Прокручивает документ на указанные величины. 
// Синтаксис: window.scrollBy(X, Y); где X - смещение в пикселях по горизонтали. Y - смещение в пикселях по вертикали.
// Пример: Прокрутка на один экран вертикально вниз.
// window.scrollBy(0, window.innerHeight);
// это работает от текущей позиции
// window.scrollBy(0, 400);
// window.scrollBy прокручивает страницу на указанное количество пикселей, в то время как метод window.scroll указывает 
// абсолютную позицию в документе, на которую надо сместиться. 

// Метод Window.scrollTo() - Прокрутка документа до указанных координат.
// Синтаксис: window.scrollTo(x-coord, y-coord); / window.scrollTo(options);
// Параметры: x-coord пиксель по горизонтальной оси документа, будет отображён вверху слева.
// y-coord пиксель по вертикальной оси документа, будет отображён вверху слева.
// options объект с тремя возможными параметрами: top, то же, что и y-coord / left, то же, что и x-coord
// behavior, строка, содержащая либо smooth, instant, либо auto; по умолчанию auto
window.scrollTo(0, 400);
