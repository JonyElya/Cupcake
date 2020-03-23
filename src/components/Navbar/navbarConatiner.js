import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cartReducer";
import NavBar from "./navbar";
import uniqBy from "lodash/uniqBy";
import filter from "lodash/filter";

const mapStateToProps = state => ({
  totalPrice: state.cart.items.reduce(
    (total, book) => total + Number(book.price),
    0
  ),
  quantity: filter(state.cart.items, function(o) {
    if (uniqBy(o, o => o.title)) return o;
  }).length,
  count: state.cart.items.length,
  items: uniqBy(state.cart.items, b => b.title)
});

const NavbarContainer = connect(mapStateToProps, { addToCart, removeFromCart })(
  NavBar
);
export default NavbarContainer;
