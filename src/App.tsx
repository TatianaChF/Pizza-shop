import "./App.scss";
import {Outlet} from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
