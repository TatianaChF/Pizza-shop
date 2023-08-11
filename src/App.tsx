import "./App.scss";
import {Outlet} from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header";

const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Pizza = React.lazy(() => import("./components/Catalog/Pizza/Pizza"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
