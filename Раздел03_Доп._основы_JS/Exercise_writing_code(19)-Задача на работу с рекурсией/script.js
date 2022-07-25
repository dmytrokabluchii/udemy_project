'use strict';
// Упражнение по написанию кода 19: (**) Сложная задача на работу с рекурсией
// Созд-ть фун-ю которая будет считать кол-во всех элементов в массиве, вкл. и влож-е массивы.
// Нужно учитывать что сам влож-й массив тоже входит в счет.
// Пример: deepCount([1, 5, 3, ['10']]) => 4

// 1. Вариант с методом reduce
function deepCount(a){
  return a.reduce((s,e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}
deepCount([1, 4, 7, ['77', 'Dima', 54]]);
// console.log(deepCount([1, 4, 7, ['77']]));
// console.log(deepCount([1, 4, 7, ['77', 'Dima', 54]]));

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// Синтаксис:
// let value = arr.reduce(function(previousValue, item, index, array) {
//   // тело фун-и
// }, [initial]);
// Аргументы:
// previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива, index – его индекс, array – сам массив.
// При вызове функции результат её вызова на предыдущем элементе массива передаётся как первый аргумент.
// Тут мы получим сумму всех элементов массива всего одной строкой:
let arrNumber = [1, 2, 3, 4, 5];
let result = arrNumber.reduce((sum, current) => sum + current, 0);
console.log(result);  // 15

// Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
// Синтаксис: Array.isArray(obj); где obj это Объект для проверки.


// 2. Вариант с циклом
function deepCount2(a){
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      // наша рекурсия 
      count += deepCount(a[i]);
    }
  }
  return count;
}
console.log(deepCount2([1, 4, 7, ['77', 'Dima', 54]]));