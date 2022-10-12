// Lesson 107 Создание своих ошибок
'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'www',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

// Создаем новые элементы по тегу что указаны в объекте и устан-м 'id' этому блоку и после этого помещ-м его на стр-цу.
// И если какого-то 'id' не будет то мы получим ошибку и об этом мы должны уведомить разработчика или польз-ля
// что что-то пошло не так. И тут нам пригодится навык формир-е своих ошибок и для этого в JS есть спец оператор - throw
// и в виде ошибки мы можем выкинутть что угодно: строку, число или объект, но так редко кто делает т.к. есть в JS 
// встр-й класс error, котрый мы и должны испол-ть

data.forEach((blockObj, i) => {
    // const block = document.createElement(blockObj.tag);

    // В данном случае если id нет в этих данных( blockObj.id), то мы выбросим ошибку в виде обычной строки
    // if (!blockObj.id) {throw 'error';}   // Uncaught error

    // но наиболее правильно будет выбрасывать объект ошибки, где new Error() это готовый встр-й класс, где в () мы можем
    // прописать готовое сообщение, и из такого сооб-я будет понятно в чем ошибка
    // if (!blockObj.id) {throw new Error(`В данных под номером ${i + 1} нет id`);}  // Uncaught Error: В данных под номером 2 нет id
    // В примере выше Error - это общий констр-р ошибок, но есть и более специфический, где мы можем испол-ть 
    // 3 сущности с пред. урока: name, message, stack
    const err = new Error('What happened?');
    // console.log(err.name, err.message, err.stack);    // Error What happened? Error: What happened?
    // также можно испол-ть new SyntaxError()
    const err2 = new SyntaxError('What happened2?');
    // console.log(err2.name, err2.message, err2.stack);    // SyntaxError What happened2? SyntaxError: What happened2?
    // также существуют и отдел-е классы ошибок, которые наследуются от встроенных(https://learn.javascript.ru/custom-errors)

    // block.setAttribute('id', blockObj.id);
    // document.body.append(block);
});

// Испол-м констр-ю try...catch для работы с ошибками
try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) {throw new SyntaxError(`В данных под номером ${i + 1} нет id`);}  

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
    // т.к. в блоке кода выше мы выбросили ошибку, то наш код перейдет в блок кода catch и эту ошибку
    // мы сможем обработать в блоке catch, и эта ошибка прийдет в нам в виде объекта (e)
} catch(e) {
    // console.log(e.name);       // SyntaxError
    console.log(e.message);    // В данных под номером 2 нет id
    // console.log(e.stack);      // SyntaxError: В данных под номером 2 нет id at...
    // теперь у нас и скрипт не ломается и мы видим общую суть ошибки. 
    // Также ошибку можно вывести через console.error(), она при этом подсветится красным в консоли
    // console.error(e.name);     // script.js:64 SyntaxError
    // И если ошибка может быть серъезной, ее лучше выбросить за пределы блока catch
    // Если ошибка будет "SyntaxError", то выведем соот. сооб.
    if (e.name === "SyntaxError") {
        console.log(e.message);
        // И если это другая ошибка, например серъезная, то выбрасываем ошибку дальше за стр-ру блока catch 
        // и тогда она будет выведена у нас на стр-це
    } else {
        // Ниже мы получим ошибку которая поломает нам скрипт, т.к. не может созд-ся элемент с незаданным именем тега
        // Это критическая ошибка, которую мы спецом выбрасываем наверх чтобы ее увидели!
        throw e;   // Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('') is not a valid name.
    }

}

// const err2 = new SyntaxError('What happened2?');
// console.log(err2.name, err2.message, err2.stack); 




// Error
// Конструктор Error создаёт объект ошибки. Экземпляры объекта Error выбрасываются при возникновении ошибок во время выполнения. 
// Объект Error также может использоваться в качестве базового для пользовательских исключений. 
// Синтаксис:
// new Error([message[, fileName[, lineNumber]]])
// Параметры:
// message - Необязательный параметр. Это Человеко-читаемое описание ошибки.
// fileName - Необязательный параметр.
// Значением по умолчанию является имя файла, содержащего код, вызвавший конструктор Error().
// lineNumber - Необязательный параметр.
// Значением по умолчанию является номер строки, содержащей вызов конструктора Error(). 
// Во время выполнения кода ошибки приводят к созданию и выбрасыванию новых объектов Error.

// SyntaxError
// Объект SyntaxError представляет ошибку, возникающую при попытке интерпретировать синтаксически неправильный код.
// Синтаксис
// new SyntaxError([message[, fileName[, lineNumber]]])
// Параметры:
// message - Необязательный параметр. Человеко-читаемое описание ошибки.
// fileName - Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
// lineNumber - Необязательный параметр. Номер строки кода, вызвавшей исключение.