import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

// Испол-я props{data} изменим фун-ю
// const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
const EmployeesList = ({data, onDelete, onToggleProp}) => {
    // Lesson 128 Мы не знаем сколько к нам прийдет данных с сервера, поэтому испол-я метод перебора массивов map
    // пройдем по всему массиву, что-то сделает с каждым из элементов и вернет нам новый массив элементов
    // т.е. данные у нас превр-ся в элементы.
    // Если на бэке забыли добавить уникал. key в массиве, мы можем допустить испол-е индекса i элементов,
    // но так можно делать если мы понимаем что порядок элементов меняться не будет!
    // const elements = data.map((item, i) => {
    const elements = data.map(item => {
        // Испол-я дестр-ю вытащим из массива data наш id. item это наш объект и мы можем его деструк-ть немного иначе:
        // вытащим одну перем-ю id, а все остал-е props(их у нас в массие осталось 3шт) объеденим в одно св-во itemProps
        // Это наз-ся деструк-я по остаточному признаку!
        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary ={item.salary}/>
            // Запись ниже будет идентична зависи выше, оперетор spread ... развор-т наш объект на отдел-е элементы
            // <EmployeesListItem {...item}/>

            // Если на бэке забыли добавить уникал. key в массиве, мы можем допустить испол-е индекса i элементов
            // <EmployeesListItem key={i} {...itemProps}/>
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                // Lesson 135 Передадим в компонент функ-ю, она будет просто выводить сооб. в консоль 
                // и далее мы сможем ее испол-ть в employees-list-item.js
                // onDelete={() => console.log('Deleted')}
                // Теперь при клике на "корзинку" мы получим правил-й числовой id(1,2 или 3)
                // И все это произошло благодаря передачи property, т.е. передача свойств компонента по иерархии
                // Таким образом можно передавать вниз и данные и методы и тд
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                // После id нужно будет передать назв-е пропса, что конкретно мы будет менять, это будет строка
                // и она будет получена с того элемента на котором происходит событие(onClick)
                // Где объект события (e) будет приходить к нам автом-ки в кач-ве аргумента
                // Далее получим доступ к data-атрибуту, он получается не так как в обычном js
                // currentTarget - нужен вместо обычного target что-бы нивелироват всплытие событий и 
                // получать именно тот элемен что действительно нужен и когда мы его получили, мы обращ-ся
                // через метод получения атрибута getAttribute получаем доступ к data-атрибуту(в employees-list-item.js)
                // и далее получаем то что написано в data-toggle="rise" или data-toggle="increase"
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    // На базе таких данных и стр-ся элементы интерфейса
    // console.log(elements);    // {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}

    return (
        <ul className="app-list list-group">
            {/* Модиф-м наши компоненты испол-я props */}
            {/* <EmployeesListItem name="Nika K." salary ={800}/>
            <EmployeesListItem name="Nastya K." salary ={3000}/>
            <EmployeesListItem name="Dima K." salary ={5500}/> */}

            {/* Lesson 128 Подставим массив данных с перем-й elements и далее у нас все наши компоненты развернуться 
            и сформир-ся верстка*/}
            {elements}
        </ul>
    )
}

export default EmployeesList;