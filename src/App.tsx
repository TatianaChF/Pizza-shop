import "./App.scss";
import Home from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Pizza = React.lazy(() => import("./components/Catalog/Pizza/Pizza"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const App = () => {
    const {t} = useTranslation();

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={
                    <Suspense fallback={<div>{`${t('loading.cartLoading')}`}</div>}>
                        <Cart />
                    </Suspense>
                }/>
                <Route path="/pizza/:id" element={
                    <Suspense fallback={<div>{`${t('loading.pizzaLoading')}`}</div>}>
                        <Pizza/>
                    </Suspense>
                }/>
                <Route path="*" element={
                    <Suspense fallback={<div>{`${t('loading.loadingMain')}`}</div>}>
                        <NotFound/>
                    </Suspense>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
