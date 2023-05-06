import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function Pizza() {
    const { id } = useParams();
    
    useEffect(() => {
        axios.get("https://64145f1f9172235b8692eea8.mockapi.io/items" + id)
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