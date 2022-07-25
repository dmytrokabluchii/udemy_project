"use strict";

// 16: Задача на рекурсию

// Найти факториал числа
// Факториал числа n — это произведение натуральных чисел от 1 до n.
// Факториал определен для целых неотрицательных чисел. Число должно быть целое и положительное. 4! = 1*2*3*4 = 24
// Если приходит 0 и меньше - возвр-ся 1
function factorial(n) {
    // проверка на не число и на целое число
    if (typeof n !== 'number' || Number.isInteger(n) === false ) {
        return 'Error. It must be a number - positive and integer!';
    } else if (n <= 0) {
        return 1;
    } else {
       return n * factorial(n - 1);
    }
}
factorial(5);
console.log(factorial(1));


