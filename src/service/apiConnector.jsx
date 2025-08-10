import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData, headers, params) => {
  try {
    console.log("Making API request:", {
      method,
      url,
      bodyData,
      headers,
      params
    });

    const response = await axiosInstance({
      method: `${method}`,
      url: `${url}`,
      data: bodyData ? bodyData : null,
      headers: headers ? headers : null,
      params: params ? params : null,
    });

    console.log("API response:", response);
    return response;
  } catch (error) {
    console.error("API Connector Error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      response: error.response,
      request: error.request
    });
    throw error;
  }
};
