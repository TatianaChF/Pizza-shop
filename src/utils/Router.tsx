import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";
import ReactDOM from "react-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cart from "../components/Cart/Cart";
import Pizza from "../components/Catalog/Pizza/Pizza";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "pizza/:id",
                element: <Pizza />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);
