import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

type PaginationProps = {
    pageCount: number,
    onChangePage: (number: number) => void
}

const Pagination = (props: PaginationProps) => {
    return (
        <div>
            <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={event => props.onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                forcePage={props.pageCount - 1}
                pageCount={3}
            />
        </div>
    )
}

export default Pagination;