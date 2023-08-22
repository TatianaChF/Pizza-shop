import "@testing-library/jest-dom/extend-expect"
import {expect, test} from '@jest/globals';
import { CartState } from "./types";
import cartReducer, { addProduct } from './cartSlice';

test("getting pizza data", () => {
    const state: CartState = {
        totalPrice: 100,
        products: [
            {
                id: 0,
                title: "Pizza test one",
                imagePizza: "../../../assets/img/test-pizza.png",
                price: 100,
                count: 1,
                size: 26,
                type: "тонкое"
            },
            {
                id: 1,
                title: "Pizza test two",
                imagePizza: "../../../assets/img/test-pizza.png",
                price: 200,
                count: 2,
                size: 26,
                type: "тонкое"
            },
            {
                id: 3,
                title: "Pizza test three",
                imagePizza: "../../../assets/img/test-pizza.png",
                price: 100,
                count: 1,
                size: 34,
                type: "традиционное"
            }
        ]
    };

    const newState = cartReducer(state, addProduct(state.products[1]));

    expect(newState.products[1].title).toBe("Pizza test two");
})