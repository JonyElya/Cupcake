import React from "react";
import style from "../../styles/books.module.css";
import BookContainer from "../../containers/bookContainer";

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
