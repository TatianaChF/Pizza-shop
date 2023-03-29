import React, {SetStateAction, useState} from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";

type SearchValues = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchValues>({
    searchValue: "",
    setSearchValue: (value: SetStateAction<string>) => value
});

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
      <div className="wrapper">
          <SearchContext.Provider value={{searchValue, setSearchValue}}>
              <Header />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </div>
          </SearchContext.Provider>
      </div>
  );
}

export default App;
