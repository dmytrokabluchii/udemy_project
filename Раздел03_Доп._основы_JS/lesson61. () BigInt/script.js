'use strict';

// Lesson 60. Set
// Объект Set – это особый вид коллекции(по типу массива): «множество» значений (без ключей), 
// где каждое значение может появляться только один раз, работает и со строками.
const arr = [1, 1, 2, 2, 4, 5, 6, 5];
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект, 
// обычно это массив, то копирует его значения в новый Set.
const set = new Set(arr);
console.log(set);   // Set(5) {1, 2, 4, 5, 6}

// Его основные методы очень похожи на методы как у Map, это:
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// при написании можно использ-ть след-ю конст-ю(как и в методе Map)
const arrName = ['Dima', 'Nika', 'Nastya', 'Dima'];
const setName = new Set(arrName);
setName.add('Ivan')
       .add('Nika');
console.log(setName);  // Set(4) {'Dima', 'Nika', 'Nastya', 'Ivan'}
// подобное можно реал-ть и с обыч. методами для массивов, то такая констр-я с set работает быстрее и удобнее

// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// как и в Map мы можем перебирать значения, есть 2 способа:
for (let value of setName) {
  // console.log(value);   // Dima Nika Nastya Ivan
}
// след. метод испо-ть forEach
setName.forEach((value, valueAgaing, set) => {
  console.log(value, valueAgaing);  // Dima Dima Nika Nika Nastya Nastya Ivan Ivan
});
// примерами выше польз-ся чаще чем встр. методами ниже


// Set имеет те же встроенные методы, что и Map:
// set.values() – возвращает перебираемый объект для значений
console.log(setName.values());   // SetIterator {'Dima', 'Nika', 'Nastya', 'Ivan'}

// set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map
// этот метод присут-т для обратной совм-ти с Map, в консоле увидим что и в методе выше
console.log(setName.keys());   // SetIterator {'Dima', 'Nika', 'Nastya', 'Ivan'}

// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map
console.log(setName.entries());   // SetIterator {'Dima' => 'Dima', 'Nika' => 'Nika', 'Nastya' => 'Nastya', 'Ivan' => 'Ivan'}


// существует также функ-я помощник которая фильтрует любой массив и похожие фун-и мы будем часто испол-ть!
const arrName2 = ['Dima', 'Nika', 'Nastya', 'Dima'];
// Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
function unique(arr) {
  // возв-ть будет уже отфильт-й массив, таким образом форм-ся быстрая фильт-я
  return Array.from(new Set(arrName2));
}
console.log(unique(arrName2));   // (3) ['Dima', 'Nika', 'Nastya']
//  т.е. выше мы получили обыч-й массив внутри которого 3 элемента и котрый имеет все методы массивов для дал-й работы!