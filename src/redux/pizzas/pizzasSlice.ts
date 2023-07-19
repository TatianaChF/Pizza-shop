import {createSlice} from "@reduxjs/toolkit";
import {PizzasState, Status} from "./types";
import { fetchPizzasData } from "./asyncActions";

const initialState: PizzasState = {
    items: [{
        id: 0,
        title: "",
        price: 0,
        imageUrl: "",
        count: 0,
        sizes: [],
        types: []
    }],
    status: Status.LOADING
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzasData.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.LOADED;
        })
            .addCase(fetchPizzasData.pending, (state) => {
                state.items = [];
                state.status = Status.LOADING;
            })
            .addCase(fetchPizzasData.rejected, (state) => {
                state.items = [];
                state.status = Status.ERROR;
            })
    }
})

export const {setItems} = pizzasSlice.actions

export default pizzasSlice.reducer