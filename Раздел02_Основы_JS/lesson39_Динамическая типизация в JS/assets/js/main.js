 "use strict";

// Lesson 39. Динамическая типизация в JS

// превр-е в строку String
console.log(typeof(String(23)));   // string
// конкатенация, Конкатенация — это слово означает «объединить». Объединением строк в JS заним-ся оператор плюс (+)
// т.е. при сложении любого типа данных со строкой у нас всегда будет строка!
console.log(typeof(5 + ''));  // string
console.log(typeof(5));       // number

const num = 5;
console.log('https://vk.com/catalog/' + num);   // https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize);   // 26px

// превр-е в число 
// 1-й способ, оператор Number 
console.log(typeof(Number('34')));    // number
console.log(typeof(Number('Dima')));  // number
// 2-й способ, унарный плюс +
console.log(typeof(+'45'));           // number
// 3-й способ, parseInt
// Функция parseInt() принимает строку в качестве аргум-а и возвращает целое число в соот-и с указ-м основанием системы счисления
console.log(typeof(parseInt('15px', 10)));  // number
let question = +prompt('Hello', '');
console.log(question);

// to boolean
// запишем все что у нас будет false(неправда), это: 0, '', null, underfined, NaN;
// 1-й способ, нативное преобразование
let switcher = null;  // т.е. данная перем-я ничего не содержит, она null
if (switcher) {
    console.log('working...');
}                  // в данном случае у нас в консоль ничего не выв-ся т.к. null это false и условие не сработает!
// но если изменим знач-е перем-й, то будет уже true и в консоль у нас вывед-ся сооб-е! Только знач-е ниже должно стоять перед if
switcher = 1;    // working...

// 2-й способ, тип boolean, им польз-ся редко!
console.log(typeof(Boolean('56')));   // boolean

// 3-й способ, !! т.е. 2 знака отрицания
console.log(typeof(!!'56'));    // boolean

