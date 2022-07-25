'use strict';
// Lesson 53. (д) Оператор нулевого слияния (Nullish, ??) ES11

// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, 
// если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.
// Этот оператор можно рассматривать как частный случай логического оператора ИЛИ (||), который возвращает правый операнд

// Пример
let userName = null;
console.log(userName ?? 'User');   // User

let userName2 = 0;
console.log(userName2 ?? 'User');  // Dima


const box = document.querySelector('.box');
const newHeight = 100;
const newWidth = 400;

// фун-я которая меняет параметры элемента
function changeParams(elem, h, w) {
    // интерполяция позвол-т произ-ть операции внутри себя, а оператор || верн-т первое правдивое значение
    // elem.style.height = `${h || 200}px`;
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // приоритет у ?? как и у || одинаковый и довольно низкий
    // elem.innerHTML = h ?? 200 * w ?? 200;  // 100
    elem.innerHTML = (h ?? 200) * (w ?? 200); // 4000
}
changeParams(box, newHeight, newWidth);

// цепочка для получ-я необ-го результата
let userName3;
let userKey;
console.log(userName3 ?? userKey ?? 'User');  

// оператор ?? не может работать вместе с && и ||
// console.log(userName3 || userKey ?? 'User');   // error
