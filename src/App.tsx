import React, {useState} from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
      <div className="wrapper">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
          </div>
      </div>
  );
}

export default App;
