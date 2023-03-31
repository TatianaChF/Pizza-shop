import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
    categoryID: number,
    sorting: {
        sort: string,
        name: string
    }
}

const initialState: FilterState = {
    categoryID: 0,
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
            state.categoryID = action.payload
        }
    }
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer