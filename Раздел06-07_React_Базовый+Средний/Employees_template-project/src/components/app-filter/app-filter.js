import "./app-filter.css";

const AppFilter = (props) => {
    // Сформир-м наши кнопки в массиве данных
    const buttonData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true},
    ];
    // На базе данных выше мы можем сформир-ть массив элементов
    const buttons = buttonData.map(({name, label, colored}) => {
        // props.filter === name - такая запись заменяет условие(урок 138 на 27.30 подр-е)
        // Она заменяет if (props.filter === name) {return true/false в active}
        // В итоге в перем-й active у нас будет либо true/false
        const active = props.filter === name;
        // И далее испол-м его что-бы сформ-ть имя класса в верстке
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        // Lesson 142 Если у элемента есть св-во colored(стоит в true), то меняем цвет
        const styleEl = colored ? {color: 'red'} : null;

        return (
            <button type="button"
                    // При переборе элементов выше, когда мы натыкаемся на активный то мы ее будем подсвечивать
                    // Такая реализация называется динамическим классом
                    className={`btn ${clazz}`}
                    // Не забываем про алгоритм сравнения
                    key={name}
                    // Создадим событие и вызовем в нем фун-ю c методом onFilterSelect из app.js
                    onClick={() => props.onFilterSelect(name)}
                    // Если у элемента есть св-во colored(стоит в true), то меняем цвет
                    style={styleEl}>
                    {label}
            </button>
        )
    })

    return (
        // Стили к классам btn и тд подтяг-ся автоматом с Bootstrap
        <div className="btn-group">
            {buttons}
            {/* <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;