import toast from "react-hot-toast";
import { setLoading } from "../../slices/Auth";
import { apiConnector } from "../apiConnector";
import { PaymentEndpoints } from "../apis";
import { Navigate } from "react-router-dom";

export function createPayment(amount) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("User is not authenticated");
      return;
    }
    dispatch(setLoading(true));
    try {
      // Optionally, set loading state

      const response = await apiConnector(
        "POST",
        PaymentEndpoints.CREATE_PAYMENT,
        { amount },
        { Authorization: `Bearer ${token}` }
      );
      toast.success("Payment created successfully");
      console.log("Payment Creation Response:", response);
      return response;
      // Optionally, add a success message
    } catch (error) {
      console.error("Payment Creation Error:", error.message || error);
      toast.error(error.message || "Payment Creation Failed");
    } finally {
      // Optionally, stop the loading state
      dispatch(setLoading(false));
    }
  };
}

export function verifyPayment(
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
  orderId,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const token = localStorage.getItem("token");

      // Making the POST request to verify the payment
      const response = await apiConnector(
        "POST",
        PaymentEndpoints.VERIFY_PAYMENT,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderId: orderId,
        },
        { Authorization: `Bearer ${token}` }
      );

      // Notify the user of success
      toast.success("Payment Successful");
      console.log("Payment Verification Response:", response);
      // navigate("/plants");
    } catch (error) {
      // Log the error and notify the user
      console.error("Payment Verification Error:", error.message || error);
      toast.error(error.message || "Payment Verification Failed");
    } finally {
      dispatch(setLoading(false));
    }
  };
}
