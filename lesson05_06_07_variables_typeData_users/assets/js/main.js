"use strict";

// Lesson 05 Variables/ Переменные
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// будет ошибка т.к. это уже константа
// leftBorderWidth = 2; 

// а вот в данном случае ошибки уже не будет, т.к. мы создаем обьект, a: это уже ключ а 50 - его значение
const obj = {
    a: 50
};
obj.a = 12;
console.log(obj);


// Lesson 06 TypeData / Типы данных 
let numbers = 4.6;
// NAN
console.log('string' * 9);

// null
// console.log(something);

// underfined
let one;
console.log(one); 


// Object
const user = {
    name: 'Dima',
    age:37,
    isMarried: true
};
console.log(user.name);
// есть еще один вариан обращения к св-ву обьекта(но его лучше избегать)
console.log(user["name"]);

// Array или массив - может содержать в себе, как и обьект все виды данных
let arr = ['plum.jpg', 6, 'apple', {}, [] ];
// пример обращения к элементу массива, нумерация начинается с 0!
console.log(arr[2]);


// Lesson 07 connection with users
// alert('Hello');

// Если пользователь нужно задать вопрос с вариантами ответе да/нет
// let resultUser = confirm('Are you here?');
// console.log(resultUser);

// Если от пользователя нужен конкретный ответ где он сможет его напечатать
// let answerUser = prompt('Are you 18 year old?', '18');
// console.log(answerUser);

// что-бы узнать какой тип данных исполь-ся испол. метод typeof
// console.log(typeof(answerUser));

// на выходе у нас будет строка, для перевода в число испол. +
// let answerUser = +prompt('Are you 18 year old?', '18');
// console.log(typeof(answerUser));
// console.log((answerUser + 10));

// поместим полученные данные в массив
const answerUsers = [];

answerUsers[0] = prompt('What your name?', '');
answerUsers[1] = prompt('What your surname?', '');
answerUsers[2] = prompt('How old You ?', '');

// поработаем со страницей через устаревший document.write, для теста (выводит на страницу наш текст) 
// document.write('Hello');

// выведим массив с нашими ответами в браузер
document.write(answerUsers );

