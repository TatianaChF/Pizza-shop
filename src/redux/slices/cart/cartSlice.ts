import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {Products} from "../../../components/Catalog/Catalog";
import { getCartFromLS } from "../../../utils/getCartFromLS";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { CartItem, CartState } from "./types";

const CartData = getCartFromLS();

const initialState: CartState = {
    totalPrice: CartData.totalPrice,
    products: CartData.products

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
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

            state.totalPrice = calcTotalPrice(state.products);
        },
        minusProduct: (state, action: PayloadAction<CartItem>) => {
            const findProduct = state.products.find(obj =>
                obj.id === action.payload.id
            );

            if (findProduct) {
                findProduct.count--;
            }

            state.totalPrice = state.totalPrice - action.payload.price;
        },
        removeProduct: (state, action: PayloadAction<CartItem>) => {
            state.products = state.products.filter(obj => obj.id !== action.payload.id);
            state.totalPrice = state.totalPrice - (action.payload.price * action.payload.count);
        },
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        }
    }
})  

export const {
    addProduct,
    minusProduct,
    removeProduct,
    clearProducts
} = cartSlice.actions

export default cartSlice.reducer