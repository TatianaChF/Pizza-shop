import {Link} from "react-router-dom";
import emptyCart from "../../../assets/img/empty-cart.png";
import styles from "./CartEmpty.module.scss";
import { useTranslation } from "react-i18next";

const CartEmpty = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className={styles.cart__empty}>
                <h2>{`${t('cart.cartEmpty.header')}`} 😕</h2>
                <p>
                    {`${t('cart.cartEmpty.paragraph')}`} <br/>
                    {`${t('cart.cartEmpty.paragraphTwo')}`}
                </p>
                <img src={emptyCart} alt="Empty cart"/>
                <Link to="/" className={styles.button__black}>
                    <span>{`${t('cart.cartEmpty.button')}`}</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;