import {Categories} from "./Categories/Categories";
import Sort, {sortList} from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import {useCallback, useEffect, useRef, useState} from "react";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {setCategoryTitle, setFilters, setPageCount} from "../../redux/filter/filterSlice";
import {filterSelector} from "../../redux/filter/selectors";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {fetchPizzasData} from "../../redux/pizzas/asyncActions";
import {itemsData} from "../../redux/pizzas/types";
import {pizzasSelector}from "../../redux/pizzas/selectors";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";

export interface SortType {
    sort: "rating" | "price" | "title" | "-rating" | "-price" | "-title",
    name: string
}

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        categoryTitle,
        sorting,
        pageCount,
        searchValue
    } = useSelector(filterSelector);
    const {items, status} = useSelector(pizzasSelector);
    const sortType = sorting.sort;
    const isFetch = useRef(false);
    const isMounted = useRef(false);
    const langs = ["ru", "en"];
    const {t, i18n} = useTranslation(); 

    const fetchPizzas = async () => {
        try {
            dispatch(fetchPizzasData(
                {pageCount, categoryTitle, sortType}
            ));
        } catch (error) {
            alert(t('home.errorFetch'));
        }
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortList.find(obj => obj.sort === params.sortType);

            dispatch(
                setFilters({
                    ...params,
                    sort
                })
            );
            isFetch.current = true;
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isFetch.current) {
            fetchPizzas();
        }
        isFetch.current = false;
    }, [categoryTitle, sortType, pageCount]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryTitle, sortType, pageCount
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryTitle, sortType, pageCount]);

    const onChangeCategory = useCallback((title: string) => {
        dispatch(setCategoryTitle(title));
    }, []); 

    const onChangePage = (page: number) => {
        dispatch(setPageCount(page));
    }

    const pizzas = (items as any).filter((obj: { title: {ru: string, en: string};}) => {
        return (i18n.language === "ru" ? obj.title.ru : obj.title.en).toLowerCase().includes(searchValue.toLowerCase());
    }).map((pizza: itemsData) => <Catalog
        key={i18n.language === "ru" ? pizza.title.ru : pizza.title.en} 
        id={pizza.id}
        title={i18n.language === "ru" ? pizza.title.ru : pizza.title.en}
        price={pizza.price}
        imagePizza={pizza.imageUrl}
        count={pizza.count}
        sizes={pizza.sizes}
        types={pizza.types}/>);
    const skeleton = [...new Array(6)].map((_, index) => <Placeholder key={index}/>);

    const changeLanguage = useCallback((el: React.ChangeEvent<HTMLSelectElement> | string) => {
        void i18n.changeLanguage((el as React.ChangeEvent<HTMLSelectElement>).target.value);
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <select onChange={changeLanguage} className={styles.selectLanguage} defaultValue={i18n.language}>
                    {langs.map((lang) => <option key={lang} value={lang} className={styles.selectLanguage__option}>{lang}</option>)}
                </select>
            </div>
            <div role="sorting" className={styles.content__top}>
                <Categories categoryTitle={categoryTitle} onClickCategory={onChangeCategory} changeLanguage={changeLanguage} t={t} />
                <Sort sorting={sorting} t={t} />
            </div>
            <h2 className={styles.content__title}>{`${t('home.header')}`}</h2>
            {
                status === "error" ? (
                    <div className={styles.content__error__info}>
                        <h2>{`${t('home.errorMessage')}`}</h2>
                        <p>{`${t('home.errorMessageTwo')}`}</p>
                    </div>
                ) : (
                    <div className={styles.content__items}>
                        {
                            status === "loading" ? skeleton : pizzas
                        }
                    </div>
                )
            }
            <div role="pagination">
                <Pagination pageCount={pageCount} onChangePage={onChangePage}/>
            </div>
        </div>
    )
}

export default Home;