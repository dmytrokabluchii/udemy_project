// Lesson 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// Через .document мы можем обращ-ся к <body> <head> и тд
// console.log(document.body);
// console.log(document.head);

// чтобы увидеть весь наш html
// console.log(document.documentElement);

// чтобы увидеть детей родителя есть 3 способа, и 1-й это св-во .childNodes
// console.log(document.body.childNodes);   // псевдомассив NodeList(6) [text, div.wrapper, text, comment, text, script]

// получить 1-го ребенка внутри родителя .firstChild и последнего .lastChild
// console.log(document.body.firstChild); 
// console.log(document.body.lastChild); 

// получить тоже самое, только уже сразу к елементу .firstElementChild и .lastElementChild
console.log(document.body.firstElementChild);   // <div
console.log(document.body.lastElementChild);   // <script

// св-во .parentNode получить родителя елемента
console.log(document.querySelector('#current').parentNode);  // <div class="first">...</div>
// т.е в примере выше мы получаем родителя элемента с id#current, а это div элемент с классом "first"

// если мы захочем получить элемент еще на уровень выше, т.е. уже родителя div элемента с классом "first", то запись будет
console.log(document.querySelector('#current').parentNode.parentNode);   // <div class="wrapper">...</div>

// получить тоже самое, только уже сразу к елементу
// console.log(document.body.parentElement);

// Дата-артибуты, начинаются всегда с data-... и прописываются в HTML внутри тега, 
// из JS мы можем иметь к ним доступ испол-я .querySelector() и ['где прописывает имя атрибута и его значение в " " '] 
// чтобы иметь доступ к след-му елементу в коде HTML испол. св-во .nextSibling
console.log(document.querySelector('[data-current="3"]').nextSibling);    // #text (текстовая нода, т.е. это перенос строки)
//  или .previousSibling - дает доступ к пред-му елементу в коде HTML
console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling.previousSibling.previousSibling); // <li>

// есть св-ва которые сразу дадут нам доступ к элементу и пропустят Ноды(т.е переносы строк и тд)
console.log(document.querySelector('[data-current="3"]').nextElementSibling);   // <li>
console.log(document.querySelector('[data-current="3"]').previousElementSibling);  // <li>


// но для св-ва .childNodes нет аналогов для поиска именно по елементу и тут нам поможет перебирающая констр-я for...of
// т.е. нам нужно перебрать все childNodes в <body> например и убрать Nodes
//  и тут нам помогут операторы break и continue которрые как раз и работают в for...of
for (let node of document.body.childNodes) {
    // убираем ненужные Ноды(узлы), т.е. если мы наткнулись на текст. Ноду, то цикл останав-м начин-м заново уже с др-м элементом
    // nodeName == "#text" взято с консоли браузера
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}
