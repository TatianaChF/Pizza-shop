import style from "./Search.module.scss";
function Search() {
    return (
        <div>
            <input className={style.root} placeholder="Найти пиццу..." />
        </div>
    )
}

export default Search;