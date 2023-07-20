import {Link} from "react-router-dom";
import emptyCart from "../../../assets/img/empty-cart.png";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
    return (
        <div>
            <div className={styles.cart__empty}>
                <h2>Корзина пустая 😕</h2>
                <p>
                    Вероятней всего, ещё не добавили пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCart} alt="Empty cart"/>
                <Link to="/" className={styles.button__black}>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;