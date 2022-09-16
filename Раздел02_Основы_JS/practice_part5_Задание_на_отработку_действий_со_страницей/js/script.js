/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), 
poster = document.querySelector('.promo__bg'),
genre = poster.querySelector('.promo__genre'),
movieList = document.querySelector('.promo__interactive-list');

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// advImage[0].remove();    // удалить весь блок с рекламой
adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'Драма';
// genreMovies[0].replaceWith('Драма');

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
poster.style.background = 'url(img/bg.jpg)';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту
// сначала удаляем фильмы из верстки, мы млжем это сделать так
// movieList.forEach(item => {
//     item.remove();
// });
// но это будет не совсем верно, т.к. мы удалим элементы вместе с li а не очистим их, а очистим их так
// movieList должен быть присвоен методом querySelector
movieList.innerHTML = '';

// сортируем их по алфавиту
movieDB.movies.sort();

// 5) Добавить нумерацию выведенных фильмов 
// метод .innerHTML также позволяет нам и получать элементы со стр-цы в HTML формате
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});
