import ReactPaginate from "react-paginate";
import React from "react";
import style from "./Pagination.module.scss";

function Pagination() {
    return (
        <div>
            <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={event => console.log(event)}
                pageRangeDisplayed={8}
                pageCount={3}
            />
        </div>
    )
}

export default Pagination;