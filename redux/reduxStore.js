import { combineReducers, createStore } from "redux";
import BooksReducer from "./booksReducers";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  booksContent: BooksReducer,
  cart: cartReducer
});
let store = createStore(reducers);
export default store;
