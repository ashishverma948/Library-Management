import { axiosInstance } from "./axiosInstance";

//add book
export const AddBook = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/books/add-book",payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};