import toast from "react-hot-toast";
import { setLoading } from "../../slices/Auth";
import { apiConnector } from "../apiConnector";
import { PaymentEndpoints } from "../apis";

export const createPayment = async (amount) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("User is not authenticated");
    return;
  }

  try {
    // Optionally, set loading state
    // dispatch(setLoading(true));

    const response = await apiConnector(
      "POST",
      PaymentEndpoints.CREATE_PAYMENT,
      { amount },
      { Authorization: `Bearer ${token}` }
    );

    return response;
    // Optionally, add a success message
    toast.success("Payment created successfully");
    console.log("Payment Creation Response:", response);
  } catch (error) {
    console.error("Payment Creation Error:", error.message || error);
    toast.error(error.message || "Payment Creation Failed");
  } finally {
    // Optionally, stop the loading state
    // dispatch(setLoading(false));
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await apiConnector(
      "POST",
      PaymentEndpoints.VERIFY_PAYMENT,
      paymentData
    );

    toast.success("Payment Successful");
    console.log("Payment Verification Response:", response);
  } catch (error) {
    console.error("Payment Verification Error:", error.message || error);
    toast.error(error.message || "Payment Verification Failed");
  }
};
