import { PlantsEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/Auth";
import { useDispatch } from "react-redux";

const { GET_PLANTS, GET_PLANT } = PlantsEndpoints;

export function getPlants() {
  return async (dispatch) => {
    dispatch(setLoading(true)); // Start loading state

    try {
      const response = await apiConnector("GET", GET_PLANTS); // Fetch plant data
      // Log the response
      return response.data.plants; // Assuming the plants data is in `response.data.plants`
    } catch (error) {
      console.error("Error fetching plants:", error); // Log error
      return null; // Handle error appropriately
    } finally {
      dispatch(setLoading(false)); // Stop loading state
    }
  };
}

export function getPlant(plantName) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      // Include plantName in the query parameters or request body as needed
      const response = await apiConnector(
        "GET",
        `${GET_PLANT}?name=${plantName}`
      );

      // Dispatch any action if needed, e.g., updating the store with the plant data
      return response.data.data;
    } catch (error) {
      console.error("Error fetching plant:", error);
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };
}
