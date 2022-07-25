 "use strict";

// Lesson 25 Функции, стрелочные ф-ции

// классическая функция с аргументами
function showFirstMessage(text, name, age) {
    console.log(text, name, age);
}
showFirstMessage('Hello', 'Dima!', 37);

// локальная переменная, в примере ниже мы получим ошибку
function myAge() {
    let age = 37;
}
// console.log(age);

// глобальная переменная
let age2 = 18;
function myAge2() {
    age2 = 37;
}
myAge2();
console.log(age2);

// локальная и глобальная переменная
let age3 = 16;
function myAge3() {
   let age3 = 37;
   console.log(age3);
}
myAge3();
console.log(age3);

// локальная(внутрення) переменная в фун-и
function user() {
    let message = 'Hello';
    console.log(message);
}
user();   // undefined
console.log(message);  // будет ошибка, т.к. переменная видна только внутри функции

// глобальная(внешняя) переменная и функция
let userName = 'Dima';
function nameOfUsers() {
    userName = 'Karl';
    console.log(userName);
}
nameOfUsers();

// return; прекращение действия функции и такую функ-ю мы можем использовать много раз!
function calc(a, b) {
    // берем в () чтобы сгруппировать значения!
    return (a + b);
}
console.log(calc(4, 3));   // 7
console.log(calc(5, 6));   // 11
console.log(calc(20, 10));  // 30
// т.е. у нас каждый раз будет возвращаться сумма полученным аргументов!
// И одну и ту же фун-ю мы можем использовать многократоно! Только подставляя в нее необ. нам значения


// пример возврата во внешний мир значения своей локальной переменной
// т.е функция ниже вернет нам значение 50 переменной num 
let num = 15;
function ret() {
    let num = 50;
    return num;
}
ret();

// продолжение
let num2 = 15;
function ret2() {
    let num2 = 50;
    return num2;
}
// т.е. во внутрь перем-й anotherNum мы помещ-м результат работы фун-и ret2();
const anotherNum = ret2();
console.log(anotherNum);   // 50


// Способы обьявления функции
// Function declaration, это классический способ, создается еще до начала объв-я скрипта!
// такой вид функции можно вызвать еще до ее обьявления!
console.log(calc2(4, 3)); 
function calc2(a, b) {
    return (a + b);
}

// Function expression, синтаксис уже другой чем в примере выше
// создается только тогда когда доходит поток кода!
const logger = function() {
    console.log('Hello');
};
// такую фун-ю вызвать можно только после ее обьявления!
logger();

// или
let calcFunc = function calc22(a, b) {
    return (a + b);
};
calcFunc(9, 11);   // вернется 20

// Стрелочные функции =>
// в () мы помещаем арг-ты нашей функции или без () если аргумент один
const calc3 = (a, b) => {
    a = 1;
    b = 4;
    return a + b;
};
calc3();  // вернется 5

// или сокращенный вариант записи
const calc4 = (a, b) => a + b;
console.log(calc4(1, 4));   // 5 


// Lesson 26 Еще раз про аргументы функций

// функция, например для обмена валюты, изнач-но ф-я не знает какое значение аргумента в нее попадет
function convert(amount) {
    console.log(28 * amount);
}
// т.е. значение 500 мы передаем уже во время вызова фун-и
convert(500);

// изменим немного фун-ю выше, допустим мы не знаем какой у нас курс валюты и он приходит их банка
const usdCurr = 28;
function convert2(amount, curr) {
    console.log(curr * amount);
}
// т.е. значение 500 мы передаем уже во время вызова фун-и, 
// т.е фун-ю мы делаем универ-й и независящей от конкретных значений!
convert2(500, usdCurr);      // 14000


// Lesson 27 Про важность return
const usdCurr2 = 28;
const discount = 0.9;
// далее идет чистая функция которая возвращает результат своей работы и далее мы его сможем использовать
function convert3(amount, curr) {
    return curr * amount;
}
// след-я функция выдаст нам результат со скидкой
function promotion(result) {
    console.log(result * discount);
}
// далее мы вызываем фун-ю promotion, где арг-м выступает ф-я convert3 с перед-ми ей значениями
promotion(convert3(500, usdCurr2));
// строчку выше можно перписать след-м образом
// const res = convert3(500, usdCurr2));
// promotion(res);

// return может возвр-ть все что угодно
function promotion222(result) {
    return function() {
        console.log(1);
    };
}

// return мы можем писать и без значений!
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        // когда условие выполняется и ф-я test видит return, она прекр-т свою работу
        // подчеркивание return это не ошибка!
        if (i === 3) return
    }
    // до строчки ниже наш код просто не дойдет! из за return
    console.log('Done');
}
test();

// функция у нас всегда что возвращает, даже если она пустая!
function doNothing() {}
console.log(doNothing() === undefined);   // true



// Объект arguments - Внутри функции получить доступ к её аргументам можно через объект arguments
// т.е. arguments: Объект, похожий на массив и содержащий все аргументы, переданные в текущую функцию.
function func111(a, b, c, d) {
    console.log(arguments[0]);    // 7
    console.log(arguments[2]);    // 24
    console.log(arguments[3]);    // 199
}
func111(7, 12, 24, 199);

// arguments.length  свойство, содержащее число аргументов переданных в функцию.
// в примере ниже мы увидим кол-во арг-в перед-х в фун-ю calcArg
function calcArg() {
    return arguments.length;   
}
// далее в перем-ю argCalculate мы присваеваем фун-ю calcArg которой одновременно передаем в () аргументы
const argCalculate = calcArg(2, 23, 999, 4+3, 'Dima');
console.log(argCalculate);  // 5

// В этом примере мы определяем функцию, которая может сложить 2 или более чисел вместе.
function adder(base, one, two) {
    base = Number(base, one, two);
    for (let i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
}
adder(3, 9, 12);   // 24





// Задачки простые с интернета по фун-м

// Задача 1 Сделайте функцию, выводящую на экран ваше имя.
function myName() {
    // alert('Dima');
    console.log('Dima');
}
myName();

// Задача 2 Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
function sumOfNumber() {
    let num = 0;
    while (num < 100) {
        num++;
        console.log(num);
    }
}
// sumOfNumber();

// Задача 3 Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
function showCubeNumber(num) {
    let rez = num*num*num;
    console.log(rez);
}
showCubeNumber(3);

// Задача 4 Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное
// В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
function showPosotiveOrNegativeNumber(num) {
    if (num >= 0) {
        console.log('+++');
    }else{
        console.log('---');
    }
}
showPosotiveOrNegativeNumber(-57);

// Задача 5 Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
function sumOfThreeNumber(numOne, numTwo, numThree) {
    console.log(numOne + numTwo + numThree);
}
sumOfThreeNumber(2, 5, 10);

// Задача 6 Переменная в параметре функции
function func(num = 5) {
	console.log(num * num);
}
func(2);   // 4
func(3);   // 9
func();    // 25

function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func2(2, 3);  // 5
func2(3);     // 3
func2();      // 0