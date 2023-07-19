import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import { ParamsType, PizzasState, Status, itemsData } from "./types";

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
        return (await res.json()) as itemsData[];
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