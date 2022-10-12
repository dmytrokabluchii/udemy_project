// Lesson 108. Как превратить код ES6+ в старый формат ES5. Babel, Core.js и полифиллы
'use strict';

// Реализация данного функционала реализована в работе Food-Local-Practice, файл webpack.config.js

// Babel
// Это бесплатный транскомпилятор(трасплиттер) JavaScript с открытым исходным кодом, который в основном используется для 
// преобразования кода ECMAScript 2015+(ES6) в обратно совместимый код JavaScript, который может выполняться старыми движками JS. 
// Это позволяет веб-разработчикам использовать новейшие функции языка.
// Он состоит из двух частей:
// - Собственно трасплиттер, который переписывает код.
// - Полифилл, который добавляет методы Array.from, String.prototype.repeat и другие.
// Термин «полифил» означает, что скрипт «заполняет» пробелы и добавляет современные функции.
// Два интересных хранилища полифилов:
// - core js поддерживает много функций, можно подключать только нужные.
// - polyfill.io – сервис, который автоматически создаёт скрипт с полифилом в зависимости от необходимых функций и браузера пользователя.
// Таким образом, чтобы современные функции поддерживались в старых движках, нам надо установить транспилер и добавить полифил.

// узнать какие браузеры сейчас испол-ся можно на: https://browserslist.dev/
// > 1% - это значит что мы увидим только версии браузеров с испол-м более 1%

// core-js
// Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2023: promises, symbols, collections, iterators, 
// typed arrays, many other features, ECMAScript proposals, some cross-platform WHATWG / W3C features and proposals like URL. 
//  Документация как пользоваться: https://github.com/zloirock/core-js

// Команды установки:
// Babel Установка:
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// babel-loader Установка:
// npm i --save-dev babel-loader

// core-js Установка:
// npm i --save-dev core-js
//  Документация как пользоваться: https://github.com/zloirock/core-js

// es6-promise polifill Инфо: https://www.npmjs.com/package/es6-promise   Установка:
// npm install es6-promise
// Далее в наш script.js файл в самом его начале устанав-м Auto-polyfill
// require('es6-promise').polyfill();

// Если нам нужно установить отдельный полифил, например foreach, ищем его на сайте npmjs.com и устанав-м
// npm i nodelist-foreach-polyfill
// Далее импртируем эту структуру к себе в проект(подр. инфа на https://www.npmjs.com/package/nodelist-foreach-polyfill)
// import 'nodelist-foreach-polyfill';
// Выше мы импортируем "файлик" которого как нет в нашем проекте и это очень важная особенность! 
// Тоже самое можно делать и при подключении других пакетов из npm, например слайдера и тд
// Нам не нужно его качать, потом помещать к себе в проект, подключать отдел-м скриптом
// Мы просто через npm его устанав-м в себе в проект и далее через import подкл-м его к себе в проект
// import 'slick-slider' , где в '' мы пишем название установл. npm пакета
// В итоге на выходе у нас будет один js-файл с подл-ми зависимостями и такой способ нужно использовать в будущем!
