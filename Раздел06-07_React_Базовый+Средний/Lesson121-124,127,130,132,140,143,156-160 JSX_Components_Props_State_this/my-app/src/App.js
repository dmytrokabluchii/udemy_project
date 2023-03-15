// Для работы с классами в реакт импорт-м необ-й нам Component и StrictMode, 
// а также Фрагменты из Lesson 137. Способ 1:
// import {Component, Fragment} from 'react';
import React, {Component} from 'react';
// Lesson 143. Styled Components
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';
import { Container } from 'react-bootstrap';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2); 
  /* Styled Components поддер-т вложенность, как и SCSS, поэтому мы можем стил-ть влож-е элементы так 
  т.е. ссылки внутри корневого элемента будут иметь след-е стили*/
  a {
    display: block;
    margin: 10px 0 10px 0;
    /* color: red; */
    /* Испол-м props внутри стилей, испол-я их и callback фун-ю мы можем динам-ки менять стили, 
    т.е. у нас ниже пропс передан и условие сработало и это удобно при работе с динам. стилями! */
    color: ${props => props.active ? 'orange' : 'red'};
    text-decoration: none;
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;
const Header = styled.h2`
  font-size: 22px;
`;
// Если нам нужно экспортировать компонет, например в index.js
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2); 
`;

// props и деструктаризация(аналог формирования карточек в магазине)
// Св-во name не может быть помещено на стр-цу, т.к. это объект
// function WhoAmi ({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name()}, surname - {surname}</h1>
//       <a href={link} target="_blank">My profile</a>
//     </div>
//   )
// }


// Lesson 130. Состояния компонентов
// Передел-м компонет WhoAmi в формат класса. Также посмотрим как работают props внутри классовых компон-в
class WhoAmi extends Component {
  // Чтобы в экземпляры классов передать props нам нужно испол-ть конструктор и в этот контс-р к нам и приходит объект props
  // как это и происх-т с аргументом в функцион-м компоненте. И что-бы мы могли их испол-ть испол-м ключ-е слово super
  // куда и передадим наши props. Эта возможности испол-ть props приходит к нам как раз из React-компонета Component,
  // от которого мы как раз и наследуем наш компонент WhoAmi. И теперь внутри каждого потомка нащего класса, т.е. экземпляра,
  // будет св-во this.props с объектом содер-м всё что мы туда передали.
  constructor(props) {
    super(props);
    // props в React только для чтения, мы их не можем видоизменять и тут мы испол-м понятие state, кот-е уже можно
    // динамич-и менять внутри компонентов. Внутри конст-ра пропис-м this.state и далее соз-м объект.
    // Состояние(state) это такой объект кот-й описывает разл-е динам-е вещи, кот-е будет у нас в компоненте и далее
    // эти св-ва мы и будем испол-ть для динамич-х изменений
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    }
    // 1-й Обратимся к экземпляру класса когда он уже создан, испол-м констр-ю bind
    // где слева (this.nextYear) - это обыч. св-во кот-е будет у экземпляра класса, кот-й уже был создан
    // справа - мы обр-ся к методу nextYear кот-й есть у нас в классе и мы его привязываем(bind) к экземпляру класса,
    // т.е. мы его (this) жестко привязываем к методу чтобы он его не терял!
    // this.nextYear = this.nextYear.bind(this);
    // Главный минус кода выше, это то что при увеличении методов(внутри класса) их все прийдтся bind и это неудобно
  }

  // Lesson 132 сделаем из nextYear обычный метод и в таком случае у нас теряется контекст вызова this и будет ошибка
  // И чтобы избежать этой проблемы есть 3 варианта, 1-й это испол-ть констр-ю bind(испол-м ее в конструкторе)
  // nextYear() { ... }
  // 2-й Испол-е синтаксиса полей класса и => фун-и проще
  nextYear = () => {
    console.log('+++');
    // И чтобы изменить значение элемента на стр-це, т.е. состояние(state) нам нужно испол-ть спец. команду this.setState()
    // И эта команда принимает в себя аргументом объект с новым состоянием
    // И что-бы это все корректоно работало в React в setState перед-ся фун-я и в нее перед-ся только один аргумент 
    // state(это наше текущее сост-е). Далее эта фун-я возвр-т другой объект и есть такой синтаксис сокращ-й когда
    // мы просто () заменяем ключевое слово return
    this.setState(state => ({
      // И здесь у нас будет наше текущее сост-е только увелич-е на 1 и у каждого компонента оно будет своё
      // years: this.state.years + 1
      years: state.years + 1
    })) 
  }

  // Lesson 132 События в React и вспоминаем this
  // e.target - Объект события, благодаря нему мы можем узнать у объекта события на каком элементе произошло это событие
  // e.target.value - чтобы сразу получить его значение
  // commitInputChanges = (e) => {
    commitInputChanges = (e, color) => {
      console.log(color);
    // console.log(e.target.value);
    // 2-й способ испол-я setState - Ниже мы не будем испол-ть callback фун-ю, а просто напрямую передавать объект
    this.setState({
      position: e.target.value
    })
  }

  render() {
    // Эти 3 объекта(name, surname, link) мы вытаскиваем из this.props
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    // console.log(this);
    return (
      // обратится к state мы можем как к обыч-й перем-й внутри класса
      // И чтобы сост-е менялось добавим событие onClick и просто перед-м в него название метода {this.nextYear}
      // Т.е. это аналог addEventListener. Сам addEventListener вызывать нигде не нужно, React все делает за нас 
      // когды мы элементу или компонету назначаем событие
      // onChange - аналог события change в js, тут мы динамич-и отобразим текст на стр-це
      // Когда мы перед-м метод в обраб-к события мы всегда проп-м this для указания экземпляра класса
      // и все тоже  самое происходит и для props и state когда мы конкретно указ-м что работаем с опред-м экземпляром класса
      // this указывает конкретно на один экземпляр класса, чтобы у каждого компонента были свои св-ва(state) и props.
      // Но когда событие срабатывает то контекст теряется, это из за того что у нас фун-я вызыв-ся внутри метода(др. фун-и)
      // и соот. this стан-ся underfined и контекст мы теряем.

      // Использ-м 1-й способ <Fragment> импортир-й выше как компонент для замены  <div>
      // Или 2-й способ испол-я, испол-ся другой синтаксис - пустой тег: <> ... </> и React сам поймет что испол-я React-фрагмент
      // <>

      // Библ-ка Styled Components поддер-т props и в такие компоненты мы можем перед-ть св-ва(active) и далее 
      // испол-ть их внутри стилей, у нас EmpItem a{}
      <EmpItem active>
        {/* 3-й способ это вызвать событие через аноним-ю стрел-ю фун-ю.
        Его минус что нам всегда нужно будет соз=ть новый коллбек, когда созд-ся новый компонент (class WhoAmi) */}
        {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        {/* <h1> */}
        <Header>
          My name is {name}, 
          surname - {surname}, 
          age - {years}, 
          position - {position}
        </Header>
        <a href={link} target="_blank">My profile</a>
        <form>
          <span>Введите должность</span>
          {/* Чтобы испол-ть аргументы в обработчике событий нам поможет испол-е => фун-и, 
          и когда запус-мя метод commitInputChanges он уже содер-т 2 аргум-та */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
          {/* <input type="text" onChange={this.commitInputChanges}/> */}
        </form>
      </EmpItem>
    )
  }
  
}

// Lesson 143. Стили в React. Styled Components
// Создадим блок кот-й будет оборачивать все наши блоки ниже
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;


// Lesson 156. Вставка элементов через props.children в компонент(допустим модального окна),
// в который мы можем передавать нужные нам инпуты, формы и тд
const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}> 
      {/* Св-во props.children испол-ся когда мы не знаем что именно за инфа перед-ся через props,
      что-бы он рендерил ту стр-ру что мы перед-м ему при вызове, при этом мы не будем знать что будет внутри,
      это может быть компонент слайдера, форма и тд. тут мы должны сделать что-то с теми элементами кот-е будут приходить */}
      {/* {props.children} */}
      {
        React.Children.map(props.children, child => {
          // Так как это колбек фун-я мы должны из неё что-то вернуть
          // где child это каждый элемент перебир-й в массиве кот-й мы далее передаем в function App()
          // 2-м аргум-м будет то что мы будем добавлять/мутировать
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

// Lesson 157. Специализация и наследование
// Сделаем специфичный компонент на базе другого компонента
const HelloGreatings = () => {
  return (
    <div style={{'width': '600px', 'margin': '0 auto'}}>
      {/* Тут у нас компонент HelloGreatings содержит другой компонент DynamicGreating с привяз-м внутри заголовком <h2> */}
      <DynamicGreating color={'danger'}>
        <h2>Hello Visitor!</h2>
      </DynamicGreating>
    </div>
  )
}


// Lesson 158. Render-props паттерн
// Компонент Message может содер-ть в себе любое сооб-е с props, в counter может перед-ся что угодно
// и воспроизводить мы можем какой угодно счетчик. Это полностью независимый компонент!
// 1. Задача сделать что-бы 2 отдел-х компонента не зависели друг от друга и мы не теряли их гибкости, их специфичности
// 2. Связать 2 этих компонета так, что-бы один работал внутри другого
// Решение: применить render-props. Мы взяли компонент Counter, во время его вызова мы передали в него проп render,
// кот-й внутри себя содер-т колбек-функцию, ана принимает в себя аргумент(counters) и возвр-т другой компонент Message
// Потом внутри компонента Counter в нужном нам месте вызываем эту фун-ю из props.render
// И что-бы связать наше состяние с тем компонентом мы передали аргумент с стейтом (this.state.counter)
// кот-й перед-ся в counter компонента Message и испол-ся длшя вывода сообщения на страницу
// Эта фун-я позволяет нам не просто отрендерить что-то но и испол-ть внутренности этого компонента,
// когда мы как counter пред-ли состояние(state). 
// Главное отличие от props.children там мы перед-ли уже готовые компоненты/элементы, а в render-props
// мы перед-м фун-ю, кот-я будет что-то делать и соот. в неё мы можем передавать какие-то аргументы,
// а эти аргументы берутся из родит-го компонента.
// В будущем если в нашем компоненете мы не знаем что будет находится то можем исполь-ть прием выше или с урока 157(композиция)
// Так мы сделаем кол-во кода и самим компонентов меньше!
const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}


// У класса Counter есть своё состояние и он рендерит прост кнопку которая меняет это состояние
class Counter extends Component {
  state = {
    counter: 0
  }
  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }
  render() {
    return (
      <>
        <button 
            className={'btn btn-primary'}
            onClick={this.changeCounter}>
            Click me
        </button>
        {/* И т.к. render это фун-я мы можем запустить ее прямо внутри компонета */}
        {this.props.render(this.state.counter)}
        {this.props.render(this.state.counter)}
      </>
    )
  }
}


// Lesson 159. Что такое ref и зачем он нужен
class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

  // Далее создадим новое св-во, т.е. нужную нам ref(ссылку) на какой-то элемент
  // Для этого испол-м команду createRef() внутри React и далее эту ссылку нужно будет присвоить к нужного нам элементу
  // И после присвоения у нас уже будет хранится ссылка на нужный нам элемент(у нас input) в DOM-дереве
  // испол-м синтаксис полей классов
  // myRef = React.createRef();  
  // Задача поставить фокус при создании нашего компонента с формой
  // Метод componentDidMount() вызывает-ся уже после метода render(), т.е. когда верстка уже готова и 
  // ссылка(ref) на него тоже будет уже готова
  // componentDidMount() {
  //   // При этом именно ссылка на элемент хранится в спец. св-ве current, это нужно запомнить!
  //   // И далее просто испол-м метод focus(), это у нас станд. API кот-й мы можем испол-ть в браузере
  //   this.myRef.current.focus();
  // }

  // также существуют колбек рефы, они созд-ся при помощи фун-и, а не createRef()
  // Эта фун-я созает новое поле this.myRef и в него помещает ссылку на этот элемент
  // И далее ее просто нужно вызвать в нужном месте 
  setInputRef = elem => {
    this.myRef = elem;
  }

  // Перебрасывание фокуса, с одного элемента на другой, часто такой прием делается при валидации данных
  focusFirstTI = () => {
    // Такую конст-ю лучше добавить в условие, если она дейст-но существует. 
    // При этом в такой фун-т мы не испол-м св-во current, т.к. в myRef запишется чистая ссылка
    if (this.myRef) {
      this.myRef.focus();
    }
  }

  render() {
    return (
      <Container>
        {/* Форма ниже взята с оф. документации Bootstrap */}
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            {/* Для привязки ссылки myRef испол-м спец. атрибут ref*/}
            <input 
              // ref={this.myRef} 
              ref={this.setInputRef} 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
              {/*Перебрасывание фокуса по клику на элемент */}
              <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </Container>
    )
  }
}


// Фун-я App() напис-я с бол-й, явл-ся react-компонентом и внутри себя она возвр-т JSX-элементы
function App() {
  return (
    // Использ-м <Fragment> как компонент для замены  <div>
    // <Fragment className="App">   ...         </Fragment>
    // <div className="App">
    <Wrapper>
      <Form/>
      {/* У нас есть задача: нужно связать 2 компонента(Message и Counter), при этом они должны быть независ-е друг от друга,
    при этом комп-т Message должен наход-ся внутри Counter и испол-ть его состояние
    т.е. мы не будем делать след-е: <Message counter={this.state.counter}/>
      Т.е у нас не будет жесткой привязки одного компонета к другому
    И тут нам поможет приём render.props - т.е. в наше св-во компонента мы должны передать что-то, что будет рендерить
    определ-ю структуру внутри компонета, и это скорее всего будет фун-я
    Т.е. мы как props внутрь компонета <Counter/> можем передать фун-ю, кот-я будет запускаться внутри 
    компонента Counter и что то там делать(например рендерить опред-ю стр-ру внутри верстки) 
    Внутрь render помещаем комбек фун-ю прин-ю один аргумент counters и далее из этой фун-и мы вернем компонент
    И когда запустится эта колбек фун-я мы в нее будем передавать аргум-т counters, кот-й будет помещаться во внутрь <Message/> */}
      <Counter render={counters => (
        <Message counter={counters}/>
      )}/>
      <HelloGreatings/>

      <BootstrapTest
        // Создадим пропс left/right и передадим туда готовый компонент и далее 
        // эта структура будет перед-ся в файл BootstrapTest.js в props.left
        title = {
          <DynamicGreating color={'dark'}>
            <h1 style={{fontSize:55, color:'red'}}>My Test Project</h1>
          </DynamicGreating>
        }
        left = {
          <DynamicGreating color={'primary'}>
            {/* Передадим внутрь то что хотим отобразить */}
            <h3>My name is Dmytro</h3>
          </DynamicGreating>
        }
        right = {
          <DynamicGreating color={'primary'}>
            {/* Передадим внутрь то что хотим отобразить */}
            <h3>My surname is Kabluhii</h3>
          </DynamicGreating>
        }
      />

      <WhoAmi name='Dima' surname="Kabl" link="https://www.facebook.com/"/>
      <WhoAmi name='Nastya' surname="Kabluchii" link="https://www.facebook.com/"/>
    </Wrapper>
  );
} 
    
export default App;





// render() – генерирует корневой DOM-элемент и отвечает за вывод на стр-цу

// setState — это изменение состояния компонента отдельно от объявления его класса.

// Lesson 156
// cloneElement() - Клонирует и возвращает новый React-элемент
// React.cloneElement( element, [config], [...children] )
