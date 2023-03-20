import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Catalog from "./components/Catalog/Catalog";
import Placeholder from "./components/Placeholder/Placeholder";

type itemsData = {
    title: string,
    price: number,
    imageUrl: string,
    sizes: Array<number>,
    types: Array<number>
}

function App() {
    const [items, setItems] = useState<Array<itemsData>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://64145f1f9172235b8692eea8.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories />
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
              </div>
          </div>
      </div>
  );
}

export default App;
