import React, {useState} from "react";

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(0);

    const onClickCategory = (id: number) => {
        setSelectedCategory(id);
    }


    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickCategory(0)}
                    className={selectedCategory === 0 ? "active" : ""}>
                    Все
                </li>
                <li onClick={() => onClickCategory(1)}
                    className={selectedCategory === 1 ? "active" : ""}>
                    Мясные
                </li>
                <li onClick={() => onClickCategory(2)}
                    className={selectedCategory === 2 ? "active" : ""}>
                    Вегетарианская
                </li>
                <li onClick={() => onClickCategory(3)}
                    className={selectedCategory === 3 ? "active" : ""}>
                    Гриль
                </li>
                <li onClick={() => onClickCategory(4)}
                    className={selectedCategory === 4 ? "active" : ""}>
                    Острые
                </li>
                <li onClick={() => onClickCategory(5)}
                    className={selectedCategory === 5 ? "active" : ""}>
                    Закрытые
                </li>
            </ul>
        </div>
    )
}

export default Categories;