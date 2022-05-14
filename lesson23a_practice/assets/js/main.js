 "use strict";

// Lesson 22-23 Циклы и метки

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

