'use strict';

// Lesson 59. Map
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа

// Методы и свойства:
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

const user = {
  name: 'Dima',
  surname: 'Kabl',
  birhday: '11/08/1984',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
};
console.log(user);
// узнать тип данных в ключе
console.log(typeof(Object.keys(user)[0]));   // string

// напоминаю что ключи не могут быть объектами
const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
];
const map = new Map();

// map.set(key, value) – записывает по ключу key значение value.
map.set(shops[0], 5000);
map.set(shops[1], 2000);
map.set(shops[2], 500);
// т.е. мы имеем обычный объект, где 1-е св-во тоже явл. объектом и у этого ключа есть значенин 5000
console.log(map);    // Map(1) { { rice: 500 } => 5000 }

// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
console.log(map.get(shops[0]));    // 5000

// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// проверяет сущ-т ли объект внутри карты
console.log(map.has(shops[0]));    // true

// map.delete(key) – удаляет элемент по ключу key.
map.delete(shops[0]);
console.log(map);  // Map(2) {{…} => 2000, {…} => 500}

// map.clear() – очищает коллекцию от всех элементов.
// map.clear();
// console.log(map);   // Map(0) {size: 0}

// map.size – возвращает текущее количество элементов.
console.log(map.size);  // 2

// внутри мы увидим массив массивов, хотя браузер и показывает их как объекты, но это массивы [[Entries]]
console.log(map);   // Map(2) {{…} => 2000, {…} => 500}


// Для перебора коллекции Map есть 3 метода:
// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// получить карту из текущего объекта, команда entries
const userMap = new Map(Object.entries(user));
console.log(userMap);    // Map(4) {'name' => 'Dima', 'surname' => 'Kabl', 'birhday' => '11/08/1984', 'showMyPublicData' => ƒ}

// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект
const newUserMap = Object.fromEntries(userMap);
console.log(newUserMap);   // {name: 'Dima', surname: 'Kabl', birhday: '11/08/1984', showMyPublicData: ƒ}
