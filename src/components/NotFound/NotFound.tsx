import style from "./NotFound.module.scss";
function NotFound() {
    return (
        <div className={style.root}>
            <h1>404</h1>
            <p>Ничего не найдено :(</p>
        </div>
    )
}

export default NotFound;