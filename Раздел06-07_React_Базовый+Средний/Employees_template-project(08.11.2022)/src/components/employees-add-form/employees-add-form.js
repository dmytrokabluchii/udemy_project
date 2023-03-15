import { Component } from 'react';
import './employees-add-form.css';

// const EmployeesAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
        
    }

    // Данный метод позволяет нам считывать данные записанные в input
    onValueChange = (e) => {
        this.setState({
            // В [] мы можем записывать св-ва в объект. Код ниже позволяет нам достучаться до аргумента в name
            [e.target.name]: e.target.value
        })
    }
    // Lesson 135 Д/З Добавляем данные с добавленным новым сотрудником в объект
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        // Сделаем чтобы имена атрибутов в name совпадали с state и тогда мы можем достучаться до него в методе
                        name='name'
                        // Если мы хотим что-бы реакт-компонент рендерил форму и контролировал ее поведение 
                        // в ответ на пользовательский ввод, то мы должны добав-ть атрибут value и в него
                        // помещать значение state{}. Т.е. в value у нас записывается актуал-е значение этого компонента, где
                        // значение value формы input будет контролир-ся React-ом и такой элемент называется управляемым компонентом
                        // Особенно полезен этот вариант при валидации данных и измен-я в интерфейсе будут мгновенными.
                        // В неуправляемых компонентах значение полей хранится прямо в DOM-дереве, испол-ть в формах их не реком-ся
                        // и по функционалу они хуже управл-х компонетов, input type="file" это един-й неуправл=й компонент в React
                        value={name}
                        // Если у нас происходит какое-то действие, мы метод зачастую называем на on и далее само действие
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    } 
}

export default EmployeesAddForm;


// Управляемые компоненты
// В HTML элементы формы, такие как <input>, <textarea> и <select>, обычно сами управляют своим состоянием и 
// обновляют его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state 
// и обновляется только через вызов setState()
// Мы можем скомбинировать оба подхода и сделать состояние React-компонента «единственным источником правды». 
// Тогда React-компонент будет рендерить форму и контролировать её поведение в ответ на пользовательский ввод. 
// Значение элемента формы input в этом случае будет контролировать React, а сам элемент будет называться «управляемый компонент».
// Подводя итог, <input type="text">, <textarea>, и <select> работают очень похоже. Все они принимают атрибут value, 
// который можно использовать, чтобы реализовать управляемый компонент.
// В атрибут value можно передать массив, что позволит выбрать несколько опций в теге select:
// <select multiple={true} value={['Б', 'В']}></select>


// Неуправляемые компоненты
// В большинстве случаев при работе с формами мы рекомендуем использовать управляемые компоненты. 
// В управляемом компоненте, данные формы обрабатываются React-компонентом. В качестве альтернативы можно использовать 
// неуправляемые компоненты. Они хранят данные формы прямо в DOM.
// В React <input type="file"> всегда является неуправляемым компонентом, потому что его значение может быть установлено 
// только пользователем, а не программным путём.

// библиотека Formik - Полноценные решения
// Если вы ищете полноценное решение, которое может валидировать ввод, запомнить посещённые поля формы и 
// обработать её отправку, присмотритесь к Formik. Эта библиотека построена на принципах управляемых компонентов 
// и управления состоянием, так что не пренебрегайте их изучением.