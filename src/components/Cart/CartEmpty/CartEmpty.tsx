import {Link} from "react-router-dom";
import emptyCart from "../../../assets/img/empty-cart.png";

function CartEmpty() {
    return (
        <div>
            <div className="cart cart--empty">
                <h2>Корзина пустая 😕</h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCart} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;