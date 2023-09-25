import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import React from "react";
import CartProduct from "./CartProduct";
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

describe("Cart component", () => {
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
        const titleElement = screen.getByText("home.title.Сырная");
        expect(titleElement).toBeInTheDocument();
    });
    
    test("renders a count", () => {
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
        const countElement = screen.getByText("1");
        expect(countElement).toBeInTheDocument();
    });
    
    test("renders a type and a size", () => {
        render(
            <Provider store={store}>
                <CartProduct id={1} 
                title="Сырная" 
                imagePizza="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                price={245}
                count={1}
                size={26}
                type="thin" /> 
            </Provider>
        );
        const typeElement = screen.getByRole("p");
        expect(typeElement).toHaveTextContent("home.thickness.thin, 26 home.abbreviations.sm");
    });
    
    test("price display", () => {
        render(
            <Provider store={store}>
                <CartProduct id={1} 
                title="Сырная" 
                imagePizza="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                price={245}
                count={1}
                size={26}
                type="thin" /> 
            </Provider>
        );
        const priceElement = screen.getByText("245 ₽");
        expect(priceElement).toBeInTheDocument();
    });
    
    test("multiplying the price and quantity of pizza", () => {
        render(
            <Provider store={store}>
                <CartProduct id={1} 
                title="Сырная" 
                imagePizza="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                price={245}
                count={3}
                size={26}
                type="thin" /> 
            </Provider>
        );
        const totalPricePizza = screen.getByRole("price");
        expect(totalPricePizza).toHaveTextContent("735 ₽");
    })
})
