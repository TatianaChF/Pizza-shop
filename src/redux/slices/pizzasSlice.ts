import {createSlice} from "@reduxjs/toolkit";

export type itemsData  = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    sizes: Array<number>,
    types: Array<number>
}

export interface PizzasState {
    items: Array<itemsData>
}

const initialState: PizzasState = {
    items: [{
        id: 0,
        title: "",
        price: 0,
        imageUrl: "",
        sizes: [],
        types: []
    }]
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer