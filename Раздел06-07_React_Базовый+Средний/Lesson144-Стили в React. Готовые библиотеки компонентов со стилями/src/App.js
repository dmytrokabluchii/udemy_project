// Для работы с классами в реакт импорт-м необ-й нам Component и StrictMode, 
// а также Фрагменты из Lesson 137. Способ 1:
// import {Component, Fragment} from 'react';
import {Component} from 'react';
// Lesson 143. Styled Components
import styled from 'styled-components';
import './App.css';

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

// Фун-я App() напис-я с бол-й, явл-ся react-компонентом и внутри себя она возвр-т JSX-элементы
function App() {
  return (
    // Использ-м <Fragment> как компонент для замены  <div>
    // <Fragment className="App">   ...         </Fragment>
    // <div className="App">
    <Wrapper>
      <WhoAmi name='Dima' surname="Kabl" link="https://www.facebook.com/"/>
      <WhoAmi name='Nastya' surname="Kabluchii" link="https://www.facebook.com/"/>
    </Wrapper>
  );
}

export default App;





// render() – генерирует корневой DOM-элемент и отвечает за вывод на стр-цу

// setState — это изменение состояния компонента отдельно от объявления его класса.
