const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const initialState = {
  items: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(o => o.title !== action.payload)
      };
    default:
      return state;
  }
};
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
export default cart;
