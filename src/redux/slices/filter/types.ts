export interface FilterState {
    categoryId: number,
    pageCount: number,
    sorting: FilterSort,
    searchValue: string
}

export type FilterSort = {
    sort: "rating" | "price" | "title" | "-rating" | "-price" | "-title",   
    name: string
}