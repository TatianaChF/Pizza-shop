import '@testing-library/jest-dom'
import { act, fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { store } from '../../redux/store';
import Catalog from './Catalog';
import { Provider } from 'react-redux';

test("getting pizza types", () => {
    render(
        <Provider store={store}>
            <Catalog id={0}
            title="Пепперони Фреш с перцем"
            price={803}
            imagePizza="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
            count={1}
            sizes={[26, 30, 40]}
            types={[0, 1]} />
        </Provider>
    );

    const types = screen.getByRole("types");
    expect(types).toBeInTheDocument();
    expect(types).toHaveTextContent("home.thickness.thinhome.thickness.traditional");
})