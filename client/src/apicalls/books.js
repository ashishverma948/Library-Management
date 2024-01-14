import { axiosInstance } from "./axiosInstance";
import { booksEndpoints } from "./allApis"

const {
  ADD_BOOK,
  GET_ALL_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
  GET_BOOK_BY_ID,
} = booksEndpoints;

// add book
export const AddBook = async (payload) => {
  try {
    const response = await axiosInstance.post(ADD_BOOK, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all books
export const GetAllBooks = async () => {
  try {
    const response = await axiosInstance.get(GET_ALL_BOOKS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update book
export const UpdateBook = async (payload) => {
  try {
    const response = await axiosInstance.put(
      `${UPDATE_BOOK}/${payload._id}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// delete book
export const DeleteBook = async (id) => {
  try {
    const response = await axiosInstance.delete(`${DELETE_BOOK}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// get book by id
export const GetBookById = async (id) => {
  try {
    const response = await axiosInstance.get(`${GET_BOOK_BY_ID}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}


