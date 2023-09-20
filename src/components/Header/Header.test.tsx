import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe("Header component", () => {
    test("logo and cart display", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        )
    
        const logo = screen.getByRole("logo");
        const btn_cart = screen.getByRole("btn_cart");
        expect(logo).toBeInTheDocument();
        expect(btn_cart).toBeInTheDocument();
    });

    test("zero default price and quantity values", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        )

        const price = screen.getByRole("price");
        const count = screen.getByRole("count");
        expect(price).toHaveTextContent("0 ₽");
        expect(count).toHaveTextContent("0");
    })
})