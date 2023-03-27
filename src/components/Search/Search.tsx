import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {PropsTypeSearch} from "../Header/Header";
function Search( props: PropsTypeSearch ) {
    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} />
            <input className={style.input} placeholder="Найти пиццу..." />
        </div>
    )
}

export default Search;