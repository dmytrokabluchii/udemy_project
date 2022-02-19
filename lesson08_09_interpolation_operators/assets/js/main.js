"use strict";

// Lesson 08 Interpolation (ES6)
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// let user = "Dima";
// alert(`Hello, ${user}!`);


// Lesson 09 Operators
// оператор сложения и унарный оператор
console.log(4 + '5');
console.log(4 + +'5');

// оператор инкримент ++ и дикремент --
let incr = 10,
    decr = 10;

// постфиксная форма записи
// incr ++;
// decr --;   
// префиксная форма записи
// ++incr;
// --decr;   

// console.log(incr++);
// console.log(decr--);
console.log(++incr);
console.log(--decr);

// остаток от деления, оператор %
console.log(5%2);

// оператор сравнения ==
console.log(4*2 == 8);
// строгое сравнение
console.log(4*2 === '8');

// операторы && (и) и || (или)
const isChecked = false,
      isClose = false;

// console.log(isChecked && isClose);
console.log(isChecked || isClose);

// оператор отрицания !
console.log(isChecked || !isClose);





