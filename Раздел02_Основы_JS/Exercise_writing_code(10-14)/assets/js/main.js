"use strict";

// 10: Задачи на работу с объектами
// У нас есть готовый обьект с данными. Разраблотчик хочет написать часть функционала, 
// но ему не хватает навыков. Выполнить часть заданий за него.

// Задача 3. Создать метод внутри обьекта personalPlanPeter, при его вызове метод будет принимать в себя объект и
// возвращать строку в нужном виде
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        let rez = '';
        const {languages} = obj.skills;
        for (let key in languages) {
            // добавляем пробел между языками, это + ' '
            rez += languages[key] + ' ';
        }
        // к rez применяем метод верх.регистра и удаления последнего пробела
        return `Мне ${obj.age} и я владею языками: ${rez.toUpperCase().trim()}`;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// Задача 1. Написать фун-ю котрая будет принимать в себя обьект со всеми данными и возвращать строку с опытом
// Желательно испол-ть деструктаризацию
function showExperience(plan) {
    // делаем деструктуризацию объекта, т.е. извлекаем из встр. объекта skills(который нах. в personalPlanPeter(plan)) 
    // ключ со значением exp
    let {exp} = plan.skills;
    return exp;
}
// Фун-я showExperience принимает в себя обьект personalPlanPeter
showExperience(personalPlanPeter);

// Задача 2. Написать фун-ю которая будет принимать обьект в себя со всеми данными и возвращать строку в нужном виде 
// фун-я должна работать вне зависимости от колич-ва языков и если они не указаны то возв-ся пустая строка
// для переноса строки испол-ть /n
function showProgrammingLangs(plan) {
const {programmingLangs} = plan.skills;
let rez = '';
    for (let key in programmingLangs) {
        rez += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return rez;
}
showProgrammingLangs(personalPlanPeter);


// \n  перенос строки
let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);


// Задачи с http://code.mu/
// Задача 1. Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы
const showElem = {
    1: 'a',
    2: 'b',
    name: 'Dima',
    surname: 'Kabl',
    985: 'Exit'
};
console.log(showElem);
// обращение по номеру к обьекту
console.log(showElem[1]);    // a
console.log(showElem[985]);  // Exit
console.log(showElem[3]);    // undefined нет такого ключа и соот. значения
console.log(showElem.name);  // Dima
console.log(showElem.surname); // Kabl
// console.log(showElem[surname]);  // ошибка, не сработает, такой синтаксис работает только с цифрами
console.log(showElem['surname']);   // Kabl - а написав ключь в '' работает!

// Задача 2. Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
const sumOfElements = {
    a: 1,
    b: 2,
    c: 3
};
let rezSumOfElements = sumOfElements.a + sumOfElements.b + sumOfElements.c;
console.log(rezSumOfElements);  // 6

// Задача 3. Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов
let objSumOfElem = {
    '1a': 1,
    '2b': 2,
    'c-c': 5
};
let rezObjSumOfElem = objSumOfElem['1a'] + objSumOfElem['2b'] + objSumOfElem['c-c'];
console.log(rezObjSumOfElem);

// Задача 4.Найдите сумму его элементов.
let obj2Sum = {key1: 1, key2: 2, key3: 13};
console.log(obj2Sum.key1 + obj2Sum['key2'] + obj2Sum.key3);  // 16

// Задача 5. К каким элементам этого объекта допустимо обращение через свойство(т.е. через .), а к каким - нет?
let obj222 = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// только к этим
console.log(obj222.b2, obj222.d4);
//  а к этим только так
console.log(obj222["1a"], obj222["eee-"]);

// Задача 6. Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями. 
// Выведите на экран фамилию, имя и отчество через пробел.
let user = {
    name: 'Dima',
    surname: 'Kabl',
    patronymic: 'Sergeevich',
};
let rezOfUser = `${user.name } ${user.surname } ${user.patronymic}`;
console.log(rezOfUser);

// Задача 7. Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню. 
// Выведите созданную дату на экран в формате год-месяц-день.
let date = {
    years: '2022',
    month: '05',
    day: '23'
};
let rezOfDate = `${date.years}-${date.month}-${date.day}`;
console.log(rezOfDate);

// Задача 8. Создайте объект с ключами a, b и c и элементами 1, 2 и 3.
let obj12 = {};
obj12['name'] = 'Dima';
obj12.surname = 'Kabluch';
obj12.age = '37';
console.log(obj12);



// 11: Задачи на работу с массивами

// Задача 1. Написать фун-ю которая будет принимать в себя массив строк и возвр-ть сооб. в нужном формате.
// Имена подставляются автомат-и из массива. Если массив пустой то вывод-ся сооб. 'The Family are empty'
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    let str = '';
    // проверка на пустой массив и возврат соот. значения
    (arr.length === 0) ? str = 'Семья пуста' : str = 'Семья состоит из: ';
        arr.forEach(names => {
            str += `${names} `;
        });
    return str;
}
showFamily(family);

// Задача 2. Написать фун-ю которая будет прин-ть в себя массив строк и будет вывод-ть их в консоль в ниж-м регистре
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    let rez = arr.join('\n');
    console.log(rez.toLowerCase());
}
standardizeStrings(favoriteCities);


// 12: Задачи на работу с массивами, часть 2
// Задача с собеседований. Написать фун-ю reserve которая прин-т в себя строку и возвр-т эту строку в обратном порядке
// Функ-ю можно применить к любой строке, если в нее прих-т не строка - вернуть сооб. "Ошибка"
const someString = 'This is some strange string';
function reverse(str) {
    let rez = '';
    (typeof str !== 'string') ? rez = 'Ошибка' : rez = [...str].reverse().join('');
    // Способ № 1 - Функция переворачивания строки через литерал массива, оператор spread, метод revese() и метод join()
    // rez = [...str].reverse().join('');
    return rez;
}
reverse(someString);   // возвр-т 'gnirts egnarts emos si sihT'

// вариант Ивана
const someString2 = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');
    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}
reverse(someString2);

// У нас есть банкомат, который выдаёт деньги из двух разных банков в разных валютах. Один банк основной 
// с базовыми валютами, второй доп-ный с прочими валютами. Нам нужно создать фун-ю которая принимает 2 аргумента: 
// 1-й - это массив со всеми доступными валютами из двух банков сразу (представим что они не могут повторяться) 
// 2-й - необяз-й аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
// Если массив в первом аргументе пустой - то функция возвращает строку - "Нет доступных валют". 
// Фун-я возвращает строку в нужном виде. Заметьте: 
// - CNY юань исчез из списка валют значит такая валюта закончилась. 
// - После валюты стоит перенос строки \n и после каждой валюты тоже. Это важно для тестов. 
// - Данные для первого аргумента должны приходить сразу из двух банков причём сначала baseCurrencies, 
// потом additionalCurrencies по порядку.
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, 
// соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
const sumCurrencies = baseCurrencies.concat(additionalCurrencies);
// console.log(sumCurrencies);    // [ 'USD', 'EUR', 'UAH', 'RUB', 'CNY' ]
const noCurreccies = 'CNY';
function availableCurr(arr, missingCurr) {
    let str = '';
    (arr.length === 0) ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    // let rez = arr.join('\n');
    arr.forEach((curr) => {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    // console.log(str);
    return str;
}
availableCurr(sumCurrencies, noCurreccies);

// вариант Ивана
const baseCurrencies2 = ['USD', 'EUR'];
const additionalCurrencies2 = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
    return str;
}
availableCurr([...baseCurrencies2, ...additionalCurrencies2], 'CNY');


// 13: (*) Продвинутая задача на работу с объектами и массивами
// У нас есть кусок данных о торговом центре, который записан в объекте shoppingMallData. Они содержат массив с данными 
// о магазинах, где указана длина и ширина помещения; высота помещения; стоимость отопления за один кубический метр 
// и бюджет на оплату отопления за месяц. Основная задача - это написать функцию isBudgetEnough которая будет возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится сообщение "Бюджета достаточно", 
// если нет - "Бюджета недостаточно" и всё. Эта задача содержит несколько подзадач внутри: 
// - вычисления общей площади всех магазинов, которая вычисляются как длина магазина, умноженная на его ширину; 
// - вычисление общего объема торгового центра, так как цена отопления указано в кубических метрах 
// - определение того, хватает ли бюджета на оплату такого объёма 
// - все числа идут без единиц измерения для упрощения, просто цифры и всё 
// - функция должна прод-ть работать, даже если изм-я кол-во магазинов, высота, бюджет и подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        { 
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    // вычисления общей площади всех магазинов, которая вычисляются как длина магазина, умноженная на его ширину;
    let areaOfShops = data.shops.map((item) => {
        return item.width * item.length;
    });
    // console.log(areaOfShops);  // [ 50, 105, 100, 80 ]
    // Метод reduce() применяет функцию к каждому элементу массива (слева-направо), возвращая одно результирующее значение
    const initialValue = 0;
    const sumRezAreaOfShops = areaOfShops.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
    );
    // console.log(sumRezAreaOfShops);   // 335
    // вычисление общего объема торгового центра, так как цена отопления указано в кубических метрах 
    // Формула расчета объема: V = A * B * C где А — длина; В — ширина; С — высота.
        const volumeTradeCentre = sumRezAreaOfShops * data.height;
        // console.log(volumeTradeCentre);  // 1675
    // определение того, хватает ли бюджета на оплату такого объёма 
        const sumEnoughBudget = volumeTradeCentre * data.moneyPer1m3;
        // console.log(sumEnoughBudget);     // 50250
        let rezSumEnoughBudget = '';
        rezSumEnoughBudget = (sumEnoughBudget > data.budget) ? 'Бюджета недостаточно' : 'Бюджета достаточно';
        return rezSumEnoughBudget;
} 
isBudgetEnough(shoppingMallData);

// Решение Ивана
function isBudgetEnough2(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
    volume = data.height * square;
    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
isBudgetEnough2(shoppingMallData);


// 14: (*) Продвинутая задача на работу с объектами и массивами
// У нас есть список учеников которые хотят поиграть в игру, но команд может быть только три по 3 человека. 
// Нужно написать функцию которая принимает в себя массив строк. Внутри она сначала сортирует имена по алфавиту. 
// Затем распределяют учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. 
// Как итог, функция возвращает новый массив с тремя командами и строкой как 4-й элемент. 

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Dima'];
function sortStudentsByGroups(arr) {
    // сортируем имена по алфавиту
    let sortArr = arr.sort();
    const teamOne = [], teamTwo = [], teamThree = [], teamLast = [];
    for (let i = 0; i < sortArr.length; i++){
        if (i < 3) {
            teamOne.push(sortArr[i]);
        }else if (i < 6) {
            teamTwo.push(sortArr[i]);
        }else if (i < 9) {
            teamThree.push(sortArr[i]);
        }else{
            teamLast.push(sortArr[i]);
        }
    }
    return [teamOne,teamTwo,teamThree, `Оставшиеся студенты: ${teamLast.length === 0 ? '-' : teamLast.join(', ')}`];
}
sortStudentsByGroups(students);
