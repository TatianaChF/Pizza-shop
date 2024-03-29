import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem("cart");
    const products = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(products);

    return {
        products,
        totalPrice
    };
}