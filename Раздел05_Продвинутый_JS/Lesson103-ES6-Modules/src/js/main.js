// ES6 Modules + Webpack

// Из текущего файла мы код экспортируем, испол-м для этого ключевое слово export, и далее указыв-м то что экспор-м(напр. перем-ю)
export let one = 1;
// Таким же образом можно экспортир-ть и фун-и, фун-я при этом должна иметь имя! 
export function sayHi() {
    console.log('Hello');
}
// Немного другой способ экспорта
let two = 2;
// Данный способ синтаксиса назыв-я именованным, где перем-я заключ-ся в {}
export {two};

// Также существует метод экспорта "по умолчанию": export default, у этого способа есть свои преим-ва,
// например далее(в script.js) мы сможем испол-ть эту фун-ю как отдельную
// Такой вид экспорта может быть только один!!!
export default function sayHi2() {console.log('Hello2');}
// Можно испол-ть много раз export при этом!






// export
// Инструкция export используется для экспорта функций, объектов или примитивов из файла (или модуля).
//      Синтаксис:
// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // или var
// export let name1 = …, name2 = …, …, nameN; // или var, const
    // export default выражение;
    // export default function (…) { … } // или class, function*
    // export default function name1(…) { … } // или class, function*
    // export { name1 as default, … };
// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// где nameN - Идентификатор для экспорта (чтобы он мог быть импортирован с помощью import в другом файле (скрипте)).