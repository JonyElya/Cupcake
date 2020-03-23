import { connect } from "react-redux";

import { addToCart, removeFromCart, updateQuan } from "../actions/actions";

import BookModal from "../components/Books/book/bookModal";

const mapStateToProps = ({ cart }) => ({
  addedCount: cart.items.reduce((count, book) => count + (book ? 1 : 0), 0)
});

const BookContainer = connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  updateQuan
})(BookModal);
export default BookContainer;
