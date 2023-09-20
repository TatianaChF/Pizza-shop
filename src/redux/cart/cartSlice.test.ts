import {expect, test} from '@jest/globals';
import { CartState } from "./types";
import cartReducer, { addProduct, clearProducts, minusProduct, removeProduct } from './cartSlice';

const state: CartState = {
        totalPrice: 600,
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
                id: 2,
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
});

test("increase the total price", () => {
    const newState = cartReducer(state, addProduct(state.products[0]));

    expect(newState.totalPrice).toBe(700);
});

test("reducing the amount of pizza", () => {
    const newState = cartReducer(state, minusProduct(state.products[1]));
    
    expect(newState.products[1].count).toBe(1);
});

test("total price reduction after pizza removal", () => {
    const newState = cartReducer(state, minusProduct(state.products[1]));

    expect(newState.totalPrice).toBe(400);
});

test("total price change when pizza is removed", () => {
    const newState = cartReducer(state, removeProduct(state.products[2]));

    expect(newState.totalPrice).toBe(500);
});

test("resetting the total price after emptying the cart", () => {
    const newState = cartReducer(state, clearProducts(state.products));

    expect(newState.totalPrice).toBe(0);
});

test("zeroing the array of products after emptying the basket", () => {
    const newState = cartReducer(state, clearProducts(state.products));

    expect(newState.products).toBeNull;
})