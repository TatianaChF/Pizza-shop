import { Products } from "../../components/Catalog/Catalog";
import { RootState } from "../store";

export const cartSelector = (state: RootState) => state.cart;

export const cartProductsSelectorById = (id: number, state: RootState) => state.cart.products
    .find((obj: Products) => obj.id === id);