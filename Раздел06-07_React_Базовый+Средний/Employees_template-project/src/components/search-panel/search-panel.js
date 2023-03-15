import { Component } from 'react';
import './search-panel.css';

// Сделаем компонент ниже классовым
// const SearchPanel = () => {
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        // Состояние ниже нам нужно будет поднимать до компонета App в app.js
        this.state = {
            term: ''
        }
    }

    // В метод ниже будет приходить объект события
    onUpdateSearch = (e) => {
        // Когда срабат-т событие получаем value кот-е ввел польз-ль
        const term = e.target.value;
        // Установка локал-го сост-я term, как в constructor, кот-е мы передадим ниже в render() 
        this.setState({term});
        // Пробросим состояние выше на верх! В onUpdateSearch просто передаем то что ввел польз-ль, т.е. это перем-я term у нас
        // Нужно запомнить что фун-я onUpdateSearch ниже и выше это две разные фун-и, нижняя приходит к нам с пропса в app.js
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                // Отслеживаем событие
                onChange={this.onUpdateSearch}
            />
        )
    }
    
}

export default SearchPanel;