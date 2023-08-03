import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { FilterSort, FilterState } from './types';

const initialState: FilterState = {
    categoryId: 0,
    pageCount: 1,
    sorting: {
        sort: "rating",
        name: "populASC"
    },
    searchValue: ""
}
export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSorting: (state, action: PayloadAction<FilterSort>) => {
            state.sorting = action.payload;
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
        setFilters: (state, action) => {
            state.pageCount = action.payload.pageCount;
            state.sorting.sort = action.payload.sortType;
            state.categoryId = action.payload.categoryId;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
})

export const {
    setCategoryId,
    setSorting,
    setPageCount,
    setFilters,
    setSearchValue
} = filterSlice.actions

export default filterSlice.reducer