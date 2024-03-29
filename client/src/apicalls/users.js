import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./allApis"
const {
  LOGIN_API,
  SIGNUP_API,
  GET_LOGGED_IN_USER_DETAILS,
  GET_ALL_USERS,
  GET_USER_BY_ID
} = endpoints;

// register a user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(SIGNUP_API, payload);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// login a user
export const LoginUser = async (payload) => {
  try {
    console.log(LOGIN_API)
    const response = await axiosInstance.post(LOGIN_API, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get user details

export const GetLoggedInUserDetails = async () => {
  try {
    const response = await axiosInstance.get(GET_LOGGED_IN_USER_DETAILS);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// get all users
export const GetAllUsers = async (role) => {
  try {
    const response = await axiosInstance.get(`${GET_ALL_USERS}/${role}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// // get user by id

export const GetUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`${GET_USER_BY_ID}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}