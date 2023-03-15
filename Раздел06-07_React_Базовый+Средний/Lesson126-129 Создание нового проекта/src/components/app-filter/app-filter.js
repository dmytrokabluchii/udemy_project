import "./app-filter.css";

const AppFilter = () => {
    return (
        // Стили к классам btn и тд подтяг-ся автоматом с Bootstrap
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;