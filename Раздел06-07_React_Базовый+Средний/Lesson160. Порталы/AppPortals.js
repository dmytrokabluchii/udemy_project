import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    state = {
        advOpen: false
    }
    // Сделаем так чтобы окно, с допустим рекламой, появлялось через 3 сек после появления формы на стр-це
    // Чтобы не было багов в index.js удаляем StrictMode
    componentDidMount() {
        setTimeout(this.handleClick, 2000)
    }
    // Посмотрим как ведут себя обработчики событий в данной форме с порталами
    handleClick = () => {
        this.setState(({advOpen}) => ({
            // И далее возвр-м объект содер-й обратное значение
            advOpen: !advOpen
        }))
    }

    render() {
        return (
            <Container>
                <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {/*испол-м созд-й портал. Если true то показываем, если состояние будет в false то ничего рендерить не будем*/}
                    { this.state.advOpen ? <Portal> <Msg/> </Portal> : null }
                    {/* <Portal> <Msg/> </Portal> */}
                </form>
            </Container>
        )
    }
}

// Для создания портала созд-ся отдел-й компонент отвечаючий за этот функ-л
const Portal =(props) => {
    // Создадим перем-ю для контейнера портала
    // И когда будет запускаться компонет мы будем напрямую возд-ть на стр-цу в обход Dom-дерева
    const node = document.createElement('div');
    document.body.appendChild(node);
    // 1-й аргумент (props.children) отрендерит те элементы кот-е будут переданы во внутрь компонета Portal
    // И когда у нас на стр-це уже реал. есть нужный нам контейнер, т.е. зааппенденый 'div' элемент
    // именно в него мы будем помещать наш элемент props.children, кот-й нужно куда-то отправить
    return ReactDOM.createPortal(props.children, node)
}

// Создадим компонент возвращ=й кусок верстки
const Msg = () => {
    return (
        <div 
            style={{'width': '500px', 
                    'height': '150px', 
                    'backgroundColor': 'red', 
                    'position': 'absolute', 
                    'right': '0', 
                    'bottom': '0'}}>
                Hello, it`s advertising`
            </div>
)
}

function App() {
    return (
        <Form/>
    );
}

export default App;


// Порталы
// ReactDOM.createPortal(child, container);
// Первый аргумент (child) — это любой React-компонент, который может быть отрендерен, 
// такой как элемент, строка или фрагмент. Следующий аргумент (container) — это DOM-элемент.
