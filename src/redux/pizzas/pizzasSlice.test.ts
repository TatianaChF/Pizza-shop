import { PizzasState, Status } from "./types";
import pizzasReducer, { setItems } from "./pizzasSlice";

const state: PizzasState = {
    items: [{
        id: 0,
        title: {
            ru: "",
            en: ""
        },
        price: 0,
        imageUrl: "",
        count: 0,
        sizes: [],
        types: []
    }],
    status: Status.LOADING
};

test("getting pizza data", () => {
    const newState = pizzasReducer(state, setItems([{
            id: 11,
            title: {
                ru: "Гавайская",
                en: "Hawaiian"
            },
            price: 450,
            imageUrl: "https://pizzapapas.ru/image/cache/catalog/1pizza/gavajskaja-500x500.jpg",
            count: 1,
            sizes: [26, 40],
            types: [0, 1]
    }]));

    expect(newState.items[0].title.ru).toBe("Гавайская");
    expect(newState.items[0].title.en).toBe("Hawaiian");
    expect(newState.items[0].price).toBe(450);
    expect(newState.items[0].imageUrl).toBe("https://pizzapapas.ru/image/cache/catalog/1pizza/gavajskaja-500x500.jpg");
    expect(newState.items[0].count).toBe(1);
    expect(newState.items[0].sizes[0]).toBe(26);
    expect(newState.items[0].types[1]).toBe(1);
})