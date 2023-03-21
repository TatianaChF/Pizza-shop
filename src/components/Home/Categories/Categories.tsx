import React, {useState} from "react";

type PropsType = {
    categoryId: number
}

function Categories(props: PropsType) {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const categories = [
        {id: 0, title: "Все"},
        {id: 1, title: "Мясные"},
        {id: 2, title: "Вегетарианская"},
        {id: 3, title: "Гриль"},
        {id: 4, title: "Острые"},
        {id: 5, title: "Закрытые"},
    ]

    const onClickCategory = (id: number) => {
        setSelectedCategory(id);
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category) => (
                    <li key={category.title}
                        onClick={() => onClickCategory(category.id)}
                        className={selectedCategory === category.id ? "active" : ""}>
                        {category.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;