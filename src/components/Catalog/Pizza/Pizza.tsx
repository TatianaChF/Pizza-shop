import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

type PizzaType = {
    imageUrl: string,
    title: string,
    price: string
}

function Pizza() {
    const [pizza, setPizza] = useState<PizzaType>();
    const { id } = useParams();
    
    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get("https://64145f1f9172235b8692eea8.mockapi.io/items/" + id);
                setPizza(data);
            } catch (error) {
                alert("Ошибка при получении пиццы!");
            }
        }

        fetchPizza();
    }, [])

    if (!pizza) {
        return (
            <div>Загрузка</div>
        );
    }

    return (
        <div>
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <p></p>
            <h4>{pizza.price}</h4>
        </div>
    )
}

export default Pizza;