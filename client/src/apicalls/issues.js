import { axiosInstance } from "./axiosInstance";
import { issuesEndpoints } from "./allApis";

const {
  ISSUE_BOOK,
  GET_ISSUES,
  RETURN_BOOK,
  DELETE_ISSUE,
  EDIT_ISSUE

} = issuesEndpoints;
// issue a book
export const IssueBook = async (payload) => {
  try {
    const response = await axiosInstance.post(ISSUE_BOOK, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// get issues
export const GetIssues = async (payload) => {
  try {
    const response = await axiosInstance.post(GET_ISSUES, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// return a book
export const ReturnBook = async (payload) => {
  try {
    const response = await axiosInstance.post(RETURN_BOOK, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// delete an issue
export const DeleteIssue = async (payload) => {
  try {
    const response = await axiosInstance.post(DELETE_ISSUE, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// edit an issue
export const EditIssue = async (payload) => {
  try {
    const response = await axiosInstance.post(EDIT_ISSUE, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}