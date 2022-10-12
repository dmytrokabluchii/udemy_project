'use strict';
// Lesson 112. JS анимации, requestAnimationFrame

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';
    // Если позиция меньше 300 то запускаем анимацию
    if (pos < 300) {
        // И получается когда мы запускаем myAnimation она внутри себя начинает зацикливать анимацию
        // при помощи команды ниже, и выполнит это 300 раз, а потом пкрестанет запускаться
        requestAnimationFrame(myAnimation);
    }
}

// Что-бы норм. запускать фун-и внутри с аргументами(при клике), прямо внутри callback созд-м стреч. фун-ю
// т.е. это стрелочн. фун-я () => внутри себя уже запускает какую-то другую фун-ю
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));


let id = requestAnimationFrame(myAnimation);
// Для остановки(отмены) нашей анимации
cancelAnimationFrame(id);



// window.requestAnimationFrame()
// window.requestAnimationFrame указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать 
// перерисовку на следующем кадре анимации. В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой.

// window.cancelAnimationFrame()
// Метод window.cancelAnimationFrame() останавливает анимацию, запланированную с помощью window.requestAnimationFrame().