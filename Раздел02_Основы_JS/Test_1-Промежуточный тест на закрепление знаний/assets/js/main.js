 "use strict";

// Тест 1: Промежуточный тест на закрепление знаний


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

