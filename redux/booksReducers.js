const SET_BOOKS = "SET_BOOKS";

let initialState = {
  books: [],
  loading: true
  //   title: null,
  //   subtitle: null,
  //   isbn13: null,
  //   price: null,
  //   image: null,
  //   url: null
};
const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.b };

    default:
      return state;
  }
};
export const setBooks = b => ({
  type: SET_BOOKS,
  b
});
export default BooksReducer;
