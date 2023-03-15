// Теперь мы классовый компонент можем переработать в функционал-й
// import { Component } from 'react'
import './employees-list-item.css';

// Lesson 128 Испол-я (props) модиф-м фунц-е выражение и вар-т 2 испол-ть деструк-ю
// const EmployeesListItem = ({name, salary, increase}) => {

// Lesson 133 Практика состояний на проекте
// Вариант с классовым компонентом переделаем в функцион-й
// class EmployeesListItem extends Component {
const EmployeesListItem = (props) => {
/*     constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onrise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    } */

    // render() {}
    // Вытыщим из пропсов перем-е name, salary, increase, испол-м синтаксис деструктаризации
    // Lesson 135 Испол-м фун-ю onDelete из employees-list.js
    // const {name, salary, onDelete, onToggleIncrease, onToggleRise} = this.props;
    // const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    // Далее increase у нас будет приходить не из props, а из самого компонента, из state
    // const {increase} = this.state;
    // const {rise} = this.state;
    // Или  const {increase, rise} = this.state; 

    // перем-я classNames будет иметь все базовые классы li-элемента
    let classNames = "list-group-item d-flex justify-content-between";

    // Стили вложем в обьект и далее эту перем-ю со стилями будем испол-ть 
    let stylesForSpan = {fontSize: 24, transition: 'all', WebkitTransition: 'all', msTransition: 'all'}

    if (increase) {
        // В перем-ю добавляем еще один класс, если increase: true он добавится и цвет текста измен-ся, 
        // не забываем перед increase ставить пробел, чтобы имена классов не слиплись в одну строчку
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }
    return (
        // Вместо имен классов подстав-м classNames, кот-й их и содержит
        <li className={classNames}>
            {/* <span className="list-group-item-label">{props.name}</span> */}
            {/* Назначим data-атрибут */}
            <span className="list-group-item-label"
                // onClick={this.onrise}>{name}
                onClick={onToggleProp}
                data-toggle="rise"
                // Lesson 140 Стили в React. Inline Styles. Попрактикуемся
                // атрибут style в React принимает объект со стилями, после цифры px можно не ставим, 
                // при этом др.единицы измерения нужно прописывать и делать это в формате строки {fontSize: '40em'}
                // Вендерные(кроссбраузерные) стили нужно пропичывать вручную при этом
                // И такие объекты можно выносить в отдел-е перем-е и в верстку уже передавать перем-ю.
                style={stylesForSpan}>
                {name}
            </span>
            {/* defaultValue="1000$" Этот спец. атрибут означает значение по умолчанию */}
            {/* <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/> */}
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                {/* Назначаем обраб-к события на кнопку */}
                <button type="button"
                    className="btn-cookie btn-sm "
                    // onClick={this.onIncrease}
                    onClick={onToggleProp}
                    data-toggle="increase"
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

export default EmployeesListItem;