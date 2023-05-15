import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

type PizzaType = {
    imageUrl: string,
    title: string,
    price: string
}

function Pizza() {
    const [pizza, setPizza] = useState<PizzaType>();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const res = await fetch("https://64145f1f9172235b8692eea8.mockapi.io/items/" + id);
                const data = await res.json()
                setPizza(data);
            } catch (error) {
                alert("Ошибка при получении пиццы!");
                navigate("/");
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
        <div className="content__info-pizza">
            <img src={pizza.imageUrl}/>
            <div>
                <h2>{pizza.title}</h2>
                <h4>{pizza.price} ₽</h4>
            </div>
        </div>
    )
}

export default Pizza;