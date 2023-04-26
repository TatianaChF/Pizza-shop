import {createSlice} from "@reduxjs/toolkit";

export interface PizzasState {
    items: Array<string>
}

const initialState: PizzasState = {
    items: []
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload.items;
        }
    }
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer