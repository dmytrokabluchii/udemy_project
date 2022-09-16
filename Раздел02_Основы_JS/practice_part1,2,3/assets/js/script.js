'use strict';

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 1)
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

// или 
// function films () {
//     const numbersOfFilms = parseInt(document.getElementById('number__of_films').value);
//     console.log(numbersOfFilms);
// }

// 3) Задаем вопросы пользователю
// const lastWatchMovies = prompt('Один из последних просмотренных фильмов?', ''),
//       lastWatchMoviesMark = prompt('На сколько оцените его?', ''),
//       lastWatchMovies2 = prompt('Один из последних просмотренных фильмов?', ''),
//       lastWatchMoviesMark2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastWatchMovies] = lastWatchMoviesMark;
// personalMovieDB.movies[lastWatchMovies2] = lastWatchMoviesMark2;
// console.log(personalMovieDB);

// Lesson 29 Практика , ч3. Используем функции
// 1) Первую часть задания повторить по уроку
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

// 2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    // Lesson 24. Практика, ч2. Применяем условия и циклы
    // 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
    for (let i = 0; i < 2; i++) {
        // Метод trim() возвр-т строку с вырез-ми пробельными символами с её концов. Он не изменяет знач-е самой строки
        const lastWatchMovies = prompt('Один из последних просмотренных фильмов?', '').trim(),
        lastWatchMoviesMark = prompt('На сколько оцените его?', '').trim();
        // 2) Пользователь не должен оставит ответ в виде пустой стоки, отменить ответ или ввести название 
        // длинее 50 символов. Если это произойдет - возвращаем пользователя к вопросам опять. 
        // к строке можно обратится через str.length и получить ее длину

        // если пользователь не (!=) нажал отмену(null)
        if (lastWatchMovies != null && lastWatchMoviesMark != null && 
            // не равен пустой строке != ''
            lastWatchMovies != '' && lastWatchMoviesMark != '' && 
            // название не длинее 50 символов
            lastWatchMovies.length < 50) {
                personalMovieDB.movies[lastWatchMovies] = lastWatchMoviesMark;
                console.log('done!');
        }else{
            console.log('error');
            // чтобы вернуться на 1 цикл назад и повторно задать вопросы пользователю
            i--;
        }
    }
    // Переписать цикл выше еще 2-мя способами
}
rememberMyFilms();


function detectPersonalLevel() {
//  Задача 3, ч2) При помощи условий проверить personalMovieDB.count, 
// если он меньше 10: вывести сооб-е "Просмотрено мало фильмов"
// если от 10-30 - "Вы классический зритель", если больше - "Вы киноман"
// если не подошео ни один вариант - "Произошла ошибка"
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();

// console.log(personalMovieDB);


// Lesson 29 Практика , ч3. Используем функции
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    // если база не скрыта, то выполнится след-е...
    // в условие(!hidden) попадает значение false c personalMovieDB.privat и ! прев-т его в true, соот. условие выпол-я
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
// ниже мы значение personalMovieDB.privat передаем в аргумент (hidden) фун-и showMyDB
showMyDB(personalMovieDB.privat);

// Lesson 29 Практика , ч3. Используем функции
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
// P.S. Функции вызывать не обязательно
// Код возьмите из предыдущего домашнего задания

function writeYourGenres() {
    // в данном случае начинать нужно именно с 1, чтобы не было 0 номера
    for ( let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // ответ записываем в массив
        // [i - 1] т.к. нумерацию мы выводим только для пользователя и когда мы зап-м в массив мы должны нач-ть с 0
        personalMovieDB.genres[i - 1] = genre;
        // код выше можно переписать в 1 строчку не используя const, т.е. ответ пользователя мы сразу передаём в массив
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
// writeYourGenres();