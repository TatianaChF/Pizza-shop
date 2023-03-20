import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Catalog from "./components/Catalog/Catalog";
import Placeholder from "./components/Placeholder/Placeholder";
import Home from "./components/Home/Home";

function App() {

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <div className="container">
                  <Home />
              </div>
          </div>
      </div>
  );
}

export default App;
