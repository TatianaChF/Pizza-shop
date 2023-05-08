import React from 'react';
import Header from "./components/Header/Header";
import './scss/app.scss';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Pizza from "./components/Catalog/Pizza/Pizza";

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/pizza/:id" element={<Pizza/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
