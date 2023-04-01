import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
    categoryId: number,
    sorting: {
        sort: string,
        name: string
    }
}

const initialState: FilterState = {
    categoryId: 0,
    sorting: {
        sort: "rating",
        name: "популярности (по возрастанию)"
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSorting: (state, action) => {
            state.sorting = action.payload
        }
    }
})

export const { setCategoryId, setSorting } = filterSlice.actions

export default filterSlice.reducer