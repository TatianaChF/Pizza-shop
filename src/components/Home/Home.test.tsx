import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import Home from "./Home"
import { store } from "../../redux/store"
import { MemoryRouter } from 'react-router-dom'

describe("Home component" , () => {
    test("displaying content on screen", async () => {
        await waitFor(() => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Home />
                    </MemoryRouter>
                </Provider>
            )
        })

        const select = screen.getByRole("select");
        const sorting = screen.getByRole("sorting");
        const h2 = screen.getByRole("h2");
        const pagination = screen.getByRole("pagination");
        
        expect(select).toBeInTheDocument();
        expect(sorting).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(pagination).toBeInTheDocument();
    })
})
