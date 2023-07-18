import { useWhyDidYouUpdate } from 'ahooks';
import styles from "./Categories.module.scss";
import React from 'react';

type PropsType = {
    categoryId: number,
    onClickCategory: (id: number) => void
}

const categories = [
    {id: 0, title: "Все"},
    {id: 1, title: "Мясные"},
    {id: 2, title: "Вегетарианская"},
    {id: 3, title: "Гриль"},
    {id: 4, title: "Острые"},
    {id: 5, title: "Закрытые"},
]

const Categories = React.memo(function Categories(props: PropsType) {
    useWhyDidYouUpdate("Categories", props);

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
});

export default Categories;