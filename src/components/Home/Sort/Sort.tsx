import { RefObject, useEffect, useRef, useState } from "react";
import { SortType } from "../Home";
import { useDispatch } from "react-redux";
import { setSorting } from "../../../redux/filter/filterSlice";
import { FilterSort } from "../../../redux/filter/types";
import styles from "./Sort.module.scss";
import { memo } from "react";
import { TFunction } from "i18next";

export const sortList: SortType[] = [
    {name: "populASC", sort: "rating"},
    {name: "populDESC", sort: "-rating"},
    {name: "priceASC", sort: "price"},
    {name: "priceDESC", sort: "-price"},
    {name: "alphASC", sort: "title"},
    {name: "alphDESC", sort: "-title"}
];

type SortPropsType = {
    sorting: FilterSort,
    t: TFunction<"translation", undefined>
}

const Sort = memo(({ sorting, t } : SortPropsType) => {
    const dispatch = useDispatch();
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
                <b>{`${t('home.sortHeader')}`}</b>
                <span onClick={() => setIsOpen(!isOpen)}>{`${t(`home.sort.${sorting.sort}`)}`}</span>
            </div>
            {isOpen && (
                <div className={styles.sort__popup}>
                    <ul>
                        {
                            sortList.map((value) => (
                                <li key={value.name} onClick={() => chooseListItem(value)}
                                    className={value.sort === sorting.sort ? styles.active : ""}>
                                        {`${t(`home.sort.${value.sort}`)}`}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    )
});

export default Sort;