const SET_BOOKS = "SET_BOOKS";

let initialState = {
  books: [],
  loading: true
};
const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.b };

    default:
      return state;
  }
};
export default BooksReducer;
