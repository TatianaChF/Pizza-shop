import ReactPaginate from "react-paginate";
import React from "react";
import style from "./Pagination.module.scss";

type PropsType = {
    onChangePage: (number: number) => void
}

function Pagination(props: PropsType) {
    return (
        <div>
            <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={event => props.onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
            />
        </div>
    )
}

export default Pagination;