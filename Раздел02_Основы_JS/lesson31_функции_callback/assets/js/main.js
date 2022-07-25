 "use strict";

// Lesson 31 Функции callback
// Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента, 
// которая затем вызывается по завершению какого-либо действия.
function first() {
    // это фун-я выпол-ся с задержкой в 500мс
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second();

// Пример классической callback фун-и
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
// далее в аргумент lang мы перед-м строку 'JS', а в арг-т callback анонимную фун-ю(с .log('Я прошел этот урок!'))
learnJS('JS', function(){
    console.log('Я прошел этот урок!');
});

//  далее немного доработает функ-ю выше, т.к. в примере выше мы более не сможем обр-ся к анонимной фун-и
function learnJS2(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок!');
}
// далее в фун-ю learnJS мы перед-м в 1-й арг-т строку 'JS', а во 2-й арг-т фун-ю done и пишем ее назв-е без ()!
// т.к. нам не нужно вызывать эту фун-ю, мы ее перед-м что бы в дальнейшем ее исполь-ть!
learnJS2('JS', done);


// пример синхронного колбэка, поскольку функция processUserInput выполняется синхронно(мгновенно)
function greeting(name) {
    alert('Hello ' + name);
}
// и с задержкой в 2.5 сек
// function greeting(name) {
//     setTimeout(function(){
//         alert('Hello ' + name);
//     }, 2500);
// }
function processUserInput(callback) {
    let name2 = prompt('Please enter your name');
    // запускаем нашу callback фун-ю и в качестве аргумента перед-м в неё резул-т перем-й name2 
    callback(name2);
}
processUserInput(greeting);

// продолжаем
function aboutMe(age) {
    alert('Your age is ' + age);
}
function questionForMe(callbackQuestion) {
    let questionForUser = prompt('How old you?');
    callbackQuestion(questionForUser);
}
questionForMe(aboutMe);

// пример асинхронного колбэка. Колбэки часто испол-ся для прод-я выпол-я кода после завер-я асинхронной операции - 
// они называются асинхронными колбэками. Испол-ся специальный синтаксис async/await
// async ставится перед функцией(У async один простой смысл: эта функция всегда возвращает промис);
// Ключ-е слово async позв-т сделать из обычной фун-и (function declaration или function expression) асинхронную фун-ю 
// (async function). Такая функция делает две вещи:
// - Оборачивает возвращаемое значение в Promise
// - Позволяет использовать ключевое слово await
// await заставит интерпретатор JS ждать до тех пор, пока промис справа от await не выполнится. 
// После чего оно вернёт его результат, и выполнение кода продолжится.
// Метод fetch() может отправлять сетевые запросы на сервер и получать информацию с сервера.
async function pageLoader(callback) {
    const data = await fetch('/ru/docs/Glossary/Callback_function');
    callback(data);
}
function onPageLoadingFinished(pageData) {
    console.log('Page was sucessfully loaded!');
    console.log('Response:');
    console.log(pageData);
}
pageLoader(onPageLoadingFinished);


