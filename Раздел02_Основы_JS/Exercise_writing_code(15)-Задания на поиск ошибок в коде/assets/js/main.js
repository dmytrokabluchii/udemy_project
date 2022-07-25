"use strict";

// 15: Задания на поиск ошибок в коде
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    // или 
    // (prop === true) ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}
// isOpen(restorantData.openNow);
console.log(isOpen(restorantData.openNow));


function isAverageLunchPriceTrue(fDish, sDish, average) {
    // console.log(+fDish.price.slice(0, -1));      // 14
    // console.log(+sDish.price.slice(0, -1));      // 9
    // console.log(parseInt(average));              // 20
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < parseInt(average)) {
        // или как у Ивана
        // if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1))
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);
    // вместо
    // copy.waitors[0] = {name: 'Mike', age: 32};
    // Нам просто нужно менять весь массив данных, а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    // console.log(copy);
    return copy;
}
transferWaitors(restorantData);
// console.log(restorantData);

