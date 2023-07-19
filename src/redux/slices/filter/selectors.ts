import { RootState } from "../../store";

export const filterSelector = (state: RootState) => state.filter;
export const filterSortingSelector = (state: RootState) => state.filter.sorting;