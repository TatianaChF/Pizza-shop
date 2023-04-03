import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {ChangeEvent, useCallback, useContext, useRef, useState} from "react";
import closeIcon from "../../assets/img/close.svg";
import {SearchContext} from "../../App";
import debounce from "lodash.debounce";

function Search() {
    const [inputValue, setInputValue] = useState("");
    const {searchValue, setSearchValue} = useContext(SearchContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const requestTimer  = useCallback(
        debounce(() => {
            console.log("Request");
        }, 1000),
        []
    );

    const onClickClear = () => {
        setSearchValue("");
        if (inputRef.current) inputRef.current.focus();
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        /*setSearchValue(event.target.value);
        requestTimer();*/
        setInputValue(event.target.value);
    }

    return (
        <div className={style.root} >
            <img src={searchIcon} className={style.icon} alt="search" />
            <input
                ref={inputRef}
                value={inputValue}
                onChange={ onChangeInput }
                className={style.input}
                placeholder="Найти пиццу..." />
            {inputValue && (
                <img onClick={onClickClear} className={style.clearIcon} src={closeIcon} alt="close" />
            )}
        </div>
    )
}

export default Search;