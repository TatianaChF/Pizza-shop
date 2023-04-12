import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/slices/cartSlice";
import {RootState} from "../../redux/store";

export type Products = {
    id: number,
    price: number,
    count: number
}

type PropsType = {
    id: number,
    title: string,
    price: number,
    imagePizza: string,
    sizes: Array<number>,
    types: Array<number>
}

const typeTitle = ["тонкое", "традиционное"];

function Catalog(props: PropsType) {
    const cartCount = useSelector((state: RootState) => state.cart.products
        .find((obj: Products) => obj.id === props.id));
    const addedCount = cartCount ? cartCount.count : 0;
    const [activeType, setActiveType] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);
    const dispatch = useDispatch();

    const onClickAddToCart = () => {
        const product = {
            id: props.id,
            title: props.title,
            price: props.price,
            imagePizza: props.imagePizza,
            size: props.sizes[activeSize],
            type: typeTitle[activeType]
        };
        dispatch(addProduct(product));
    }

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={props.imagePizza}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{props.title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            props.types.map(type => (
                                <li key={type}
                                    className={activeType === type ? "active" : ""}
                                    onClick={() => setActiveType(type)}>
                                    {typeTitle[type]}
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            props.sizes.map((size, id) => (
                                <li key={size}
                                    className={id === activeSize ? "active" : ""}
                                    onClick={() => setActiveSize(id)}>
                                    {size} см.
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {props.price} ₽</div>
                    <button onClick={onClickAddToCart}
                            className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        { addedCount > 0 && <i>{addedCount}</i> }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Catalog;