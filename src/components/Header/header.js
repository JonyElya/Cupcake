import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.Header}>
      <img src="https://cdn.shopifycloud.com/hatchful-web/assets/0079f3ae8b76c255980f84026ec74f47.svg" />
      <div className={style.title}>Лого</div>
    </header>
  );
};
export default Header;
