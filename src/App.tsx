import React from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Catalog from "./components/Catalog/Catalog";
import pizzas from "./assets/pizzas.json";

function App() {

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
                          pizzas.map(pizza => <Catalog title={pizza.title}
                                                       price={pizza.price}
                                                       imagePizza={pizza.imageUrl}
                                                       sizes={pizza.sizes} />)
                      }
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
