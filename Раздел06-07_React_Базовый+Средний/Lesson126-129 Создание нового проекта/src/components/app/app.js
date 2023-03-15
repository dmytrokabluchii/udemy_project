import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  // Lesson 128 Сэмитируем работу с сервером откуда у нас приходят данные, созд-м перм-ю с массивом данных
  // increase: true - добавит к элементу класс "increase", кот-й окрашивает наш текст в оранж-й(это прописано в css)
  const data = [
    {name: 'Nika K.', salary: 800, increase: true, id:1},
    {name: 'Nastya K.', salary: 3000, increase: false, id:2},
    {name: 'Nika K.', salary: 5900, increase: true, id:3},
  ];
  return (
    <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        {/* Передадим созд-й выше массив с данными, перед-м его в наш props(data) и потом мы сможем его испол-ть */}
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

// Экспортир-м по умолчанию наш компонент App
export default App;
