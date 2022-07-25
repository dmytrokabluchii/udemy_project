"use strict";

// Переменные
// Упражнение по написанию кода 1: Задание на создание правильных переменных
const userName = "John";
let userNumber = 25;
userNumber = 24;


// Типы данных
// Упражнение по написанию кода 2: Задание на создание правильных типов данных
let storeName = 'Veronika';
const storeDescription = {
    budget: 10000,
    employers: ['Dima', 'Kolja', 'Ivan'],
    products: {wine: 999, apple: 149},
    open: true
};


// Циклы и Условия
// Упражнение по написанию кода 3: Задания на использование циклов и условий

// Задача 1: при помощи цикла вывести числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой.
function firstTask() {
    let num = 5;
while (num < 11) {
    console.log(num);
    num++;
}
}
firstTask();

// задача 2: при помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке 
// (20 19 18...). Когда цикл дойдёт до числа 13 - остановить весь цикл.
function secondTask() {
for (let i = 20; i >= 10; i--) {
if ( i === 13) {
    break;
}
console.log(i);
}
}
secondTask();

// Задача 3: При помощи цикла for вывести четные числа от 2 до 10 вкл.
// % проверка на четность, если остаток от деления = 0 то число делится нацело, если число делится на 2 то оно четное
for (let i = 2; i <= 10; i++) {
if (i % 2 === 0) {
    console.log(i);
}  
}
// и 2-й вариант решения, в шаге прибавляем не 1 каждый раз, а 2
function thirdTask() {
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
}
thirdTask();

// Задача 4: Переписать цикл for на вариант с while. Результат должен остаться точно таким же.
// Не создавайте бесконечный цикл, иначе браузер может зависнуть!
// Вариант решения задачи 3 с while
let evenNumber = 2;
while (evenNumber <= 10) {
console.log(evenNumber);
evenNumber += 2;
}

// цикл ниже нужно переписать на вариант с while. Это вариант на поиск нечетных чисел
for (let i = 2; i <= 16; i++) {
if (i % 2 === 0) {
    continue;
} else {
    console.log(i);
}
}

// мой вариант
function fourthTask() {
let notEvenNumber = 2;
while ( notEvenNumber <= 15 ) {
    notEvenNumber ++;
    if (notEvenNumber % 2 === 0) {
        continue;
    } else {
        console.log(notEvenNumber);
    }
}
}
fourthTask();

// вариант с ответов
function fourthTask() {
let notEvenNumber = 2;
while ( notEvenNumber <= 16 ) {
    if (notEvenNumber % 2 === 0) {
        notEvenNumber ++;
        continue;
    } else {
        console.log(notEvenNumber);
    }
    notEvenNumber ++;
}
}
fourthTask();

// Задача 5 Заполнить массив цифрами от 5-10
let arr = [5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]); // выведет 5, 6, 7, 8, 9, 10
}
// или, в примере мы просто перебираем циклом массив, задавая позиции перебора от 0(5) до 5(т.е.10)
let arrTwo = [5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 5; i++) {
console.log(arrTwo[i]); 
}

// Заполняем массив данными по шаблону
function fifthTask() {
const arrayOfNumbers = [];
// Пишем решение вот тут
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
// Не трогаем
return arrayOfNumbers;
}
fifthTask();



// Упражнение по написанию кода 4: (*) Продвинутые задания на использование циклов и условий

// Место для первой задачи
// заполнит новый массив result числами из старого. Должен получится точно такой же массив
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    // длину массива можно получить вот так: arr.length.
    // Теперь наш цикл получился универсальным и автоматически может перебирать массивы любой длины.
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask();

// Место для второй задачи
// Изменить массив так, что бы все числа были увеличены в 2 раза, а если попадется строка - добавить к нец " - done"
// Для определения типа данных использовать typeof();
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        }else if (typeof(data[i]) === 'string'){
            data[i] += " - done";
            // или
            // data[i] = data[i] + " - done";
            // или
            // data[i] = `${data[i]} - done`;
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}
secondTask();

// Место для третьей задачи
// Развернуть массив наоборот при помощи цикла
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[(data.length - i)];
    }
    console.log(result);
    // Не трогаем
    return result;
}
thirdTask();



// 5: (**) Задача на формирование фигуры

// Построить фигуру из 6*
const lines2 = 5;  // т.к. нам нужно 6 рядов со *
let result2 = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 1; i < lines2 + 2; i++) {
    for(let j = 0; j < i; j++) {
        // добавляем * к результату
        result2 += '*';
    }
    // формируем перенос строки
    result2 += '\n';
}
console.log(result2);

// Построить фигуру из * из задания
const lines = 5;  // т.к. нам нужно 6 рядов со *
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }    
    // в (j < 2 * i + 1) сначала делается *, потом +, потом сравнение <
    for(let j = 0; j < 2 * i + 1; j++) {
        // добавляем * к результату
        result += '*';
    }
    // формируем перенос строки
    result += '\n';
}
console.log(result);



// 6: Задание на работу с Function/Функциями

// Задача 1. Создать ф-ю которая будет принимать на вход 1 аргумент с именем человека и возвр-ть строку
// Это класич. функция-модификатор, которые далее будем часто испол-ть!
function sayHello(name) {
    return `Привет, ${name}`;
    // или в консоль вывод
    // return console.log(`Привет, ${name}`);
}
sayHello('Антон');  // вернется нам в браузере строка 'Привет, Антон'

// Задача 2. Создать ф-ю которая будет принимать в себя 1 аргумент в виде целого числа и
// возвращает массив их 3-х чисел: одно на 1 меньше, сам аргумент и число на 1 больше
function returnNeighboringNumbers(num) {
    const one = num - 1;
    const three = num + 1;
    return [one, num, three];
}
returnNeighboringNumbers(5);

// Задача 3.
function getMathResult(numOneBase, numTwoProgression) {
    if(typeof numTwoProgression !=='number' || numTwoProgression <= 0) {
        return numOneBase;
    }
    let progression = '';
    for (let i = 1; i <= numTwoProgression; i++) {
        if (i === numTwoProgression) {
            progression += `${numOneBase * i}`;
        }else{
            progression += `${numOneBase * i}---`;
            // или можно: progression = progression + numOneBase * i + '---';
        }
    }
    return progression;
}
getMathResult(10, 5); 



// 7: (*) Продвинутые задания на использование функций
// Место для первой задачи
// Создать функцию которая будет вычислять объём и площадь полной поверхности куба. 
// Функция принимает в себя целое число со значением длины ребра куба. 
// Ответ записать в строку. Если в функцию попал неправильный аргумент или вычислите значение невозможно 
// вернуть строку с ошибкой. Не использовать оператор степени **.
// Объем куба, умножьте длину ребра куба саму на себя три раза. Если s — длина ребра куба, то s * s * s = s3.
// Площадь (S) поверхности куба равна произведению числа 6 на длину его ребра в квадрате. S = 6 * a2(во 2-й степени) 
// Пример формулы в работе, если длина ребра 12 см.: S = 6 ⋅ (12 см)2 = 864 см2.
const numForCalculateCube = 15;
function calculateVolumeAndArea(lengthSideOfCube) {
    let rezVolumeOfCube;
    let rezAreaOfCube;
    // Метод Number.isInteger() определяет, является ли переданное значение целым числом.
    if (typeof(lengthSideOfCube) !== 'number' || lengthSideOfCube < 0 || Number.isInteger(lengthSideOfCube) === false) {
        // или (!Number.isInteger(lengthSideOfCube))
        return 'При вычислении произошла ошибка';
    }   
        rezVolumeOfCube = lengthSideOfCube * lengthSideOfCube * lengthSideOfCube;
        rezAreaOfCube = 6 * (lengthSideOfCube * lengthSideOfCube);
        return `Объем куба: ${rezVolumeOfCube}, площадь всей поверхности: ${rezAreaOfCube}`;
}
calculateVolumeAndArea(numForCalculateCube);

// Место для второй задачи
// Написать фун-ю, которая будет определять номер купе по переданному ей номеру места
// Фун-я принимакет только целое число от 1-36. Если переданный аргумент не число, отриц. или дробное - возвр. сооб
// Ошибка. Проверьте правильность введенного номера места. Если число 0 или 36, то сооб. - Таких мест в вагоне нет
function getCoupeNumber(numForCompartment) {
    if (Number.isInteger(numForCompartment) === false || numForCompartment < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    else if (numForCompartment === 0 || numForCompartment > 36) {
        return 'Таких мест в вагоне не существует';
    }else{
        let rez = (numForCompartment / 4);
        return Math.ceil(rez);
    }
}
getCoupeNumber(33);

// или вариант Вани с юдеми
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}
getCoupeNumber(33);



// 8: (*) Продвинутые задания на использование функций

// Место для первой задачи
// Создать фун-ю которая принимает в себя целое число минут и возвращает время в нужном формате строки
// Если вместо аргумента приходит не число, дробное, или отрицательное - фун-я возвращает строку:
// "Ошибка, проверьте данные" . Пока ограни-я макс. 600мин(10 часов)
function getTimeFromMinutes(takeMinutes) {
        let rezHour = takeMinutes / 60;
        let rezMinutes = takeMinutes % 60;
    if (Number.isInteger(takeMinutes) === false || takeMinutes < 0) {
        return "Ошибка, проверьте данные";
        // указываем диапазон от и до с помощью &&
    } else if (takeMinutes >= 0 && takeMinutes < 60 || takeMinutes >= 300 && takeMinutes <= 600) {
        // Метод Math.floor() - Округляет аргумент вниз до ближайшего меньшего целого значения.
        return `Это ${Math.floor(rezHour)} часов и ${rezMinutes} минут`;
    } else if (takeMinutes >= 60 && takeMinutes <= 120) {
        return `Это ${Math.floor(rezHour)} час и ${rezMinutes} минут`;
    } else if (takeMinutes >= 120 && takeMinutes <= 300) {
        return `Это ${Math.floor(rezHour)} часа и ${rezMinutes} минут`;
    }else{
        return `${takeMinutes} это слишком большое число, укажите значение менее 600`;
    }
}
getTimeFromMinutes(250);

// или лучше так сделать
function getTimeFromMinutes(takeMinutes) {
    if (Number.isInteger(takeMinutes) === false || takeMinutes < 0) {
        return "Ошибка, проверьте данные";
    }
    const rezHour = Math.floor(takeMinutes / 60);
    const rezMinutes = takeMinutes % 60;
    let hourStr = '';
    switch(rezHour) {
        case 0:
            hourStr = 'часов';
            break;
        case 1:
            hourStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hourStr = 'часа';
            break;
        default:
            hourStr = 'часов';
    }
    return `Это ${rezHour} ${hourStr} и ${rezMinutes} минут`;
}
getTimeFromMinutes(250);

// Место для второй задачи
// Написать фун-ю которая принимает в себя 4 числа и возвр-т самое большое из них.
// Если один из аргументов не явл-ся числом - возвр-ся 0. Дробные числа разрешены.
function findMaxNumber(numOne, numTwo, numThree, numFour) {
   if(typeof(numOne, numTwo, numThree, numFour) !== 'number') {
    return 0;
   }else{
    return Math.max(numOne, numTwo, numThree, numFour);
   }
}
findMaxNumber(2, 789, 789.7, '-7897');



// 9: (**) Задача с собеседований на числа Фибоначчи
// Числа Фибона́ччи это элементы числовой последовательности, в которой первые два числа равны 0 и 1, 
// а каждое последующее число равно сумме двух предыдущих чисел (0, 1, 1, 2, 3, 5, 8, 13, 21, 34 и тд).
// Последовательность чисел опр-я формулой Fn = Fn-1 + Fn-2. То есть, след-е число получ-я как сумма двух предыдущих.

// Создать фун-ю которая принимает 1 аргумент-целое полож. число. Она должна возвращать строку, в которой будут
// через пробел выведены числа Фибоначчи. Их кол-во должно быть равно перед-му арг-ту.
// Если передан-й аргумент не число - вернуть пустую строку. Решать без рекурсии!
function fib(numFib) {
    // проверка на не число || отриц. число или 0 || не дробное число || больше 100
    if(typeof(numFib) !== 'number' || numFib <= 0 || !Number.isInteger(numFib) || numFib > 100) {
        return '';
    }
    let a = 0, b = 1;
    let rezFib = '';
    for(let i = 0; i < numFib; i++) {
        if (i + 1 === numFib) {
            rezFib += `${a}`;
        }else{
            rezFib += `${a} `;
        }
        let c = a + b;
        a = b;
        b = c; 
    }
    return rezFib;
}
fib(9);
