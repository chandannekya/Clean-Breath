import { apiConnector } from "../apiConnector";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ProfileEndpoints = {
  GET_PROFILE: `${BASE_URL}/profile`,
  GET_STATS: `${BASE_URL}/profile/stats`,
};

export function getUserProfile(token) {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "GET",
        ProfileEndpoints.GET_PROFILE,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      return response.data;
    } catch (error) {
      console.log("GET_PROFILE_ERROR:", error);
      throw error;
    }
  };
}

export function getUserStats(token) {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "GET",
        ProfileEndpoints.GET_STATS,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      return response.data;
    } catch (error) {
      console.log("GET_STATS_ERROR:", error);
      throw error;
    }
  };
}
