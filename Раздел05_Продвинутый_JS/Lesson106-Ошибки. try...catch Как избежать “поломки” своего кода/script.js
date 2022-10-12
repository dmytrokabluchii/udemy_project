'use strict';
// Lesson 106. Ошибки. try...catch Как избежать “поломки” своего кода

// Неважно, насколько мы хороши в программировании, иногда наши скрипты содержат ошибки. Они могут возникать 
// из-за наших промахов, неожиданного ввода пользователя, неправильного ответа сервера и по тысяче других причин.
// Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль.
// Но есть синт-я конструкция try..catch, которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное.
// Конструкция try..catch состоит из двух основных блоков: try, и затем catch

// Базовый синтаксис
// try {
//     console.log('Normal');     // Normal
// } catch(e) {
//     console.log('error');
// }
// console.log('This code will be working');
// Если блок с try выпол-ся корректно и без ошибок, то блок с catch даже не запустится
// Но если в блоке с try будет ошибка(любая), то мы перем-ся в блок catch, он как раз и служит для отлавливания ошибок
// и что-то с ними потом делает 
// Код написанный после конст-и try...catch будет продол-т работать!

// В блок catch также приходит объект ошибки который мы можем испол-ть
// К объекту error у нас идут 3 сущности внутри .name .message .stack
// .name - имя ошибки, .message - текст ошибки, .stack - какие функ-и привели к этой ошибке
// Также как и в промисах мы можем дописать блок finally, котрый будет выполнен при любых обстоятельствах
// Зачастую этот блок испол-т если мы сомневаемся в каком-то участке кода!
try {
    console.log('Normal'); 
    console.log(a);         // ReferenceError: a is not defined
    console.log('result');    
} catch(error) {
    console.log(error.name);       // ReferenceError
    console.log(error.message);    // a is not defined
    console.log(error.stack);      // ReferenceError: a is not defined at script.js:27
} finally {
    console.log('code testing try/catch');         // code testing try/catch
}
console.log('This code will be working at all');   // This code will be working at all

// Если у нас где-то возможно появление ошибки, которая может остановить весь послед-й скрипт, мы используем констр-ю try...catch!