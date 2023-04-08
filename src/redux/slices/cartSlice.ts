import {createSlice} from "@reduxjs/toolkit";

export interface FilterState {
    categoryId: number,
    pageCount: number,
    sorting: {
        sort: string,
        name: string
    }
}

const initialState: FilterState = {
    categoryId: 0,
    pageCount: 1,
    sorting: {
        sort: "rating",
        name: "популярности (по возрастанию)"
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        }
    }
})

export const { setCategoryId} = cartSlice.actions

export default cartSlice.reducer