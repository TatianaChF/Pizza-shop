import { createAsyncThunk } from "@reduxjs/toolkit";
import { ParamsType, itemsData } from "./types";

export const fetchPizzasData = createAsyncThunk( 
    'pizzas/fetchPizzasStatus',
    async (params: ParamsType) => {
        const {
            pageCount,
            categoryTitle,
            sortType
        } = params;

        const category = categoryTitle !== "all" ? categoryTitle : "";
        const sort = sortType.replace("-", "");
        const order = sortType.includes("-") ? "asc" : "desc";

        const res = await fetch(`https://64145f1f9172235b8692eea8.mockapi.io/items?page=${pageCount}&limit=4&category=${category}&sortBy=${sort}&order=${order}`);
        return (await res.json()) as itemsData[];
    }
)