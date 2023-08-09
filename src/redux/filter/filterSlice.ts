import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { FilterSort, FilterState } from './types';

const initialState: FilterState = {
    categoryTitle: "all",
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
        setCategoryTitle: (state, action: PayloadAction<string>) => {
            state.categoryTitle = action.payload;
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
            state.categoryTitle = action.payload.categoryTitle;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
})

export const {
    setCategoryTitle,
    setSorting,
    setPageCount,
    setFilters,
    setSearchValue
} = filterSlice.actions

export default filterSlice.reducer