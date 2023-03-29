import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {ChangeEvent, useContext} from "react";
import closeIcon from "../../assets/img/close.svg";
import {SearchContext} from "../../App";
function Search() {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} alt="search" />
            <input
                value={searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value) }
                className={style.input}
                placeholder="Найти пиццу..." />
            {searchValue && (
                <img onClick={() => setSearchValue("")} className={style.clearIcon} src={closeIcon} alt="close" />
            )}
        </div>
    )
}

export default Search;