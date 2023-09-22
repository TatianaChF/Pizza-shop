import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Home from "./Home"
import { store } from "../../redux/store"
import { MemoryRouter } from 'react-router-dom'

describe("Home component" , () => {
    test("", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        )

        const select = screen.getByRole("select");
        const sorting = screen.getByRole("sorting");
        const h2 = screen.getByRole("heading", { level: 2 });
        const pagination = screen.getByRole("pagination");

        expect(select).toBeInTheDocument();
        expect(sorting).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(pagination).toBeInTheDocument();
    })
})