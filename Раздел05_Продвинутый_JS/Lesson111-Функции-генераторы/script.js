'use strict';
// Lesson 111. Функции-генераторы

// function* (ключевое слово function со звёздочкой) определяет функцию-генератор.
// Синтаксис:
// function* name([param[, param[, ... param]]]) { statements }
// name: Имя функции.
// param: Именованные аргументы функции (параметры). Функция-генератор может иметь 255 аргументов.
// statements: Инструкции составляющие тело функции.

// После function ставим * и далее имя фун-и. В результате фун-ю эту в дальнейшем можно будет вызывать не один раз
// и каждый раз она будет выдавать уже другой результат и за этот функц-л отвечает ключ. слово yield
function* generator() {
    yield 's';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}
// Когда обозначение фун-и готово поместим ее в перем-ю, что-бы далее у нас была ссылка на эту фун-ю и мы могли ее польз-ся
const str = generator();
// Чтобы вызвать след-й шаг нашего генератора испол-м встр. метод next()
// Когда фун-я сраб-т она нам отдает объект где есть всего 2 поля
console.log(str.next().value);   // s

console.log(str.next());   // { value: 's', done: false }
console.log(str.next());   // { value: 'c', done: false }
console.log(str.next());   // { value: 'r', done: false }
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next());   // { value: undefined, done: true }


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
const counter = count(4);
console.log(counter.next().value);   // 0
console.log(counter.next().value);   // 1
console.log(counter.next().value);   // 2
console.log(counter.next().value);   // 3
console.log(counter.next().value);   // undefined
console.log(counter.next().value);   // undefined

// Или можно и так через цикл for of, так делают если фун-ю-генератор нужно запустить макс кол-во раз
function* count2(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
for (let k of count2(3)) {
    console.log(k);     // 0 1 2
}