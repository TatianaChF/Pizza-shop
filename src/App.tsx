import "./App.scss";
import {Outlet} from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header";

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
