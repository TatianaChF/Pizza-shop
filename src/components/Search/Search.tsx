import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {PropsTypeSearch} from "../Header/Header";
import {ChangeEvent} from "react";
import closeIcon from "../../assets/img/close.svg";
function Search( props: PropsTypeSearch ) {
    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} alt="search" />
            <input
                value={props.searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => props.setSearchValue(event.target.value) }
                className={style.input}
                placeholder="Найти пиццу..." />
            {props.searchValue && (
                <img onClick={() => props.setSearchValue("")} className={style.clearIcon} src={closeIcon} alt="close" />
            )}
        </div>
    )
}

export default Search;