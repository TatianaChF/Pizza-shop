import Categories from "./Categories/Categories";
import Sort, {sortList} from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import React, {useContext, useEffect, useRef, useState} from "react";
import Pagination from "../Pagination/Pagination";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {RootState, store, useAppDispatch} from "../../redux/store";
import {FilterState, setCategoryId, setFilters, setPageCount} from "../../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {itemsData, fetchPizzasData} from "../../redux/slices/pizzasSlice";

export interface SortType {
    sort: string,
    name: string
}

function Home() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {categoryId,
        sorting,
        pageCount} = useSelector((state: RootState) => state.filter);
    const { items, status } = useSelector((state: RootState) => state.pizzas);
    const sortType = sorting.sort;
    const {searchValue} = useContext(SearchContext);
    const isFetch = useRef(false);
    const isMounted = useRef(false);

    const fetchPizzas  = async () => {

        try {
            dispatch(fetchPizzasData(
                {pageCount, categoryId, sortType}
            ));
        } catch (error) {
            alert("Ошибка при получении пицц :(");
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

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    }

    const onChangePage = (page: number) => {
        dispatch(setPageCount(page));
    }

    const pizzas = (items as any).filter( (obj: { title: string; }) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    }).map((pizza: itemsData) => <Catalog key={pizza.title}
                                id={pizza.id}
                                title={pizza.title}
                                price={pizza.price}
                                imagePizza={pizza.imageUrl}
                                sizes={pizza.sizes}
                                types={pizza.types} />);
    const skeleton = [...new Array(6)].map((_, index) => <Placeholder key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === "error" ? (
                    <div className="content__error-info">
                        <h2>Произошла ошибка</h2>
                        <p>К сожалению, не удалось получить пиццы. Пожалуйста, повторите попытку позже.</p>
                    </div>
                ) : (
                    <div className="content__items">
                        {
                            status === "loading" ? skeleton : pizzas
                        }
                    </div>
                )
            }
            <Pagination pageCount={pageCount} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;