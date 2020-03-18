import React from "react";
import style from "./book.module.css";

const Book = props => {
  return (
    <div className={style.books}>
      <div className={style.title}>{props.book.title}</div>
      <div className="">{props.book.subtitle}</div>
      
    </div>
  );
};
export default Book;
