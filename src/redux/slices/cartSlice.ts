import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {Reducer} from "react";
import {RootState} from "../store";

export interface CartState {
    totalPrice: number,
    products: Array<{
        id: number,
        title: string,
        imagePizza: string,
        price: number,
        count: number,
        size: string,
        type: string
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
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        minusProduct: (state, action) => {
            const findProduct = state.products.find(obj =>
                obj.id === action.payload.id
            );

            if (findProduct) {
                findProduct.count--;
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(obj => obj.id !== action.payload);
        },
        clearProducts: (state, action) => {
            state.products = [];
            state.totalPrice = 0;
        }
    }
})

export const cartSelector = (state: RootState) => state.cart;

export const { addProduct,
    minusProduct,
    removeProduct,
    clearProducts} = cartSlice.actions

export default cartSlice.reducer