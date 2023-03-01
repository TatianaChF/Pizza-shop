import React, {useState} from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Catalog, {PizzaType} from "./components/Catalog/Catalog";

function App() {

    let [pizza, setPizza] = useState<Array<PizzaType>>([
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" },
        { title: "Мексиканская" }
    ]);

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
                      <Catalog title="Мексиканская" price={500} />
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                      <Catalog title="Мексиканская" price={500}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
