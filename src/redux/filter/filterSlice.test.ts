import { FilterState } from "./types";
import filterReducer, { setCategoryTitle, setPageCount, setSorting } from "./filterSlice";

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

test("sorting change", () => {
    const newState = filterReducer(state, setSorting({sort: "title", name: "названию (по возврастанию)"}));

    expect(newState.sorting.sort).toBe("title");
    expect(newState.sorting.name).toBe("названию (по возврастанию)");
});

test("page count change", () => {
    const newState = filterReducer(state, setPageCount(2));

    expect(newState.pageCount).toBe(2);
})