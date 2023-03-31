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
    name: 'filter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer