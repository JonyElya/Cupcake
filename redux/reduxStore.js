import { combineReducers, createStore } from "redux";
import booksReducer from "./booksReducers";

const reducers = combineReducers({
  booksContent: booksReducer
});
let store = createStore(reducers);
export default store;
