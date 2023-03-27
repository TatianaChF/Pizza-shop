import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {PropsTypeSearch} from "../Header/Header";
import {ChangeEvent} from "react";
function Search( props: PropsTypeSearch ) {
    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} />
            <input
                value={props.searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => props.setSearchValue(event.target.value) }
                className={style.input}
                placeholder="Найти пиццу..." />
        </div>
    )
}

export default Search;