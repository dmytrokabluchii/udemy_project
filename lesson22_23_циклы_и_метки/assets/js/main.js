 "use strict";

// Lesson 20 Циклы
// класический цикл, в while в () мы укзываем условие и что хотим сделать в {}
let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

// цикл с do while
// do говорит нам сначала сделать что-то, а в while в () мы уже укзываем условие и что хотим сделать
// в консоли мы увидим 51,52.53,54,55
let numTwo = 50;
do {
    console.log(numTwo);
    numTwo++;
}
// если мы console.log(numTwo); расположим под numTwo++; то значение увеличится на 1, до 56.
while (numTwo <= 55);


// самый популярный цикл с for 
for (let i = 1; i < 8; i++) {
    console.log(i);
}
// в консоли вы увидим 1,2,3,4,5,6,7

// подставим в этот цикл нашу переменную
let numThree = 60;
for (let i = 1; i < 8; i++) {
    console.log(numThree);
    numThree++;
}
// бесконечные циклы, осторожно!
// можно создать бесконечный цикл если в условие записать не  i < 8 а  i < 0

// break - Если нам нужно прервать цикл на опред. значении
// т.е. когда i === 6 то цикл прерывается
for (let i =1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// continue - не прерывает полностью цикл и позволяет пропустить тот шаг который нам не нужен
for (let i =1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
} 


// Lesson 23 Цикл в цикле и метки
// Цикл в цикле
// В консоли мы увидим 0567 1567 2567
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 5; j < 8; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

// сделаем конструкцию выше из * используя циклы
let result = '';
const lengthOne = 7;
// в 1-м цикле мы создаем ряды, их у нас 6, а во влож. цикле уже добавляем *
for (let i = 1; i < lengthOne; i++) {
    // формируем *, когда 0<1 вложенный ниже цикл сработает 1 раз и сфор. *, когда 0<2 - 2 раза ** и тд
    for (let j = 0; j < i; j++) {
        // в перем-ю result записываем строчку со *
        result += '*';
    }
    // после влож. цикла сработает перенос строки, и чтобы сформировать этот перенос, в пере-й result у нас сторока,
    // мы добавляем кусочек строки каждый раз используя +=, 
    // в JS чтобы перенести строку на след. уровень есть спец символ: \n
    result += '\n';
}
console.log(result);


// Метки в циклах
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            // if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}