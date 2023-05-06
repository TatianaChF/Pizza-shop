import Categories from "./Categories/Categories";
import Sort, {sortList} from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import React, {useEffect, useRef} from "react";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {filterSelector, setCategoryId, setFilters, setPageCount} from "../../redux/slices/filterSlice";
import qs from "qs";
import {Link, useNavigate} from "react-router-dom";
import {itemsData, fetchPizzasData, pizzasSelector} from "../../redux/slices/pizzasSlice";

export interface SortType {
    sort: string,
    name: string
}

function Home() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {categoryId,
        sorting,
        pageCount,
        searchValue} = useSelector(filterSelector);
    const { items, status } = useSelector(pizzasSelector);
    const sortType = sorting.sort;
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
    }).map((pizza: itemsData) => <Link key={pizza.title} to={`/pizza/${pizza.id}`}> <Catalog
                                id={pizza.id}
                                title={pizza.title}
                                price={pizza.price}
                                imagePizza={pizza.imageUrl}
                                sizes={pizza.sizes}
                                types={pizza.types} /> </Link>);
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