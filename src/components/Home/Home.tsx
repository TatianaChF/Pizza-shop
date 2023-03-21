import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Placeholder from "../Placeholder/Placeholder";
import Catalog from "../Catalog/Catalog";
import React, {useEffect, useState} from "react";

type itemsData = {
    title: string,
    price: number,
    imageUrl: string,
    sizes: Array<number>,
    types: Array<number>
}

function Home() {
    const [items, setItems] = useState<Array<itemsData>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [sorting, setSorting] = useState<number>(0);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://64145f1f9172235b8692eea8.mockapi.io/items?category=" + categoryId)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <>
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Placeholder key={index} />)
                        : items.map(pizza => <Catalog key={pizza.title}
                                                      title={pizza.title}
                                                      price={pizza.price}
                                                      imagePizza={pizza.imageUrl}
                                                      sizes={pizza.sizes}
                                                      types={pizza.types} />)
                }
            </div>
        </>
    )
}

export default Home;