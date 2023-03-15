// Для работы с классами в реакт импорт-м необ-й нам Component и StrictMode
import {Component, StrictMode} from 'react';
// import logo from './logo.svg';
import './App.css';

// Создаем react-компонент Header
const Header = () => {
  return <h2>Hello Worlds!</h2>
}

const Field = () => {
  const holder = 'Enter here';
  // Добавим инлайн-стили к элементу
  const styledField = {
    width: '350px',
    backgroundColor: 'yellow'
  };
  // return <input placeholder="Type here" type="text"/>
  return <input 
          placeholder={holder} 
          type="text" 
          style={styledField}/>
}

// Сделаем тоже масое что и выше только испол-м при этом систаксис классов
class Field2 extends Component {
  // И для дальнейшей работы нам необходим хотя бы один метод кот-й будет что-то создавать
  // В классах кот-е служат реакт-компонентами этим главным методом явл-ся render() 
  render() {
      const holder = 'Enter here';
      const styledField = {
      width: '450px',
      backgroundColor: 'green'
    };
    // И когда мы из этого метода хотим что-то вернуть
    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
  }
}
// Главное отличие компонентов кот-е были созд-ны при помощи фун-й или классов это как они возвращ-т свои значения.
// В классах у нас должен быть обязательно метод render(), кот-й внутри себя может что-то делать и далее return
// уже возвр-т какое-то значение. В будущем в разных ситуациях нам нужно будет испол-ть тот или иной вид компонетов

// Создаем react-компонент функцию Btn. 1-й вариант: Где в перем-ю text поместим текст кнопки и далее разместим его в конопке
// 2-й вариант: Также вместо обыч-й перем-й(res) поместим туда вызов фун-и, где фун-я res будет возвращать все ту же строчку
function Btn() {
  // const text = 'Log in';
  const res = () => {
    return 'Log in';
  }
  // const paragraf = <p>Log in var2</p>
  // return <button>{text}</button>
  // return <button>{res()}</button>
  const logged = true;

  // Если польз-ль залогинен то идем дальше 'Enter', если нет(false) то показ-м 'Log in'
  return <button>{logged ? 'Enter' : res()}</button>
}

// Lesson 127. Свойства компонентов

// Вводим в нашу фун-ю такой аргумент как props. В функ-х компонентоам, т.е. тех кот-е записаны через фун-ю этот props
// приходит в виде аргумента, и далее мы его соот. можем испол-ть внутри компонента
// props - это такой объект с такими "вещами"(св-ми) которые мы в него передадим. 
// Также бывают компоненты кот-е не испол-т внутри себя props. Но при необ-ть мы все равно сможет увидеть этот объект в консоли, 
// т.е. он все равно будет сформирован, даже если мы его не передадим
// function WhoAmi (props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link} target="_blank">My profile</a>
//     </div>
//   )
// }
// Но чаще мы будем видеть все же такой синтаксис, когда пропсы мы деструктурируем на отдельные единицы
// Т.е. мы объект props деструктуризируем на отдельные переменные
function WhoAmi ({name, surname, link}) {
  return (
    <div>
      {/* <h1>My name is {name}, surname - {surname}</h1> */}
      {/* В качестве props мы можем предавать что угодно  */}
      {/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
      {/* В качестве props вызывается фун-я  */}
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link} target="_blank">My profile</a>
    </div>
  )
}

// Фун-я App() напис-я с бол-й, явл-ся react-компонентом и внутри себя она возвр-т JSX-элементы
// <Header/> просто вставит наш компонент Header в другой комп-т без каких либо внутрен-й
// В свою очередь в <Header></Header> можно уже встав-ть свой контент
// Также поместим компонет <Header/> во внутрь <StrictMode>
function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Field2/>
      <Btn/>

    {/* Испол-м этот компонент. Объект с пропсами у нас будет формир-ся из тех атрибутов что мы будем передавать в наш компонент.
    Из атрибутов ниже(name и тд) у нас будет сформирован объект props кот-й будет содер-ть в себе 3 пары данных 
    и мы их будем испол-ть выше */}
      {/* <WhoAmi name="Dima" surname="Kabl" link="https://github.com/dmytrokabluchii"/> */}
      {/* В качестве props мы можем предавать что угодно  */}
      {/* <WhoAmi name={{firstName: 'Dima'}} surname="Kabl" link="https://github.com/dmytrokabluchii"/> */}
      {/* В качестве props передадим не готовое значение а фун-ю, например ниже мы передадим фун-ю возвр-ю строку с именем: */}
      <WhoAmi name={() => {return 'Dima'}} surname="Kabl" link="https://www.facebook.com/"/>
      {/* Далее сформир-м еще один такой же компонент только с другими данными. По такой же струк-ре формир-ся и карточки в интернет магазине */}
      <WhoAmi name={() => {return 'Nastya'}} surname="Kabluchii" link="https://www.facebook.com/"/>
    </div>
  );
}

// Ниже сделаем именованный экспорт компонета, как обычной функ-и из файла
export {Header};

export default App;





// render() – генерирует корневой DOM-элемент
