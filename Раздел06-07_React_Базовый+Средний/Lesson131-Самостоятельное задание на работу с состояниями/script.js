/* 1) Начальное значение счетчика должно передаваться через props
2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. 
По достижению границы ничего не происходит
3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) 
Не зависит от предыдущего состояния
4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов */

// My first variant
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          counter: 15
        }
    }
    // Используйте только стрелочную форму методов
    counterInc = () => {
      this.setState(state => ({
        counter: state.counter + 1
      })) 
    }
    counterDec = () => {
      this.setState(state => ({
        counter: state.counter - 1
      })) 
    }
    counterRandom = () => {
      this.setState(state => ({
        counter: Math.floor(Math.random() * (50 - (-50))) + (-50)
      })) 
    }
    counterReset = () => {
      this.setState(state => ({
        counter: 0
      }))
    }
    render() {
      return (
        <div class="app">
          <div class="counter">{this.state.counter}</div>
          <div class="controls">
            <button onClick={this.counterInc}>INC</button>
            <button onClick={this.counterDec}>DEC</button>
            <button onClick={this.counterRandom}>RND</button>
            <button onClick={this.counterReset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App counter={0}/>, document.getElementById('app'));