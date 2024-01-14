const BASE_URL = "http://localhost:8000/api";
// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/register",
  LOGIN_API: BASE_URL + "/users/login",
  GET_LOGGED_IN_USER_DETAILS: BASE_URL + "/users/get-logged-in-user",
  GET_ALL_USERS: BASE_URL + "/users/get-all-users",
};

export const booksEndpoints = {
  ADD_BOOK: BASE_URL + "/books/add-book",
  GET_ALL_BOOKS: BASE_URL + "/books/get-all-books",
  UPDATE_BOOK: BASE_URL + "/books/update-book",
  DELETE_BOOK: BASE_URL + "/books/delete-book",
  GET_BOOK_BY_ID: BASE_URL + "/books/get-book-by-id",
};
