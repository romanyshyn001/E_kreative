import React from "react";
import s from "./AnnouncementPagination.module.css";

const AnnouncementPagination = (props) => {
  let totalPages = Math.ceil(props.totalPostCount / props.totalOnPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  
  return (
    <nav className={s.pagination}>
      {pages.map((page) => {
        return (
          <span
            className={props.pageNumber === page ? s.selectedPage : null}
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
export default AnnouncementPagination;
