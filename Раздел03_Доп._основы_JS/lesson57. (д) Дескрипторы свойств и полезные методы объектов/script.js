'use strict';

// Lesson 57. (д) Дескрипторы свойств и полезные методы объектов

// https://learn.javascript.ru/property-descriptors
// Флаги и дескрипторы свойств
// До этого момента мы рассматривали свойство только как пару «ключ-значение». 
// Но на самом деле свойство объекта гораздо мощнее и гибче.
// мы изучим дополнительные флаги конфигурации для свойств, и увидим, 
// как можно незаметно превратить их в специальные функции – геттеры и сеттеры.

// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»)
// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Мы ещё не встречали эти атрибуты, потому что обычно они скрыты. Когда мы создаём свойство «обычным способом», 
// все они имеют значение true. Но мы можем изменить их в любое время.
// Сначала посмотрим, как получить их текущие значения.

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве. 
// Его синтаксис: let descriptorOne = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj - Объект, из которого мы получаем информацию. propertyName - Имя свойства.
// Возвращаемое значение – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.
// Например:
let user = {
    name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty. 
// Его синтаксис: Object.defineProperty(obj, propertyName, descriptor);
// obj, propertyName - Объект и его свойство, для которого нужно применить дескриптор.
// descriptor - Применяемый дескриптор.
// Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство 
// с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение false.
// Например, здесь создаётся свойство name, все флаги которого имеют значение false:
let user2 = {};
Object.defineProperty(user, "name", {
  value: "John"
});
let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor2, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
// Таким образом, мы можем определить множество свойств одной операцией.


// Теперь рассмотрим полезные методы для объектов

// Метод Object.preventExtensions() предотвращает добавление новых свойств к объекту, 
// то есть, предотвращает расширение этого объекта в будущем).
const object1 = {};
Object.preventExtensions(object1);
try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

// Метод Object.seal() запечатывает объект, предотвращая добавление новых свойств к объекту и 
// делая все существующие свойства не настраиваемыми Синтаксис:
Object.seal(obj);    // obj - Запечатываемый объект.

// Метод Object.freeze() замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, 
// удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, 
// настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. 
// Метод возвращает замороженный объект. Синтаксис:
Object.freeze(obj);  // obj - Объект для заморозки.

// Метод Object.is() определяет, являются ли два значения одинаковыми значениями
// Синтаксис:
let isSame = Object.is(value1, value2);  // value1 - 1-e сравниваемое значение. value2 - 2-e сравниваемое значение.

// Для простых объектов доступны следующие методы:
// Все они позволяют сфор-ть разного вида массивы из объектов

// Object.keys(obj) – возвращает массив ключей.
// Метод Object.keys() возвращает массив из собственных перечисляемых ключей, 
// в том же порядке, в котором они бы обходились циклом for...in. Массивоподобный объект:
let obj3 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj3));   // ['0', '1', '2']

// Object.values(obj) – возвращает массив значений.
console.log(Object.values(obj3)); // ['a', 'b', 'c']

// Object.entries(obj) – возвращает массив пар [ключ, значение].
console.log(Object.entries(obj3));    //  [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]


// Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного 
// или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
// Пример: клонирование объекта
let objj = { a: 1 };
let copy = Object.assign({}, objj);
console.log(copy); // { a: 1 }
// Пример: слияние объектов
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let objjj = Object.assign(o1, o2, o3);
console.log(objjj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.

let one = {a: 1};
let two = {b: 2};
let sumObj = Object.assign(one, two);
console.log(sumObj);  // { a: 1, b: 2 }
console.log(one);     // { a: 1, b: 2 }
console.log(two);     // { b: 2 }


// Допол-но от меня - Ключевое слово «this» в методах
// Значение this – это объект «перед точкой», который использовался для вызова метода.
let users = {
  name: 'Dima',
  surname: 'Kabl',
  age: 37,
  sayAge () {
   console.log(this.age);
  }
};
// Здесь во время выполнения кода users.sayHi() значением this будет являться user (ссылка на объект users).
users.sayAge(); 
