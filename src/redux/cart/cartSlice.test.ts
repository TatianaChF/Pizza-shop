import "@testing-library/jest-dom/extend-expect"
import {expect, test} from '@jest/globals';
import { CartState } from "./types";
import cartReducer, { addProduct } from './cartSlice';

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

test("getting pizza data", () => {
    const newState = cartReducer(state, addProduct(state.products[1]));

    expect(newState.products[1].title).toBe("Pizza test two");
    expect(newState.products[1].price).toBe(200);
    expect(newState.products[1].imagePizza).toBe("../../../assets/img/test-pizza.png");
    expect(newState.products[1].size).toBe(26);
    expect(newState.products[1].type).toBe("тонкое");
});

test("increase in the number of pizzas", () => {
    const newState = cartReducer(state, addProduct(state.products[0]));

    expect(newState.products[0].count).toBe(2);
})