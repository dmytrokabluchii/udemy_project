'use strict';
// Lesson 95. Как сохранить данные без БД. Работа с localStorage
// Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.
// Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы (в случае sessionStorage) 
// и даже после перезапуска браузера (при использовании localStorage). Скоро мы это увидим.
// Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:
// - setItem(key, value) – сохранить пару ключ/значение.
// где 1-м аргум-м перед-м название ключа(название может быть каким угодно), а 2-й арг-т значение ключа
localStorage.setItem('number', 5);
sessionStorage.setItem('number2', 10);
// И этот ключ: 'number' и его значение: 5, не пропадет даже после перезагрузки стр-цы

// - removeItem(key) – удалить данные с ключом key.
// localStorage.removeItem('number');

// - clear() – удалить всё.
// localStorage.clear();

// - getItem(key) – получить данные по ключу key.
console.log(localStorage.getItem('number'));  // 5 или null - если ключ будет удален методом removeItem() или clear()


// Поексперементируем с формой на сайте, зададим и сохраним локал-е настройки на домене, но сперва получим необ-е значения
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      changeButton = document.querySelector('#color');

// Сделаем флажок на нашем checkbox в форме отмеченным
// Когда польз-ль заходит на стр-цу мы пров-м localStorage и если там есть ключ 'isChecked',то мы ставим "галочку" в соот. полож-е
// И если такого ключа не будет то мы получим null, а это в лог-м контексте неправда и условие не пройдет
if(localStorage.getItem('isChecked')) {
    // у checkbox есть св-во checkedб т.е. мы програмно ставим "галочку" в нашей форме
    checkbox.checked = true;
}

// При каждом заходе на стр-цу будем пров-ть есть ли такая запись и если она есть то перекр-м нашу форму
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

// Навесим событие на измен-е сост-я checkbox
checkbox.addEventListener('change', () => {
    // обр-ся к localStorage и при измен-и положения checkbox мы будем измен-ть то что там наход-ся
    // испол метод setItem в () запишем ключ: 'isCheked' и значение: true
    // т.е. мы будем измен-ть локал-е хран-ще при клике на "галочку"
    localStorage.setItem('isChecked', true);
});

// Теперь поменяем цвет формы при клике на кнопку
changeButton.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        // и если условие выше выпол-ся то удалим наш ключ
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        // окрасим форму в соот. цвет
        form.style.backgroundColor = 'red';
    }
});

// В localStorage мы можем хранить не только примит-е типы данных, но и объекты и массивы
const persone = {
    name: 'Dima',
    age: 37
};
// Но в таком случае нам нужно сделать реал-ю наших данных(что не получить просто object), например перевести в формат json
const serializedPersone = JSON.stringify(persone);
// сохраним персонажа выше в нашем localStorage
localStorage.setItem('dima', serializedPersone);
console.log(JSON.parse(localStorage.getItem('dima')));    // {name: 'Dima', age: 37}
// Т.е. в консоле выше мы увидем простой JS объект с кот-м можно далее работать

// localStorage.setItem('dima', persone);
// console.log(localStorage.getItem('dima'));  // [object Object] - в данном случае наш объект превр-ся в строку и она неинф-на




// LocalStorage, sessionStorage
// Но ведь у нас уже есть куки. Зачем тогда эти объекты?
// В отличие от куки, объекты веб-хранилища не отправляются на сервер при каждом запросе. Поэтому мы можем хранить гораздо 
// больше данных. Большинство браузеров могут сохранить как минимум 2 мегабайта данных (или больше), и этот размер можно 
// поменять в настройках. 
// Ещё одно отличие от куки – сервер не может манипулировать объектами хранилища через HTTP-заголовки. 
// Всё делается при помощи JavaScript.
// Хранилище привязано к источнику (домен/протокол/порт). Это значит, что разные протоколы или поддомены определяют разные 
// объекты хранилища, и они не могут получить доступ к данным друг друга.
// Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:
// - setItem(key, value) – сохранить пару ключ/значение.
// - getItem(key) – получить данные по ключу key.
// - removeItem(key) – удалить данные с ключом key.
// - clear() – удалить всё.
// - key(index) – получить ключ на заданной позиции.
// К сожалению, объекты веб-хранилища нельзя перебрать в цикле, они не итерируемы. Но можно пройти по ним, как по массивам:
// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
// }
// - length – количество элементов в хранилище.
// Как видим, интерфейс похож на Map (setItem/getItem/removeItem), но также запоминается порядок элементов, и можно получить 
// доступ к элементу по индексу – key(index).


// БД - База данных — это место для хранения данных. Используется в том числе в клиент-серверной архитектуре. 
// Это все интернет-магазины, сайты кинотеатров или авиабилетов... Вы делаете заказ, а система сохраняет ваши данные в базе.
// Подр-е про БД: https://habr.com/ru/post/555760/
