import {createSlice} from "@reduxjs/toolkit";

export interface CartState {
    totalPrice: number,
    products: Array<{
        id: number,
        price: number,
        count: number
    }>
}

const initialState: CartState = {
    totalPrice: 0,
    products: []

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        /*addProduct: (state, action) => {
            state.products.push(action.payload);
            state.totalPrice = state.products.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0)
        },*/
        addProduct: (state, action) => {
            const findProduct = state.products.find(obj =>
                obj.id === action.payload.id
            );

            if (findProduct) {
                findProduct.count++;
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.products.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(obj => obj.id !== action.payload);
        },
        clearProducts: (state, action) => {
            state.products = [];
        }
    }
})

export const { addProduct,
    removeProduct,
    clearProducts} = cartSlice.actions

export default cartSlice.reducer