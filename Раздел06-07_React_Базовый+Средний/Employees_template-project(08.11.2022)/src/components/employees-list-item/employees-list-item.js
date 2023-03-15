import { Component } from 'react';
import './employees-list-item.css';

// Lesson 128 Испол-я (props) модиф-м фунц-е выражение и вар-т 2 испол-ть деструк-ю
// const EmployeesListItem = ({name, salary, increase}) => {

// Lesson 133 Практика состояний на проекте
class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        // Испол-м далее callback фун-ю т.к. у нас идет четкая зависисость от предыдущего состояния, испол-м деструк-ю
        // callback принимает в себя 1 аргумент ({increase}) - это state из constructor, далее () идут чтобы не прописывать return
        // И мы просто возвр-м объект {increase: !increase} из setState. Внутри объекта устан-м новое св-во increase, 
        // которое будет противоположно (increase: !increase) тому что было до этого в constructor
        // И т.к. у нас стоит callback мы всегда будем отталк-ся от предыдущего результата
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
    // Вытыщим из пропсов перем-е name, salary, increase, испол-м синтаксис деструктаризации
    // Lesson 135 Испол-м фун-ю onDelete из employees-list.js
    const {name, salary, onToggleIncrease, onToggleRise} = this.props;
    // Далее increase у нас будет приходить не из props, а из самого компонента, из state
    const {increase} = this.state;
    const {like} = this.state;
    // Или  const {increase, like} = this.state; 

    // перем-я classNames будет иметь все базовые классы li-элемента
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        // В перем-ю добавляем еще один класс, если increase: true он добавится и цвет текста измен-ся, 
        // не забываем перед increase ставить пробел, чтобы имена классов не слиплись в одну строчку
        classNames += ' increase';
    }
    else if (like) {
        classNames += ' like';
    }
    return (
        // Вместо имен классов подстав-м classNames, кот-й их и содержит
        <li className={classNames}>
            {/* <span className="list-group-item-label">{props.name}</span> */}
            <span className="list-group-item-label"
                // onClick={this.onLike}>{name}
                onClick={onToggleRise}>{name}
            </span>
            {/* defaultValue="1000$" Этот спец. атрибут означает значение по умолчанию */}
            {/* <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/> */}
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                {/* Назначаем обраб-к события на кнопку */}
                <button type="button"
                    className="btn-cookie btn-sm "
                    // onClick={this.onIncrease}
                    onClick={onToggleIncrease}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    // Lesson 135 передадим в onClick нашу фун-ю onDelete и таким действием мы сможем связвать 
                    // несколько компонентов, кот-е наход-ся на разных уровнях
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }
}

export default EmployeesListItem;