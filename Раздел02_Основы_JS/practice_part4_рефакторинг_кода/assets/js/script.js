'use strict';

// 37. Практика , ч4. Используем объекты, рефакторинг кода

// 1) Переписать сделанное ранее таким образом что-бы все функции стали стали методами объекта personalMovieDB
const personalMovieDB = {
    // ключу count ставим значение 0 по умолчанию
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            // Метод trim() возвр-т строку с вырез-ми пробельными символами с её концов. Он не изменяет знач-е самой строки
            const lastWatchMovies = prompt('Один из последних просмотренных фильмов?', '').trim(),
            lastWatchMoviesMark = prompt('На сколько оцените его?', '').trim();
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        // если база не скрыта, то выполнится след-е...
        // в условие(!hidden) попадает значение false c personalMovieDB.privat и ! прев-т его в true, соот. условие выпол-я
        if (!hidden) {
            console.log(personalMovieDB);
        }
        // ниже мы значение personalMovieDB.privat передаем в аргумент (hidden) фун-и showMyDB
        // showMyDB(personalMovieDB.privat);
    },
    // 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять св-во privat, 
    // если он false - он перекл-т его в true, если true - перекл-т его в false. Протестировать вместе с showMyDB
    toggleVisibleMyDB: () => {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
   /*  writeYourGenres: () => {
        // в данном случае начинать нужно именно с 1, чтобы не было 0 номера
        for ( let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // 3) В этом методе запретить пользователю оставить пустую стоку или нажать "отмена", если он все же сделал это
            // возвр-ть его к этому же вопросу.
            if (genre === null && genre === '' ) {
                console.log('Вы ввели неккоректные данные');
                // откатываемся на 1 итерацию(повторение) назад 
                i --;
            }else{
                // [i - 1] т.к. нумерацию мы выводим только для пользователя и когда мы зап-м в массив мы должны нач-ть с 0
                personalMovieDB.genres[i - 1] = genre;
            }   
        }
        //  После того как все жанры введены, испол-я forEach вывести в консоль сооб-e
        personalMovieDB.genres.forEach((item, i) => {
            // {i + 1} т.к. мы работ-м с об. пользователем и нумер-я должна быть с 1, а не с 0
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }, */   
    // Альтернитив-й варинт решения
    writeYourGenres2: () => {
        for ( let i = 1; i < 2; i++) {
            let genre = prompt(`Введите ваши любимые жанры через запятую ${i}`); 
            if (genre === null && genre === '' ) {
                console.log('Вы ввели неккоректные данные');
                i --;
            }else{
                personalMovieDB.genres = genre.split(', ');
                // отсортирует ответы по алфавиту
                personalMovieDB.genres.sort();
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
