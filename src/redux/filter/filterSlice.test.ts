import { FilterState } from "./types";
import filterReducer, { setCategoryTitle } from "./filterSlice";

const state: FilterState = {
    categoryTitle: "all",
    pageCount: 1,
    sorting: {
        sort: "rating",
        name: "populASC"
    },
    searchValue: ""
};

test("category change", () => {
    const newState = filterReducer(state, setCategoryTitle("Мясные"));

    expect(newState.categoryTitle).toBe("Мясные");
});

