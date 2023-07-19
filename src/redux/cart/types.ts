export interface CartState {
    totalPrice: number,
    products: Array<CartItem>
}

export type CartItem = {
    id: number,
    title: string,
    imagePizza: string,
    price: number,
    count: number,
    size: number,
    type: string
}