import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "./src/components/container";
import store from "./redux/reduxStore";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Container />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
