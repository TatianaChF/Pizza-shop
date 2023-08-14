export type itemsData = {
    id: number,
    title: {
        ru: string,
        en: string
    },
    price: number,
    imageUrl: string,
    count: number,
    sizes: Array<number>,
    types: Array<number>
}

export type ParamsType = {
    pageCount: number,
    categoryTitle: string,
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