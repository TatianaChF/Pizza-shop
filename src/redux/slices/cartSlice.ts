import {createSlice} from "@reduxjs/toolkit";

export interface CartState {
    totalPrice: number,
    goods: Array<object>
}

const initialState: CartState = {
    totalPrice: 0,
    goods: []

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCategoryId: (state, action) => {

        }
    }
})

export const { setCategoryId} = cartSlice.actions

export default cartSlice.reducer