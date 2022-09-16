'use strict';
// Упражнение по написанию кода 20: Задания на работу с методами массивов

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
// films[0].id = 1;


// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Написать функцию showGoodFilms которая будет принимать 
// этот массив, а возвращать будет массив объектов только с теми фильмами у которых рейтинг больше или равен 8. 
// P/S Это довольно типичная задача в програм-и, вспомните на самых разных сайтах можно так фильт-ть любые товары фильмы и тд
function showGoodFilms(arr) {
    const rez = arr.filter( (rate) => rate.rating >= 8);
    // console.log(rez);   // [ {name: 'Titanic', rating: 9} {name: 'Matrix', rating: 8} ]
    return rez;
}
showGoodFilms(films);


// 2) Написать фун-ю showListOfFilms, кот-я будет принимать этот же массив, а возвр-ть будет строку, 
// которая содержит назв-я фильмов через запятую.
function showListOfFilms(arr) {
    const rez = arr.reduce( (sum, curr) => `${typeof(sum) === 'object' ? sum.name : sum}, ${curr.name}`);
    // console.log(rez);  // Titanic, Die hard 5, Matrix, Some bad film
    return rez;
}
showListOfFilms(films);


// 3) Написать фун-ю setFilmsIds, кот-я будет принимать этот же массив, а возвр-ть будет такой же массив с фильмами, 
// но у каждого фильма будет новое поле с id. Значение этого поля устан-ть по номерации фильма
function setFilmsIds(arr) {
    const rez = arr.map( (movie, i) => {
        // добавляем id фильмам и устанав-м нуменрацию, подр-е про map в конце кода
        movie.id = i;
        return movie;
    });
    // console.log(rez);   // {name: 'Titanic', rating: 9, id: 0} {name: 'Die hard 5', rating: 5, id: 1}...
    return rez;
}
const tranformedArray = setFilmsIds(films);


// 4) Запишите результат предыдущих функции в переменную tranformedArray. Напишите функцию checkFilms которая будет проверять,
// что в каждом из фильмов есть поле id. Если это так функция возвращает - true. Очевидно, что сейчас условие должно 
// выполняться если мы передаём checkFilms(tranformedArray). 
// Тут мы столкнемся с интересным моментом которые нужно запомнить!!!
// При срабатывании every на первом фильме он натыкается на id = 0; 0 - это неправда в логическом ключе, 
// поэтому и весь метод возвращает false
function checkFilms(arr) {
    const rez = arr.every(item => item.id || item.id === 0 ? true : false);
    // console.log(rez);   // true
    return rez;
}
checkFilms(tranformedArray);



// Упражнение по написанию кода 21: Задания на работу с методами массивов
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// 1) У нас есть небольшой массив с данными о доходах каждой торговой точки. Написать функцию getPositiveIncomeAmount которая 
// принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число) 
const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((sum, curr) => sum + curr.amount, 0);
    // const rez = data.filter( (item) => item.amount > 0).reduce((sum, curr) => sum + curr.amount, 0);
    // console.log(rez);  // 0: {amount: 2400} 1: {amount: 500} 2: {amount: 10400}
    // return rez;
};
getPositiveIncomeAmount(funds);


// 2) Написать функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит 
// отрицательное значение поля amount, то функция возвращает сумму всех значений (число). Если таких значения нет, запускается 
// функция с тем же массивом данных.
const getTotalIncomeAmount = (data) => {
    const rez = data.filter( (item) => item.amount < 0) ? data.reduce(
        (sum, curr) => sum + curr.amount, 0) : getPositiveIncomeAmount(data);
    // console.log(rez);  // -500
    return rez;
};
getTotalIncomeAmount(funds);


// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// Синтаксис
// const new_array = arr.map(function callback( currentValue[, index[, array]]) { // Возвращает элемент для new_array }
// Параметры:
// callback - Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое 
// значение добавляется в new_array. Функция callback, создающая элемент в новом массиве, принимает три аргумента:
// currentValue - Текущий обрабатываемый элемент массива.
// index (Необязательный) - Индекс текущего обрабатываемого элемента в массиве.
// array (Необязательный) - Массив, по которому осуществляется проход.