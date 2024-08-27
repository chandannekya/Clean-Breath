import { OrderEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/Auth";
import toast from "react-hot-toast";

const { CREATE_ORDER } = OrderEndpoints;

export function createOrder(
  user,
  orderItems,
  mobile,
  shippingAddress,
  paymentId,
  navigate
  // Adding token as a parameter
) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      // If token is missing, prompt user to login and return early
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Login to create order");
        return;
      }
      // Make the API call to create an order
      const response = await apiConnector(
        "POST",
        CREATE_ORDER,
        {
          user,
          orderItems,
          mobile,
          shippingAddress,
          paymentId,
        },
        { Authorization: `Bearer ${token}` } // Token passed here
      );

      // If the order creation fails, navigate to the orders page

      // Show success message and handle response
      toast.success("Order Created");
      navigate("plant");
      return response;
    } catch (error) {
      // Log and show error messages
      console.log(error);
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      // Set loading state back to false
      dispatch(setLoading(false));
    }
  };
}
