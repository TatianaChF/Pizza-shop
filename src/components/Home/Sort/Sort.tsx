import React, {RefObject, useEffect, useRef, useState} from "react";
import {SortType} from "../Home";
import {useDispatch, useSelector} from "react-redux";
import {filterSortingSelector, setSorting} from "../../../redux/slices/filterSlice";
import styles from "./Sort.module.scss";

export const sortList: SortType[] = [
    {name: "популярности (по возрастанию)", sort: "rating"},
    {name: "популярности (по убыванию)", sort: "-rating"},
    {name: "цене (по возрастанию)", sort: "price"},
    {name: "цене (по убыванию)", sort: "-price"},
    {name: "алфавиту (по возрастанию)", sort: "title"},
    {name: "алфавиту (по убыванию)", sort: "-title"}
];

function Sort() {
    const dispatch = useDispatch();
    const sorting = useSelector(filterSortingSelector);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sortRef = useRef<HTMLDivElement | EventTarget>();

    const chooseListItem = (value: SortType) => {
        dispatch(setSorting(value));
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const path = event.composedPath && event.composedPath();
            if (!path.includes(sortRef.current as EventTarget)) {
                setIsOpen(false);
                console.log("click outside");
            }
        }
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        }
    }, [])

    return (
        <div ref={sortRef as RefObject<HTMLDivElement>} className={styles.sort}>
            <div className={styles.sort__label}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpen(!isOpen)}>{sorting.name}</span>
            </div>
            {isOpen && (
                <div className={styles.sort__popup}>
                    <ul>
                        {
                            sortList.map((value) => (
                                <li key={value.name} onClick={() => chooseListItem(value)}
                                    className={value.sort === sorting.sort ? styles.active : ""}>
                                    {value.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort;