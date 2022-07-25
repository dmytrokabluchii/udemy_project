 "use strict";

// Lesson 36. Основы ООП, прототипно-ориентированное наследование
let str = 'some';
let strObj = new String(str);
// т.е. если мы к строке применяем како-то метод, то пит данных у наа поменяется на объект уже
// console.log(typeof(str));     // string
// console.log(typeof(strObj));  // object

console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log('Hello');
    }
};
const john = {
    health: 100
};
// теперь мы установили прототипом john - soldier(солдата)
// метод .__proto__ устаревший, и в свежих проектах его уже не используют!
john.__proto__ = soldier;

// получаем 100 т.к. это св-во было у его прототипа, т.е. объекта soldier
console.log(john.armor);   // 100
// т.к. john умеет это делать, он перенял эту фун-ю у своего прототипа!
john.sayHello();   // Hello

// на данный момент метод .__proto__ устарел и вместо него след-т испол-ть след. совр. методы:
// Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
// Метод Object.getPrototypeOf() возвращает(получает) прототип, (то есть, внут. свойство [[Prototype]]) указ-го объекта
// Метод Object.setPrototypeOf() устан-т прототип (т.е, внут. св-во [[Prototype]]) указ-го объекта в др. объект или null

// конст-я ниже будет аналогична этой строке: john.__proto__ = soldier;
Object.setPrototypeOf(john, soldier);

// перепишем пример используя соврем. методы
const soldier2 = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log('Hello');
    }
};
// т.е. объект john2 будет протот-но наслед-ся от soldier2
const john2 = Object.create(soldier2);
Object.setPrototypeOf(john2, soldier2);
console.log(john2.armor);  // 100
// john2.sayHello();       // Hello 
