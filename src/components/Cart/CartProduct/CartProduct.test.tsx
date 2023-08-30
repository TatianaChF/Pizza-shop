import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import React from "react";
import CartProduct from "./CartProduct";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

test("renders a title", () => {
    render(
        <Provider store={store}>
           <CartProduct id={1} 
            title="Сырная" 
            imagePizza="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
            price={245}
            count={1}
            size={26}
            type="0" /> 
        </Provider>
    );
    const linkElement = screen.getByText("home.title.Сырная");
    expect(linkElement).toBeInTheDocument();

})