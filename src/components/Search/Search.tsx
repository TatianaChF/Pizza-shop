import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
function Search() {
    return (
        <div className={style.root} >
            <img src={searchIcon} />
            <input className={style.input} placeholder="Найти пиццу..." />
        </div>
    )
}

export default Search;