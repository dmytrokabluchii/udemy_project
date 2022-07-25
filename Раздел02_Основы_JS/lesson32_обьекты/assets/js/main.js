 "use strict";

// Lesson 32 Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1920,
    heigth: 1080,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.name);
// или мы можем обратится к ключу обьекта не через точку а через []
// console.log(options['colors']);

// чтобы получит доступ к внут. объекту colors: внутри объекта options мы испол-м след-й синтаксис:
// console.log(options['colors'] ['border']);   // black

// Оператор delete удаляет свойство из объекта.
// delete options.name;
// console.log(options);

// Цикл перебора элементов for...in проходит через перечисляемые свойства объекта. 
// цикл будет работать у нас в обьекте options, и в .log в обеект {options[key]}
//  мы каждый раз будем получать значение этого ключа
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// встр-й цикл в цикле с доступом к внут. объекту colors
for (let key in options) {
    // если тип ключа обьекта options есть object, то
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
//  в консоле мы увидим перечисление, где про встр. обьект будет уже писаться след-е: Свойство bg имеет значение red

// счетчик, если нам нужно посчитать кол-во ключей в обьекте
// let counter = 0;
// for (let key in options) {
//     // если тип ключа обьекта options есть object, то
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// но есть способ и попроще сделать это Метод Object.keys(), 
// он возвращает массив из перечисляемых свойств переданного объекта
console.log(Object.keys(options));
// чтобы получить кол-во елементов из полученного способом выше массива применим свойство .length
console.log(Object.keys(options).length);


// создадю новый обьект
const options2 = {
    name: 'test',
    width: 1920,
    heigth: 1080,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // созд-м новый ключ, куда мы запишем функ-ю
    makeTest: function() {
        console.log('Show Test');
    }
};
options2.makeTest();    // вернется Show Test


// Деструктурирующее присваивание
// во внутрь {} мы вставляем те ключи со значениями, которые хочем вытащить
// затем знак присваивания и далее откуда мы хочем вытащить эти обьекты(т.е. деструктурировать)
// деструктурировать = это разделить на более мелкие и удобные кусочки
// структура ниже и называется декструктуризация
const {border, bg} = options2.colors;
// и что-бы получить значение border в обьекте colors, который нах-ся в обьекте options2
console.log(border);
