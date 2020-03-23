import React from "react";
import BookModal from "./book/bookModal";
import style from "./books.module.css";
import BookContainer from "./book/bookContainer";

const Books = props => {
  return (
    <div className={style.BookContent}>
      {props.books.map((book, i) => (
        <BookContainer key={i} book={book} />
      ))}
    </div>
  );
};
export default Books;
