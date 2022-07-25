 "use strict";

// Lesson 34 Передача данных по ссылке или по значению, Spread оператор (ES6-ES9)
// примитивные типы данных, тьпа чисел, строк, булиновые знач-я - передают значения!
let a = 5,
    b = a;
    b = b + 5;
    
console.log(b);
console.log(a);

// обьекты(т.е. массивы, фун-и, спец. обьекты) - передают ссылки!
const obj = {
    a: 5,
    b: 1
};
const copy = obj;   // эта запись передаёт ссылку, а не копирует объект!
copy.a = 10;
console.log(copy);
console.log(obj);

// сделаем "поверхносную" копию обьекта используя цикл for in
function copy2(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        // внутри пустого обьекта objCopy созд. новое св-во, которое будет содер-ть такое же св-во 
        // как и в главном обьекте и далее просто делаем копию из нашего главного объекта
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
// делаем клонирование обьекта, где в фун-ю copy2 мы передаем объект numbers
const newNumbers = copy2(numbers);
// меняем значение в обьекте newNumbers
newNumbers.a = 10;
// но если мы поменяем значение уже во внут. объекте, то мы увидим что x помен-ся у нас в 2-х обьектах
newNumbers.c.x = 10;

// и теперь в консоли мы увидим 2 разных обекта
console.log(newNumbers);  // { a: 10, b: 5, c: { x: 7, y: 4 } } или { a: 10, b: 5, c: { x: 10, y: 4 } }
console.log(numbers);     // { a: 2, b: 5, c: { x: 7, y: 4 } } или { a: 2, b: 5, c: { x: 10, y: 4 } }

// Метод Object.assign() позвол-т соед-ть сразу несколько обьектов После копирования он возвращает целевой объект.
const addNewObj = {
    d: 17,
    e: 20
};
// т.е. мы создали независимую поверхностную копию обекта!
// где numbers - это целевой объект(куда мы помещаем), а addNewObj - исходный обьект(который помещаем)
console.log(Object.assign(numbers, addNewObj));  // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
const oldArr = ['a', 'b', '3'];
const newArr = oldArr.slice();
// и если мы изменим значение в массиве newArr то получим уже 2 разных массива
newArr[1] = 'bac3';
console.log(newArr);    // [ 'a', 'bac3', '3' ]
console.log(oldArr);    // [ 'a', 'b', '3' ]

// Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).
const oldArr2 = ['a', 'b', '3', 'Dima', '37', 'Nika'];
console.log(oldArr2.slice(1, 4));  // [ 'b', '3', 'Dima' ]
// Вызов slice(-2) извлечёт два последних элемента последовательности.
console.log(oldArr2.slice(-2));  // [ '37', 'Nika' ]


// Оператор Spread 
const video = ['youtube', 'vimeo', 'mytube'],
      blogs = ['wordpress', 'levejournal', 'blogger'],
      // spread оператор должен развернуть эту стр-ру(video и тд) на отдел-е значения
      // и для этого мы просто ставим ... перед именем переменной!
      internet = [...video, ...blogs, 'linkedin', 'facebook'];
      //   в итоге мы получаем весь массив значений в перем. internet
      console.log(internet);


// допустим след. массив данных нам пришел с сервера, [ссылка на источник, ссылка на картинку, ссылка на автора]
const num = ['link1','link2', 'link3'];
function logger(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
// далее все эти 3 аргумента перед-м в нашу фун-ю logger испол-я Spread и наша ф-я запус-я с 3-мя отдел.элементами!
logger(...num);   // link1 link2 link3

// создадим поврхностную копию массива испол-я Оператор Spread 
const num2 = ['link1','link2', 'link3'];
const newNum2 = [...num2];
console.log(newNum2);  // [ 'link1', 'link2', 'link3' ]

// создадим поврхностную копию объекта испол-я Оператор Spread 
const obj23 = {
    one: 1,
    two: 2
};
const newObj23 = {...obj23};
console.log(newObj23);  // { one: 1, two: 2 }

