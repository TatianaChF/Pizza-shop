import {createSlice} from "@reduxjs/toolkit";

export interface CartState {
    totalPrice: number,
    products: Array<object>
}

const initialState: CartState = {
    totalPrice: 0,
    products: []

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        }
    }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer