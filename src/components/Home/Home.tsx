import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import React, {useContext, useEffect, useState} from "react";
import Pagination from "../Pagination/Pagination";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setCategoryId, setPageCount} from "../../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";

type itemsData = {
    title: string,
    price: number,
    imageUrl: string,
    sizes: Array<number>,
    types: Array<number>
}

export interface SortType {
    sort: string,
    name: string
}

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {categoryId, sorting, pageCount} = useSelector((state: RootState) => state.filter);
    const sortType = sorting.sort;
    const [items, setItems] = useState<Array<itemsData>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {searchValue} = useContext(SearchContext);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://64145f1f9172235b8692eea8.mockapi.io/items?page=${pageCount}&limit=4&category=${
            categoryId > 0 ? categoryId : ""
        }&sortBy=${sortType.replace("-", "")}&order=${sortType.includes("-") ? "asc" : "desc"}`)
            .then((response) => {
                setItems(response.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, pageCount]);

    useEffect(() => {
        const queryString = qs.stringify({
            categoryId, sortType, pageCount
        });

        navigate(`?${queryString}`);
    }, [categoryId, sortType, pageCount]);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    }

    const onChangePage = (page: number) => {
        dispatch(setPageCount(page));
    }

    const pizzas = items.filter( obj => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase());
        

    }).map(pizza => <Catalog key={pizza.title}
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
            <div className="content__items">
                {
                    isLoading ? skeleton : pizzas
                }
            </div>
            <Pagination pageCount={pageCount} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;