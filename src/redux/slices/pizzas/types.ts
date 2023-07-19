export type itemsData = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    sizes: Array<number>,
    types: Array<number>
}

export type ParamsType = {
    pageCount: number,
    categoryId: number,
    sortType: string
}

export interface PizzasState {
    items: Array<itemsData>,
    status: Status
}

export enum Status {
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error"
}