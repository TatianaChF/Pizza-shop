import React from "react";
import styles from "./Categories.module.scss";

type PropsType = {
    categoryId: number,
    onClickCategory: (id: number) => void
}

function Categories(props: PropsType) {
    const categories = [
        {id: 0, title: "Все"},
        {id: 1, title: "Мясные"},
        {id: 2, title: "Вегетарианская"},
        {id: 3, title: "Гриль"},
        {id: 4, title: "Острые"},
        {id: 5, title: "Закрытые"},
    ]

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((category) => (
                    <li key={category.title}
                        onClick={() => props.onClickCategory(category.id)}
                        className={props.categoryId === category.id ? styles.active : ""}>
                        {category.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;