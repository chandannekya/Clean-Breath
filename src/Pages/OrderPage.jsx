import React, { useState, useEffect } from "react";
import searchPhotos from "../Component/Function/SearchImage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlant } from "../service/oprations/plantsApi";
import { createOrder } from "../service/oprations/OrederApi";
import { toast } from "react-hot-toast";
import { verifyPayment, createPayment } from "../service/oprations/PaymentApi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Untitled design (1).png";
import Loader from "../Component/Loader";
import { setLoading } from "../slices/Auth";

const OrderPage = () => {
  const [photos, setPhotos] = useState("");
  const { plantName } = useParams();
  const [Plant, setPlant] = useState({});
  const dispatch = useDispatch();
  const [Quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const paymentHandler = async (orderId) => {
    try {
      dispatch(setLoading(true));
      await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
      dispatch(setLoading(false));

      const response = await dispatch(
        createPayment(Plant.price * Quantity * 100)
      );
      const { data } = response;

      if (!data || !data.orderId || !data.amount || !data.currency) {
        throw new Error("Invalid payment creation response");
      }

      const options = {
        key: "rzp_test_yGQVjKE6esDpZF",
        amount: data.amount,
        currency: data.currency,
        name: "Clean Breath",
        description: "Payment for your order",
        image: logo,
        order_id: data.orderId,
        callback_url: "",
        theme: { color: "#3399cc" },
        handler: async (response) => {
          try {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;
            await dispatch(
              verifyPayment({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                orderId,
              })
            );
            navigate("/plants");
          } catch (error) {
            toast.error("An error occurred during payment verification");
            console.error("Verification Error:", error.message || error);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name.split(".")[1]]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shippingAddress.address || !mobile) {
      setMessage("All fields are required");
      return;
    }

    try {
      const orderResponse = await dispatch(
        createOrder(
          Plant._id,
          [
            {
              productId: Plant._id,
              quantity: Quantity,
              price: Plant.price * Quantity,
            },
          ],
          mobile,
          shippingAddress
        )
      );
      const orderId = orderResponse.data.order._id;
      console.log(orderResponse);
      await paymentHandler(orderId);
    } catch (error) {
      console.error("Order Creation Error:", error.message || error);
      setMessage("An error occurred while creating the order");
    }
  };

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  useEffect(() => {
    const fetchPhotosAndPlant = async () => {
      const results = await searchPhotos(plantName);
      const data = await dispatch(getPlant(plantName));
      setPlant(data);
      setPhotos(results);
    };

    fetchPhotosAndPlant();
  }, [plantName, dispatch]);

  return loading ? (
    // Loader container background for dark mode
    <div className="h-screen flex justify-center items-center transition-colors duration-300 dark:bg-gray-900">
      <Loader />
    </div>
  ) : (
    // Main container with dark mode text color
    <div className="flex lg:flex-row flex-col justify-around p-5 transition-colors duration-300 dark:text-gray-200">
      <div>
        <img
          src={photos}
          // Image shadow for dark mode
          className="lg:w-[400px] rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-lg object-cover h-1/2 shadow-green-100 dark:shadow-green-900"
          alt="Plant"
        />
        <h1 className="poppins-bold text-3xl my-3 p-3 dark:text-gray-200">{plantName}</h1>
        <h1 className="poppins-bold my-3 p-3 dark:text-gray-200">
          Price: &#8377; {Quantity * Plant.price}
        </h1>
      </div>

      <div className="poppins-regular lg:w-[40%]">
        <div className="poppins-bold text-4xl dark:text-gray-200">
          <h1>Create your Order!</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form labels dark mode */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">Shipping Address</label>
            {/* Form inputs dark mode */}
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300 focus:outline-green-800 focus:outline focus:outline-2 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:outline-green-500"
              placeholder="Address"
              name="shippingAddress.address"
              value={shippingAddress.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300 focus:outline-green-800 focus:outline focus:outline-2 rounded-md mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:outline-green-500"
              placeholder="City"
              name="shippingAddress.city"
              value={shippingAddress.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300 focus:outline-green-800 focus:outline focus:outline-2 rounded-md mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:outline-green-500"
              placeholder="Postal Code"
              name="shippingAddress.postalCode"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300 rounded-md focus:outline-green-800 focus:outline focus:outline-2 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:outline-green-500"
              placeholder="Country"
              name="shippingAddress.country"
              value={shippingAddress.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">Mobile Number</label>
            <input
              type="tel"
              className="w-full p-2 border input-shadow border-gray-300 focus:outline-green-800 focus:outline focus:outline-2 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:outline-green-500"
              placeholder="Enter mobile number"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 poppins-bold dark:text-gray-400">Quantity</label>
            <div className="flex items-center">
              {/* Quantity buttons dark mode */}
              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-4 py-2 border border-green-300 rounded-full transition-colors duration-200 dark:border-green-600 dark:text-gray-200"
              >
                -
              </button>
              <input
                type="text"
                value={Quantity}
                readOnly
                className="w-12 text-center focus:outline-green-800 focus:outline focus:outline-2 mx-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:outline-green-500"
              />
              <button
                type="button"
                onClick={increaseQuantity}
                className="px-4 py-2 border border-green-300 rounded-full transition-colors duration-200 dark:border-green-600 dark:text-gray-200"
              >
                +
              </button>
            </div>
          </div>
          {message && <p className="text-red-500">{message}</p>}
          <button
            type="submit"
            // Submit button dark mode
            className="poppins-regular mt-4 w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;