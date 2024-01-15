import { axiosInstance } from "./axiosInstance";
import { reportsEndpoints } from "./allApis";

const {
  GET_REPORTS,
} = reportsEndpoints;

export const GetReports = async () => {
  try {
    const response = await axiosInstance.get(GET_REPORTS);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
