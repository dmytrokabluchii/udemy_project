'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// Метод Element.matches() вернёт true или false, в зависимости от того, соответствует ли элемент указанному css-селектору
boxesQuery.forEach(box => {
    // пишем внутри css селектор по которому будем что-то искать 
    if (box.matches('.this')) {
        // и когда мы найдем такой элемент то
        console.log(box);
    }
});


// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует 
// заданному CSS-селектору или null, если таковых элементов вообще нет.
// найти 1-й элемент с таким классом который будет у тебя родителем
console.log(boxesQuery[0].closest('.wrapper'));


// boxesQuery[0].remove();  // NodeList(3) [div.box, div.box, div.box]
// boxesGet[0].remove();    // HTMLCollection [div.box]

// созд-м живую коллекцию испол-я цикл
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery);  // NodeList(3)
// console.log(boxesGet);    // HTMLCollection(3)

// псевдомассив без методов можно получ-ть еще след-м способом
// console.log(document.body.children);  // HTMLCollection(4)
// т.е. выше мы получаем детей из всего body

// Но обычные методы массивов не работ-т с массивоп-ми обьектами и это можно испр-ть испол-я команду Array.from
// Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
// т.е. мы созд-м массив из массив-го объекта!
// console.log(Array.from(boxesGet));
//  в резул-те мы получим обычный массив с данными, но это будет уже не живая коллекция



