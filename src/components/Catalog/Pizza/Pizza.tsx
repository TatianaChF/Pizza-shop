import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Pizza() {
    const [pizza, setPizza] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get("https://64145f1f9172235b8692eea8.mockapi.io/items" + id);
                setPizza(data);
            } catch (error) {
                alert("Ошибка при получении пиццы!");
            }
        }
    }, [])

    return (
        <div>
            <img />
            <h2>{id}</h2>
            <p></p>
            <h4></h4>
        </div>
    )
}

export default Pizza;