import React from "react";
import style from "../styles/main.module.css";
import BooksContainer from "../containers/booksContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./Cart/cart";
import NavbarContainer from "../containers/navbarConatiner";

const Container = () => {
  return (
    <div className={style.Container}>
      <React.Fragment>
        <NavbarContainer />
        <Switch>
          <Route path="/basket-cart" component={Cart} />
          <Route path="/home" component={BooksContainer} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    </div>
  );
};

export default Container;
