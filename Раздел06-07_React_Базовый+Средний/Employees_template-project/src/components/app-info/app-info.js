import "./app-info.css";

// Далее достанет их пропсов(в файле app.js) 2 наших пропса {increased, employees} и далее в верстке 
// просто их подставим куда нам нужно
const AppInfo = ({increased, employees, corporation}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {corporation}</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;