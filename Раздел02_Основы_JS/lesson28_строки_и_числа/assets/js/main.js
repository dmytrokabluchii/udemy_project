 "use strict";

// Lesson 28 Методы и свойства строк и чисел
const str = 'Dima';
const arr = [1, 5, 'Dimas'];
// св-во показыв-е длину строки
console.log(str.length, arr.length);
// номер по порядку у строки(начи-ся с 0)
console.log(str[2]);  //m
// метод перевода в верхний регистр
console.log(str.toUpperCase());
// метод перевода в нижний регистр
console.log(str.toLowerCase());

// медод поиска подстроки, номерация нач. с 0
const fruit = 'Some bananas';
console.log(fruit.indexOf('n'));   // 7
console.log(fruit.indexOf('S'));   // 0
console.log(fruit.indexOf('N'));   // -1
console.log(fruit.indexOf('bananas'));  // 5
console.log(fruit.indexOf('b'));  // 5  
console.log(fruit.indexOf('Some'));  // 0

// методы взаимодействия со строками
const logg = 'Hello world';
// метод slice: Извлекает часть строки и возвращает новую строку
// Обязательный параметр — начало извлечения. 2-м параметром можно установить границу (по умолчанию — до конца строки)
// работают и минусовые значения
console.log(logg.slice(10));       // d
console.log(logg.slice(-10));      // ello world
console.log(logg.slice(6, 10));    // worl
console.log(logg.slice(6, 11));    // world
console.log(logg.slice(-6, -11));  // world
console.log(logg.slice(6));        // world
console.log(logg.slice(-6));       // world
console.log(logg.slice());         // Hello world
console.log(logg.slice(0));        // Hello world
console.log(logg.slice(1));        // ello world
console.log(logg.slice(4, 30));    // o world
console.log(logg.slice(-4, -30));  // o world
// при расчете минусовых значений 1-й аргумент работает как 5-й символ права и закан-м -1 тоже справа
console.log(logg.slice(-5, -1));   // worl

// метод substring, он в какой-то степени похож на slice
// Извлекает символы из строки между двумя указанными индексами. Второй индекс указывать не обязательно. 
// В таком случае будут извлечены все символы от начала до конца строки. 
// В отличие от slice, можно задавать start больше, чем end(но делать так не стоит).
// Отрицательные значения не поддерживаются, они интерпретируются как 0.
const logg2 = 'Hello world';
console.log(logg2.substring(6, 11));    // world
console.log(logg2.substring(-6));       // Hello world
console.log(logg2.slice(4, 30));        // o world
console.log(logg2.slice(4, 2));         // ничего undefined

// метод substr. Извлекает часть строки указанной длины. 
// Первым параметром принимает стартовую позицию, вторым — длину. 
// Значение первого параметра может быть отрицательным, тогда позиция определяется с конца строки.
const logg3 = 'Hello world';
console.log(logg3.substr(6, 5));  // world
console.log(logg3.substr(3, 5));  // lo wo
console.log(logg3.substr(-3, 5)); // rld
console.log(logg3.substr(3));     // lo world


// библиотека Math для работы с числами
const num = 12.2;
console.log(Math.round(num));


// метод parseInt для перевода строки в число, значение при этом округляется
const testParse = '12.9px';
console.log(parseInt(testParse));  // 12

const testParse2 = '1.5Dima';
console.log(parseInt(testParse2));  // 1

const testParse3 = 'Dima37.5';
console.log(parseInt(testParse3));  // NAN

// метод parseFloat для перевода строки в число, значение при этом не округляется
const testParse4 = '12.956px';
console.log(parseFloat(testParse4));  // 12.956
