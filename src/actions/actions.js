const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const SET_BOOKS = "SET_BOOKS";

export const addToCart = obj => ({
  type: ADD_TO_CART,
  payload: obj
});
export const updateQuan = obj => ({
  type: UPDATE_QUANTITY,
  payload: obj
});
export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});
export const setBooks = b => ({
  type: SET_BOOKS,
  b
});
