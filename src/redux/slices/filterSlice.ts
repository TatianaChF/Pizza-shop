import { createSlice } from '@reduxjs/toolkit'

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

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSorting: (state, action) => {
            state.sorting = action.payload;
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        },
        setFilters: (state, action) => {
            state.pageCount = Number(action.payload.pageCount);
            state.sorting = action.payload.sorting;
            state.categoryId = Number(action.payload.categoryId);
        }
    }
})

export const { setCategoryId,
    setSorting,
    setPageCount } = filterSlice.actions

export default filterSlice.reducer