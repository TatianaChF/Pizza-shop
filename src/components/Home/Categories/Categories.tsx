import { TFunction } from "i18next";
import styles from "./Categories.module.scss";
import React from 'react';

type PropsType = {
    categoryId: number,
    onClickCategory: (id: number) => void,
    changeLanguage: (el: React.ChangeEvent<HTMLSelectElement>) => void,
    t:  TFunction<"translation", undefined>
}

const categories = [
    {id: 0, title: "all"},
    {id: 1, title: "meat"},
    {id: 2, title: "vegan"},
    {id: 3, title: "gril"},
    {id: 4, title: "spicy"},
    {id: 5, title: "closed"},
]

const Categories = React.memo(function Categories(props: PropsType) {

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((category) => (
                    <li key={category.title}
                        onClick={() => props.onClickCategory(category.id)}
                        className={props.categoryId === category.id ? styles.active : ""}>
                            {`${props.t(`home.categories.${category.title}`)}`}
                    </li>
                ))}
            </ul>
        </div>
    )
});

export default Categories;