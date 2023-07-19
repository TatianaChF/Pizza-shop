import style from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import {ChangeEvent, useCallback, useRef, useState} from "react";
import closeIcon from "../../assets/img/close.svg";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filter/filterSlice";

function Search() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const requestTimer = useCallback((str: string) => dispatch(setSearchValue(str)), [dispatch]);

    const onClickClear = () => {
        dispatch(setSearchValue(""));
        setInputValue("");
        if (inputRef.current) inputRef.current.focus();
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        requestTimer(event.target.value);
    }

    return (
        <div className={style.root}>
            <img src={searchIcon} className={style.icon} alt="search"/>
            <input
                ref={inputRef}
                value={inputValue}
                onChange={onChangeInput}
                className={style.input}
                placeholder="Найти пиццу..."/>
            {inputValue && (
                <img onClick={onClickClear} className={style.clearIcon} src={closeIcon} alt="close"/>
            )}
        </div>
    )
}

export default Search;