 "use strict";

// Lesson 20 Условия
if (4 === 4) {
    console.log('ok');
}else{
    console.log('error!');
}

const num = 50;
if (num < 49) {
    console.log('error!');
} else if (num > 100) {
    console.log('too match');
} else {
    console.log('ok number!');
}

// тернарный оператор ? он позволяет экономить место при написании кода 
const numOne = 50;
(numOne === 50) ? console.log('ok numOne') : console.log('error numOne');
// где ? - означает если, а : - то
// где (numOne === 50) это 1-й аргумент, console.log('ok numOne') 2-й и тд

// бинарный аргумент +
4 + 4;
// унарный аргумент +
+'4';

// конструкция switch - нужна для избежания больших ветвлений
// default: нужен еслине одно их действий невыполнится
const numTwo = 55;
switch (numTwo) {
    case 49:
        console.log('not right');
        break;
        case 100:
            console.log('not right');
            break;
            case 55:
                console.log('right!');
                break;
            default:
                console.log('in any time!');
                break;
}


// Lesson 21 Логические операторы
// && - логическое и
const hamburger = true;
const fries = true;
if (hamburger && fries) {
    console.log('я сыт!');
}
console.log((hamburger && fries));

const hamburger2 = 5;
const fries2 = 5;
// если в условии будет лиш одно значение то это всегда true!
if (1) {
    console.log('я сыт!');
}
console.log((hamburger2 && fries2));

// в примере у нас согласно таблице приор-в операторов === стоит выше &&, значит выпол-ся первее!
// в данном случае условие не выполнится т.к. hamburger3 не === 3 и мы получим false, 
// т.е в данном случае выпол-ся блок с else 
const hamburger3 = 2;
const fries3 = 1;
const cola3 = 0;
if (hamburger3 === 3 && cola3 ===1 && fries3) {
    console.log('все сыты!');
}else{
    console.log('мы уходим!');
}

// 
const hamburger4 = 3;
const fries4 = 1;
const cola4 = 5;
console.log(hamburger4 === 3 && cola4 && fries4);

// вернется 0 т.к. 0 это всегда false и это посл. неправдивое значение
console.log(1 && 0);
// т.к. оба значения true вернется последнее, т.е 5
console.log(1 && 5);
// null это вседа false т.к. это 1-е неправдивое значение оно и возвр-ся
console.log(null && 5);
// 0 это false тюе 1-е непр. значение, оно и вернется
console.log(0 && "Dimas");


//  || - логическое или
// правда, true
const hamburger5 = 3;
// неправда, false
const fries5 = 0;
// неправда, false
const cola5 = 0;
// в условии мы хотим что бы чоть что то было, тогда 'все довольны!'
// и как только мы получили true
if (hamburger5 || cola5 || fries5) {
    console.log('все довольны!');
}else{
    console.log('мы не довольны!');
}

const hamburger6 = 0;
const fries6 = 0;
// 0 это неправда, false
const cola6 = 0;
// 0 это false везде, сработает то что мы записали в else
if (hamburger6 || cola6 || fries6) {
    console.log('все довольны!');
}else{
    console.log('мы не довольны!');
}
// в консоли мы получим последнее ложное значение
console.log(hamburger6 || cola6 || fries6);


// комбинация лог. операторов!
const hamburger7 = 3;
const fries7 = 3;
const cola7 = 0;
const nuggets = 2;
// Т.е. мы хотим заказать или 3 хамбургера и 2 колы или 3 картошки и нагетсы
// в 1-м условии вернется false т.к. cola7 у нас 0 и в случае с оператором && у нас вернется значение с false
// во 2-м условии первым выпол-ся код с === вернется true, т.к. nuggets тоже true
// выходит с 1-м условии false, а во 2-м true и при сравнении с оператором || от нам вернет значение с true!, т.е 'все довольны!'
if (hamburger7 === 3 && cola7 ===2 || fries7 === 3 && nuggets) {
    console.log('все довольны!');
}else{
    console.log('мы не довольны!');
}
// в консоли мы получим 2, т.к. 1-е условие нам вернет false, а 2-е true 
// и в логич.контексте вернется последнее значение с true, т.е 2
console.log(hamburger7 === 3 && cola7 ===2 || fries7 === 3 && nuggets);

// используя скобки () мы можем менять приоритетность операторов! т.к. у них наивысший 20-й уровень приоритетности!
console.log(hamburger7 === 3 && (cola7 ===2 || fries7 === 3) && nuggets);


// оператор ! (не), сначала превр. значение в булиновый тип данных, а потом изменяет значение на противоположное 
// т.к 0 это false, а ! меняяет его на против. значение, т.е. true
console.log(!0);
// 5 это true значение, а ! менеяет его на false
console.log(!5);

// Задачки на что вернется

// вернется: 2 т.к. это true
console.log( NaN || 2 || undefined );

// вернется: NAN т.к. это false
console.log( NaN && 2 && undefined );

// вернется: 3 т.к. это последнее true значение
console.log( 1 && 2 && 3 );

// вернется: false т.к. при сравнении 2-х условий(оба которых false) вернется именно false! 
// Где перв-м выпол-я сравнение: !1 && 2 т.к. приоритетность у оператора && выше чем у ||
console.log( !1 && 2 || !3 );

// вернется: 25, т.к. 1-м выполнится сравнение null && !3(из-за приоритетности)
// null - false, !3 - false, false на false возв-т false, 25 это true, true || false вернет true, т.е. значение 25
console.log( 25 || null && !3 );

//  вернется: 5 т.к. это true
console.log( NaN || null || !3 || undefined || 5);

//  вернется: 5 т.к. это true
// null && !3 && undefined - false, NaN - false, а 5 true
console.log( NaN || null && !3 && undefined || 5);

// вернется: true
// выполняется, по приоритетности: 1. 3 > 1 это true, 5 === 5 это true, 5 это тоже true, по итогу true на true = true
console.log( 5 === 5 && 3 > 1 || 5);

// Задачка 1: Выполняется ли условие?
// Ответ, да выполнится и в консоли мы увидим - 'Done!'
// 1-е условие вернет false, т.к. 0 это false, true и false вернет false, 
// 2-у условие вернент true, false || true вернет true
const hamburger9 = 3;
const fries9 = 3;
const cola9 = 0;
const nuggets9 = 2;
if (hamburger9 === 3 && cola9 || fries9 === 3 && nuggets9) {
   console.log('Done!');
}

// Задачка 2: Выполняется ли условие?
// Ответ, да выполнится и в консоли мы увидим - 'Done!'
// (false || false || false || true) т.к. одно из значений true значит оно и вернется
let hamburger10;
const fries10 = NaN;
const cola10 = 0;
const nuggets10 = 2;
if (hamburger10 || cola10 || fries10 === 3 || nuggets10) {
   console.log('Done!');
}

// Задачка 2: Выполняется ли условие?
// Условие не выполнится, т.к. false || false вернет false
let hamburger11;
const fries11 = NaN;
const cola11 = 0;
const nuggets11 = 2;
if (hamburger11 && cola11 || fries11 === 3 && nuggets11) {
   console.log('Done!');
}
