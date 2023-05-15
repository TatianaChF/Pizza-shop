import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../store";

export interface FilterState {
    categoryId: number,
    pageCount: number,
    sorting: {
        sort: string,
        name: string
    },
    searchValue: string
}

const initialState: FilterState = {
    categoryId: 0,
    pageCount: 1,
    sorting: {
        sort: "rating",
        name: "популярности (по возрастанию)"
    },
    searchValue: ""
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
            state.pageCount = action.payload.pageCount;
            state.sorting.sort = action.payload.sortType;
            state.categoryId = action.payload.categoryId;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})
export const filterSelector = (state: RootState) => state.filter;
export const filterSortingSelector = (state: RootState) => state.filter.sorting;

export const {
    setCategoryId,
    setSorting,
    setPageCount,
    setFilters,
    setSearchValue
} = filterSlice.actions

export default filterSlice.reducer