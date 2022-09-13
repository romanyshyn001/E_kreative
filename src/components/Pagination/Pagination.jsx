import React from "react";
import s from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalPostCount / props.perPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <nav className={s.pagination}>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page ? s.selectedPage : null}
            onClick={() => props.onChange(page)}
            key={page}
          >
            {page}
          </span>
        );
      })}
    </nav>
  );
};
export default Pagination;
