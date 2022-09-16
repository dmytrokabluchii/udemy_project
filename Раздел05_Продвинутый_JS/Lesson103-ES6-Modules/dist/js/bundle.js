/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayHi2),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });
// ES6 Modules + Webpack

// Из текущего файла мы код экспортируем, испол-м для этого ключевое слово export, и далее указыв-м то что экспор-м(напр. перем-ю)
let one = 1;
// Таким же образом можно экспортир-ть и фун-и, фун-я при этом должна иметь имя! 
function sayHi() {
    console.log('Hello');
}
// Немного другой способ экспорта
let two = 2;
// Данный способ синтаксиса назыв-я именованным, где перем-я заключ-ся в {}


// Также существует метод экспорта "по умолчанию": export default, у этого способа есть свои преим-ва,
// например далее(в script.js) мы сможем испол-ть эту фун-ю как отдельную
// Такой вид экспорта может быть только один!!!
function sayHi2() {console.log('Hello2');}
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
// ES6 Modules + Webpack

// В текущий файл мы код импортируем(из main.js), испол. ключ. слово import, 
// где в {} через , пишем имена перем-х или фун-й, далее указ-м ключ. слово from 'путь - откуда импор-м'

// Также мы можем сразу же и переименовывать имена импортир-х перем-х! Испол-ся ключ-е слово as(как)!

// Если мы захочем импортировать весь код с файла, испол * и как(as) назовем файл(напр. data)

// Импортир-м дефолтный метод экспорта:

// При подключении скрипта в html через type="module" в пути файла добав-м 
// import sayHi2 from './main.js';

// далее уже можно испол-ть методы и сущности с этих экспорт-х перем-х
// Т.к. браузер не может сам работать с модулями не забываем запускать сборщик модулей(Webpack например)
// где data у нас будет по факту объектом вкл-м все что было экспортировано с файла main.js,
// и мы из него, как из объекта, можем вытаскивать те перем-е и методы что нам нужны!
console.log(`${_main__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main__WEBPACK_IMPORTED_MODULE_0__.two}`);    // 1 and 2
_main__WEBPACK_IMPORTED_MODULE_0__.sayHi();                                  // Hello
(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
// console.log(`${one} and ${two}`);
// console.log(first);






// import
// Инструкция import используется для импорта ссылок на значения, экспортированные из внешнего модуля. Импортированные модули 
// находятся в строгом режиме независимо от того, объявляете ли вы их как таковые или нет. Для работы инструкции во встроенных 
// скриптах нужно прописать у тэга script type="module" или испол-ть сборщик модулей(Webpuck например).

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map