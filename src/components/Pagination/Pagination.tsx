import ReactPaginate from "react-paginate";
import React from "react";

function Pagination() {
    return (
        <div>
            <ReactPaginate
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