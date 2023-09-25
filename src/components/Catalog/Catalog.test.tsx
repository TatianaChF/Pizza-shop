import '@testing-library/jest-dom'
import { act, fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { store } from '../../redux/store';
import Catalog from './Catalog';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe("Catalog component", () => {
    test("getting pizza types", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const types = screen.getByRole("types");
        expect(types).toBeInTheDocument();
        expect(types).toHaveTextContent("home.thickness.thinhome.thickness.traditional");
    });
    
    test("image acquisition", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });
    
    test("displaying the name of the pizza", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const h4 = screen.getByRole('heading', { level: 4 });
        expect(h4).toBeInTheDocument();
        expect(h4).toHaveTextContent("Пепперони Фреш с перцем");
    });
    
    test("getting pizza sizes", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const sizes = screen.getByRole("sizes");
        expect(sizes).toBeInTheDocument();
        expect(sizes).toHaveTextContent("26 home.abbreviations.sm30 home.abbreviations.sm40 home.abbreviations.sm");
    });
    
    test("pizza price display", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const price = screen.getByRole("price");
        expect(price).toBeInTheDocument();
        expect(price).toHaveTextContent("803 ₽");
    });
    
    test("detection of add pizza button and quantity in cart", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Catalog id={0}
                    title="Пепперони Фреш с перцем"
                    price={803}
                    imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                    count={1}
                    sizes={[26, 30, 40]}
                    types={[0, 1]} />
                </MemoryRouter>
            </Provider>
        );
    
        const button = screen.getByRole("button");
        const click = fireEvent.click(button); 
        const i = screen.getByRole("i_count");
    
        expect(button).toBeInTheDocument();
        expect(i).toBeInTheDocument();
    })
})