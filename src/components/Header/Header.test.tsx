import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test("logo display", () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    )

    const logo = screen.getByRole("logo");
    expect(logo).toBeInTheDocument();
})