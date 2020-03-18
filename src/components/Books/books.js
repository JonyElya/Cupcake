import React from "react";
import Book from "./book/book";
import style from "./books.module.css";

const Books = props => {
  return (
    <div className={style.BookContent}>
      {props.books.map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </div>
  );
};
export default Books;
