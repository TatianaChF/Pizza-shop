import {useDispatch} from "react-redux";
import {addProduct, minusProduct, removeProduct} from "../../../redux/cart/cartSlice.ts";
import styles from "./CartProduct.module.scss";

type CartProductProps = {
    id: number,
    title: string,
    imagePizza: string,
    price: number,
    count: number,
    size: number,       
    type: string
}

function CartProduct(props: CartProductProps) {
    const dispatch = useDispatch();
    const pizza = {
        id: props.id,
        title: props.title,
        imagePizza: props.imagePizza,
        price: props.price,
        count: props.count,
        size: props.size,
        type: props.type
    }

    const onClickPlus = () => {
        dispatch(addProduct(pizza));
    }

    const onClickMinus = () => {
        dispatch(minusProduct(pizza));
    }

    const onClickRemove = () => {
        if (window.confirm("Вы действительно хотите удалить товар?")) {
            dispatch(removeProduct(pizza));
        }
    }

    return (
        <div className={styles.cart__item}>
            <div className={styles.cart__item_img}>
                <img
                    src={props.imagePizza}
                    alt="Pizza"
                />
            </div>
            <div className={styles.cart__item_info}>
                <h3>{props.title}</h3>
                <p>{props.type}, {props.size} см.</p>
            </div>
            <div className={styles.cart__item_count}>
                <button disabled={props.count === 1} onClick={onClickMinus} 
                className={styles.button__minus}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"/>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"/>
                    </svg>

                </button>
                <b>{props.count}</b>
                <button onClick={onClickPlus} className={styles.button__plus}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"/>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"/>
                    </svg>

                </button>
            </div>
            <div className={styles.cart__item__price}>
                <b>{props.price * props.count} ₽</b>
            </div>
            <div className={styles.cart__item__remove}>
                <div onClick={onClickRemove} className={styles.button__remove}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"/>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"/>
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default CartProduct;