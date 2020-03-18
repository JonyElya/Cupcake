import React from "react";
import Books from "./books";
import { connect } from "react-redux";
import { setBooks } from "../../../redux/booksReducers";
import * as axios from "axios";
// import { Lines } from "react-preloaders";
// import { usersAPI } from "../../api/api";

class BooksContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books`)
      .then(response => {
        this.props.setBooks(response.data.books);
      });
  }

  render() {
    return <Books books={this.props.books} />;
  }
}

let mapStateToProps = state => {
  return {
    books: state.booksContent.books
  };
};

export default connect(mapStateToProps, {
  setBooks
})(BooksContainer);
