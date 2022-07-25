'use strict';
// Тест 3

// Вопрос 1: Что будет в консоли
function setOp(h, w, ...addOp) {
  console.log(h, w, ...addOp);  // 400 500 red top
  console.log(h, w, addOp);     // 400 500 [ 'red', 'top' ]
}
setOp(400, 500, 'red', 'top');

// Вопрос 2: Что будет выведено в консоль в результате работы функции?
function getSum(a, b) {
  function sum() {
      // console.log(this.a);    // error
      return a + b;
  }
  console.log(sum());
}
getSum(4, 5);

// Вопрос 3: Делегирование событий - это прием, который позволяет...

// Вопрос 4: Что выведет в консоль данный код?
class Slider {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    showSliderWidth() {
        console.log(this.width);   // 500px
    }
}
const slider = new Slider('500px', '150px');
slider.showSliderWidth();

// Вопрос 5: Какого метода не существует у свойства classList?
// Ответ: .includes();

// Вопрос 6: Какое свойство отвечает за ширину элемента, включая только сам контент и padding? Lesson 71 метрики
// Ответ: .clientWidth

// Вопрос 7: Как правильно задать наследование одного класса от другого?
// Ответ: через extends

// Вопрос 8: В чем ключевая разница между методами call и apply?
// Ответ: call возвр-т в виде строки, apply в виде массива

// Вопрос 9: Что выведет в консоль данный код?
const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function() {
        const extractCurrDomain = () => {
          console.log(this.domain);  // mysite.com
            return this.domain;
        };
        const extractCurrProtocol = () => {
            return this.protocol;
        };
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);  // https://mysite.com
    }
};
urlObj.showCurrentURL();
// Ответ: https://mysite.com

// Вопрос 10: Что выведет в консоль этот код при запуске?
const urlObj2 = {
    protocol: 'https',
    domain: 'mysite.com'
};
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    };
    const extractCurrProtocol = () => {
        return this.protocol;
    };
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}
const url = showCurrentURL.bind(urlObj2);
console.log(url);    // ƒ showCurrentURL() {}
// Т.к. bind возвращает новую функцию

// Вопрос 11: Свойство объекта события event.code позволяет получить...
// Ответ: код нажатой клавиши, вгне завис-ть нажат alt или нет

// Вопрос 12: Для чего необходимо сохранять уникальный идентификатор таймера?
// Ответ: чтобы иметь возм-ть остановить этот таймер
