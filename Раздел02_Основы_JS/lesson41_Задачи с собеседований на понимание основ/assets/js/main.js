 "use strict";

// Lesson 41. Задачи с собеседований на понимание основ

// 1. Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; 
console.log(x++);  // 5
// console.log(++x);     // 6

// 2. Чему равно такое выражение: [ ] + false - null + true ?
[ ] + false - null + true;
console.log([ ] + false - null + true);  // NaN

// 3. Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; 
let x2 = y = 2;
console.log(x2);  // 2

// 4. Чему равна сумма [ ] + 1 + 2?
console.log([ ] + 1 + 2);  // 12 (тип данных string)

// 5. Что выведет этот код: alert( '1'[0] )?
console.log('1'[0]);  // 1
console.log('1'[2]);  // undefined
console.log('Dima'[2]);  // m

// 6.Чему равно Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);  // null 
// т.к. оператор && возвр-т первое лживое значение

// 7. Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!( 1 && 2 ) === (1 && 2));  // false
// т.к. !! меняют значение на противоположное

// 8. Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log( null || 2 && 3 || 4 );   // 3

// 9. a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
let a = [1, 2, 3]; 
let b = [1, 2, 3];
console.log(a == b);   // false

// 10. Что выведет этот код: alert( +"Infinity" ); ?
console.log(+"Infinity");   // Infinity тип данных number

// 11. Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");   // false
console.log("ёжик" > "яблоко");   // true  т.к в сравнении учит-ся и регистр!
console.log("яблоко" > "Ёжик");   // true
console.log("яблоко" > "яблоко");  // false
console.log('abc' > 'abc');        // false
console.log('abc' === 'abc');      // true

// 12. Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе);  // 2 (т.к. это true, а при срав-и с || возв-ся первое true знач-е)
