import "./App.scss";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Pizza from "./components/Catalog/Pizza/Pizza";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/pizza/:id" element={<Pizza/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
