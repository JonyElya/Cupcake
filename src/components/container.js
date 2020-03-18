import React, { Component } from "react";
import BooksContainer from "./Books/booksContainer";
import Header from "./Header/header";
import style from "./main.module.css";

const Container = () => {
  return (
    <div className={style.Container}>
      <Header />
      <BooksContainer />
    </div>
  );
};

export default Container;
