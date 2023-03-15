import './employees-list-item.css';

// Lesson 128 Испол-я (props) модиф-м фунц-е выражение и вар-т 2 испол-ть деструк-ю
const EmployeesListItem = ({name, salary, increase}) => {
    // перем-я classNames будет иметь все базовые классы li-элемента
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        // В перем-ю добавляем еще один класс, если increase: true он добавится и цвет текста измен-ся, 
        // не забываем перед increase ставить пробел, чтобы имена классов не слиплись в одну строчку
        classNames += ' increase';
    }
    return (
        // Вместо имен классов подстав-м classNames, кот-й их и содержит
        <li className={classNames}>
            {/* <span className="list-group-item-label">{props.name}</span> */}
            <span className="list-group-item-label">{name}</span>
            {/* defaultValue="1000$" Этот спец. атрибут означает значение по умолчанию */}
            {/* <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/> */}
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;