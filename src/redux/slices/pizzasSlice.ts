import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type itemsData = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    sizes: Array<number>,
    types: Array<number>
}

type ParamsType = {
    pageCount: number,
    categoryId: number,
    sortType: string
}

export interface PizzasState {
    items: Array<itemsData>,
    status: "loaded" | "loading" | "error"
}

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
    status: "loading"
}

export const fetchPizzasData = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params: ParamsType) => {
        const {
            pageCount,
            categoryId,
            sortType
        } = params;

        const category = categoryId > 0 ? categoryId : "";
        const sort = sortType.replace("-", "");
        const order = sortType.includes("-") ? "asc" : "desc";

        const res = await fetch(`https://64145f1f9172235b8692eea8.mockapi.io/items?page=${pageCount}&limit=4&category=${category}&sortBy=${sort}&order=${order}`);
        return await res.json();
    }
)

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
            state.status = "loaded";
        })
            .addCase(fetchPizzasData.pending, (state, action) => {
                state.items = [];
                state.status = "loading";
            })
            .addCase(fetchPizzasData.rejected, (state, action) => {
                state.items = [];
                state.status = "error";
            })
    }
})

export const pizzasSelector = (state: RootState) => state.pizzas;

export const {setItems} = pizzasSlice.actions

export default pizzasSlice.reducer