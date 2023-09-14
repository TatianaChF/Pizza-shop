import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/cart/cartSlice";
import {cartProductsSelectorById} from "../../redux/cart/selectors";
import {CartItem} from "../../redux/cart/types";
import {RootState} from "../../redux/store";
import styles from "./Catalog.module.scss";
import {BrowserRouter, Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

export type Products = {
    id: number,
    price: number,
    count: number
}

type CatalogProps = {
    id: number,
    title: string,
    price: number,
    imagePizza: string,
    count: number,
    sizes: Array<number>,
    types: Array<number>
}

const typeTitle = ["thin", "traditional"];

const Catalog = (props: CatalogProps) => {
    const cartCount = useSelector((state: RootState) =>
        cartProductsSelectorById(props.id, state));
    const addedCount = cartCount ? cartCount.count : 0;
    const [activeType, setActiveType] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const onClickAddToCart = () => {
        const product: CartItem = {
            id: props.id,
            title: props.title,
            price: props.price,
            imagePizza: props.imagePizza,
            count: props.count,
            size: props.sizes[activeSize],
            type: typeTitle[activeType],
        };
        dispatch(addProduct(product));
    }

    return (
        <div className={styles.catalog__wrapper}>
            <div className={styles.catalog}>
                <BrowserRouter>
                <Link to={`/pizza/${props.id}`}>
                    <img role="img"
                        className={styles.catalog__image}
                        src={props.imagePizza}
                        alt="Pizza"
                    />
                    <h4 className={styles.catalog__title}>{props.title}</h4>
                </Link> 
                </BrowserRouter>
                <div className={styles.catalog__selector}>
                    <ul role="types">
                        {
                            props.types.map(type => (
                                <li key={type}
                                    className={activeType === type ? styles.active : ""}
                                    onClick={() => setActiveType(type)}>
                                        {`${t(`home.thickness.${typeTitle[type]}`)}`}
                                </li>
                            ))
                        }
                    </ul>
                    <ul role="sizes">
                        {
                            props.sizes.map((size, id) => (
                                <li key={size}
                                    className={id === activeSize ? styles.active : ""}
                                    onClick={() => setActiveSize(id)}>
                                    {size} {`${t('home.abbreviations.sm')}`}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.catalog__bottom}>
                    <div role="price" className={styles.catalog__price}>{`${t('home.from')}`} {props.price} ₽</div>
                    <button onClick={onClickAddToCart}
                            className={styles.button}>
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
                        <span>{`${t('home.addButton')}`}</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Catalog;