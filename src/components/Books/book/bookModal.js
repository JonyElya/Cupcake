import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import style from "./book.module.css";

const BookModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const addBookHandler = () => {
    props.addToCart({
      title: props.book.title,
      subtitle: props.book.subtitle,
      image: props.book.image,
      price: props.book.price
    });
  };
  const changeQuantity = e => {
    let q = e.target.value;
    props.updateQuan(q);
  };
  return (
    <div className={style.books}>
      <NavLink onClick={toggle}>
        <img class={style.image} src={props.book.image} />
        <div className={style.title}>{props.book.title}</div>
        <div>{props.book.price}</div>
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.book.title}</ModalHeader>
        <ModalBody>
          <img src={props.book.image} />
          <h3>Описание</h3>
          <div className={style.title}>{props.book.subtitle}</div>

          <div className={style.title}>Цена {props.book.price}$</div>
          <div className={style.title}>ISBN-13 {props.book.isbn13}</div>
          <NavLink href={props.book.url}>Посмотреть</NavLink>
        </ModalBody>
        <ModalFooter>
          <InputGroup>
            <Input
              placeholder="Количество"
              min={0}
              max={100}
              type="number"
              step="1"
              onChange={changeQuantity}
            />
            <InputGroupAddon addonType="append">шт.</InputGroupAddon>
          </InputGroup>
          <Button color="primary" onClick={addBookHandler}>
            Добавить {props.addedCount > 0 && `(${props.addedCount})`}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BookModal;
