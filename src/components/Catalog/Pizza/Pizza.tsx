import {useParams} from "react-router-dom";

function Pizza() {
    const { id } = useParams();

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