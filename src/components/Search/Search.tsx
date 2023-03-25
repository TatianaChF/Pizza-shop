import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
function Search() {
    return (
        <div>
            <img src={searchIcon} />
            <input className={style.root} placeholder="Найти пиццу..." />
        </div>
    )
}

export default Search;