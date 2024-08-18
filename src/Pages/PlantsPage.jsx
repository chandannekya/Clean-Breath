import React, { useEffect } from "react";
import Plants from "../Component/Plants";
import { useParams } from "react-router-dom";
import { createPayment } from "../service/oprations/PaymentApi";
import { verifyPayment } from "../service/oprations/PaymentApi";
import toast from "react-hot-toast";

// Function to load the Razorpay script dynamically
const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PlantsPage = () => {
  const { plantName } = useParams();

  useEffect(() => {
    loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const paymentHandler = async () => {
    try {
      // Step 1: Create Payment
      const response = await createPayment(1); // Amount in paise (e.g., 1000 paise = 10 INR)
      const { data } = response;

      if (!data || !data.orderId || !data.amount || !data.currency) {
        throw new Error("Invalid payment creation response");
      }

      const options = {
        key: "rzp_test_yGQVjKE6esDpZF", // Replace with your Razorpay Key ID
        amount: data.amount, // Amount in paise
        currency: data.currency,
        name: "Clean Breath",
        description: "Payment for your order",
        image: "https://example.com/your_logo.png", // Optional: Your company logo
        order_id: data.orderId, // Order ID from the payment creation response
        callback_url: "http://localhost:5000/api/payment/verifyPayment", // Replace with your backend URL for verification
        theme: {
          color: "#3399cc",
        },
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          const paymentData = {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            orderId: data.orderId,
          };

          try {
            const verifyResponse = await verifyPayment(paymentData);
            if (verifyResponse.statusCode === 200) {
              toast.success("Payment Successful");
              // Handle successful payment (e.g., navigate to a success page)
            } else {
              toast.error("Payment Verification Failed! Try again.");
              // Handle payment verification failure
            }
          } catch (error) {
            console.error("Verification Error:", error.message || error);
            toast.error("An error occurred during payment verification");
          }
        },
        modal: {
          ondismiss: () => {
            console.log("Payment Modal Closed");
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error.message || error);
      toast.error("An error occurred while processing payment");
    }
  };

  return (
    <div>
      <Plants plantName={plantName} />
      <div>
        <button
          className="bg-black text-white py-2 px-4"
          onClick={paymentHandler}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default PlantsPage;
