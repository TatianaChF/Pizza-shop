import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {ChangeEvent, useContext, useRef} from "react";
import closeIcon from "../../assets/img/close.svg";
import {SearchContext} from "../../App";

function Search() {
    const {searchValue, setSearchValue} = useContext(SearchContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickClear = () => {
        setSearchValue("");
        if (inputRef.current) inputRef.current.focus();
    }

    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} alt="search" />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value) }
                className={style.input}
                placeholder="Найти пиццу..." />
            {searchValue && (
                <img onClick={onClickClear} className={style.clearIcon} src={closeIcon} alt="close" />
            )}
        </div>
    )
}

export default Search;