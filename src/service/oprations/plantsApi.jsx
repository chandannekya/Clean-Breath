import { PlantsEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/Auth";
import { useDispatch } from "react-redux";
const { GET_PLANTS } = PlantsEndpoints;

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
