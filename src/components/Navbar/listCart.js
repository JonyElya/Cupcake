import React from "react";
import style from "./navbar.module.css";
import { Button } from "reactstrap";

const ListCart = props => {
  return (
    <div>
      <div className={style.image}>
        <img src={props.book.image} />
      </div>
      <div className={style.title}>{props.book.title}</div>
      <div className={style.title}> Цена: {props.book.price}$</div>
      <div>{props.quantity}</div>
      <Button
        color="primary"
        onClick={props.removeFromCart.bind(this, props.book.title)}
      >
        Удалить
      </Button>
    </div>
  );
};
export default ListCart;
