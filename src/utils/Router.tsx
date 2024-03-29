import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cart from "../components/Cart/Cart";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);
