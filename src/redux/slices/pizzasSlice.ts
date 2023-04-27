import {AsyncThunkAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export type itemsData  = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    sizes: Array<number>,
    types: Array<number>
}

type ParamsType = {
    pageCount: number,
    categoryId: number,
    sortType: string
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

export const fetchPizzasData = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params: ParamsType) => {
        const { pageCount,
            categoryId,
            sortType } = params;
        const { data } = await axios
            .get(`https://64145f1f9172235b8692eea8.mockapi.io/items?page=${pageCount}&limit=4&category=${
                categoryId > 0 ? categoryId : ""
            }&sortBy=${sortType.replace("-", "")}&order=${sortType.includes("-") ? "asc" : "desc"}`);
        return data;
    }
)

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