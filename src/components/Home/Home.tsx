import Categories from "./Categories/Categories";
import Sort, {sortList} from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import {useCallback, useEffect, useRef, useState} from "react";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {setCategoryId, setFilters, setPageCount} from "../../redux/filter/filterSlice";
import {filterSelector} from "../../redux/filter/selectors";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {fetchPizzasData} from "../../redux/pizzas/asyncActions";
import {itemsData} from "../../redux/pizzas/types";
import {pizzasSelector}from "../../redux/pizzas/selectors";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { setChangeLang } from "../../redux/language/languageSlice";
import { langSelector } from "../../redux/language/selectors";

export interface SortType {
    sort: "rating" | "price" | "title" | "-rating" | "-price" | "-title",
    name: string
}

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        categoryId,
        sorting,
        pageCount,
        searchValue
    } = useSelector(filterSelector);
    const {items, status} = useSelector(pizzasSelector);
    const {language} = useSelector(langSelector);
    const sortType = sorting.sort;
    const isFetch = useRef(false);
    const isMounted = useRef(false);
    const langs = ["ru", "en"];
    const {t, i18n} = useTranslation(); 

    const fetchPizzas = async () => {
        try {
            dispatch(fetchPizzasData(
                {pageCount, categoryId, sortType}
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
    }, [categoryId, sortType, pageCount]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId, sortType, pageCount
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortType, pageCount]);

    const onChangeCategory = useCallback((title: string) => {
        dispatch(setCategoryId(title));
    }, []); 

    const onChangePage = (page: number) => {
        dispatch(setPageCount(page));
    }

    const pizzas = (items as any).filter((obj: { title: string; }) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    }).map((pizza: itemsData) => <Catalog
        key={pizza.title} 
        id={pizza.id}
        title={pizza.title}
        price={pizza.price}
        imagePizza={pizza.imageUrl}
        count={pizza.count}
        sizes={pizza.sizes}
        types={pizza.types}/>);
    const skeleton = [...new Array(6)].map((_, index) => <Placeholder key={index}/>);

    const changeLanguage = (el: React.ChangeEvent<HTMLSelectElement> | string) => {
        void i18n.changeLanguage((el as React.ChangeEvent<HTMLSelectElement>).target.value);
        dispatch(setChangeLang((el as React.ChangeEvent<HTMLSelectElement>).target.value));
    }

    return (
        <div className={styles.container}>
            <div>
                <select onChange={changeLanguage} className={styles.selectLanguage} defaultValue={language}>
                    {langs.map((lang) => <option key={lang} value={lang} className={styles.selectLanguage__option}>{lang}</option>)}
                </select>
            </div>
            <div className={styles.content__top}>
                <Categories categoryId={categoryId} onClickCategory={onChangeCategory} changeLanguage={changeLanguage} t={t} />
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
            <Pagination pageCount={pageCount} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;