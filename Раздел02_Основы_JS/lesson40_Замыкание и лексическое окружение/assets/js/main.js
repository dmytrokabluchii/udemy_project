 "use strict";

// Lesson 40 Замыкание и лексическое окружение

// let number = 5; debugger
// function logN() {
//     let number = 4; debugger
//     console.log(number);    // 66
// }
// number = 66;
// logN(); debugger

//  Лексическая область видимости (lexical scoping)
// в JavaScript область действия переменной определяется по её расположению в коде (это очевидно лексически), 
// и вложенные функции имеют доступ к переменным, объявленным вовне. Этот механизм и называется Lexical scoping 
// (область действия, ограниченная лексически).
// function init() {
//     let name = "Димон"; // name - локальная переменная, созданная в init
//     function displayName() { // displayName() - внутренняя функция, замыкание
//         console.log(name); // displayName() использует переменную, объявленную в родительской функции
//     }
//     displayName();
// }
// init();
// init() создаёт локальную переменную name и определяет функцию displayName(). 
// displayName() — это внутренняя функция — она определена внутри init() и доступна только внутри тела функции init(). 
// Обратите внимание, что функция displayName() не имеет никаких собственных локальных переменных. Однако, поскольку
// внутренние функции имеют доступ к переменным внешних функций, displayName() может иметь доступ к переменной name, 
// объявленной в родительской функции init().

// создадим фун-ю счетчик
function createCounter() {
    let counter = 0;
    // создадим новую фун-ю внутри сущест-й, этo function expression(т.к. мы помещаем ее внутрь перем-й)
    const myFunction = function() {
        // будем просто увелич-ть counter на 1
        counter = counter + 1;
        return counter;
    };
    // и в конце createCounter() будет возвр-ть myFunction, это частые ситуации когда одна фун-я возвращ-т другую
    return myFunction;
}
// далее мы в increment ложим другую фун-ю, т.е. createCounter(), которая по факту возращ-т нам другую фун-ю, а именно myFunction
const increment = createCounter();

const c1 = increment();   // 1
const c2 = increment();   // 2
const c3 = increment();   // 3
console.log(c1, c2, c3);  // 1 2 3

// еще пример
let val = 7;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log(sum);   // 15



// Вопрос 4: Какой результат мы получим в переменной result?
// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// };
// Ответ: будет ошибка, т.к function Expression вызывается еще до того, как было создано

// Вопрос 5: Какой результат команды?
typeof(NaN);  // 'number'

// Вопрос 7: Как называется прием из кода ниже?
const user = {
    name: 'Alex',
    age: 25
};
const {name, age} = user;
// Ответ: Деструктуризация 
// (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект 
// сразу нескольким переменным, разбив его на части.
// Пример деструктуризации массива:
let [firstName, lastName] = ["Илья", "Кантор"];
console.log(firstName); // Илья
console.log(lastName);  // Кантор

// Вопрос 9: Сколько аргументов может быть у функции?
// Ответ: Сколько угодно

// Вопрос 13: Какой результат даст этот код?
// 0 || 1                        // 1
// 0 && 1                        // 0
// "a" > "b"                     // false 
// 0 || NaN || false || null     // null (т.к. здесь все знач-я false, но null идет последним)

// Вопрос 17: Что будет содержаться в переменной result после завершения кода?
function foo(a,b) {
    const [first] = a;
    const {eng} = b;
    return `${first} ${eng}`;
}
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
// Ответ: 'Hello World'

// Вопрос 18: Что будет содержаться в переменной time?
let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night';
console.log(time);   // 'Day'

