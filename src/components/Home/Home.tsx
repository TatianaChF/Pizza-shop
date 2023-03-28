import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import React, {useEffect, useState} from "react";
import {PropsTypeSearch} from "../Header/Header";
import Pagination from "../Pagination/Pagination";

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

function Home(props: PropsTypeSearch) {
    const [items, setItems] = useState<Array<itemsData>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [sorting, setSorting] = useState<SortType>({
        sort: "rating",
        name: "популярности (по возрастанию)"
    });

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://64145f1f9172235b8692eea8.mockapi.io/items?category=${
            categoryId > 0 ? categoryId : ""
        }&sortBy=${sorting.sort.replace("-", "")}&order=${sorting.sort.includes("-") ? "asc" : "desc"}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sorting]);

    const pizzas = items.filter( obj => {
        if (obj.title.toLowerCase().includes(props.searchValue.toLowerCase())) {
            return true;
        }
        
        return false;
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
                <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort sorting={sorting} onChangeSorting={(value) => setSorting(value)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeleton : pizzas
                }
            </div>
            <Pagination />
        </div>
    )
}

export default Home;