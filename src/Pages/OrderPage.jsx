import React, { useState, useEffect } from "react";
import searchPhotos from "../Component/Function/SearchImage";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlant } from "../service/oprations/plantsApi";
import { createOrder } from "../service/oprations/OrederApi";
import { toast } from "react-hot-toast";
import { verifyPayment } from "../service/oprations/PaymentApi";
import { createPayment } from "../service/oprations/PaymentApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/Untitled design (1).png";
import Loader from "../Component/Loader";
import { setLoading } from "../slices/Auth";

const OrderPage = () => {
  const [photos, setPhotos] = useState("");
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
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
      // Load Razorpay script
      dispatch(setLoading(true));
      await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

      dispatch(setLoading(false));
      // Create Payment through Razorpay
      const response = await dispatch(
        createPayment(Plant.price * Quantity * 100)
      );
      // Amount in paise
      const { data } = response;
      console.log(data);

      if (!data || !data.orderId || !data.amount || !data.currency) {
        throw new Error("Invalid payment creation response");
      }

      const options = {
        key: "rzp_test_yGQVjKE6esDpZF", // Replace with your Razorpay Key ID
        amount: data.amount, // Amount in paise
        currency: data.currency,
        name: "Clean Breath",
        description: "Payment for your order",
        image: { logo }, // Optional: Your company logo
        order_id: data.orderId, // Razorpay Order ID
        callback_url: "http://localhost:5000/api/payment/verifyPayment", // Replace with your backend URL for verification
        theme: {
          color: "#3399cc",
        },
        handler: async (response) => {
          // Verification logic here
          try {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;

            console.log(
              razorpay_order_id,

              razorpay_signature
            );
            const verifyResponse = await dispatch(
              verifyPayment({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                orderId: orderId,
                navigate, // Pass your order ID to backend
              })
            );
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

    // Validate fields
    if (!shippingAddress.address || !mobile) {
      setMessage("All fields are required");
      return;
    }

    try {
      // Step 1: Create Order
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
          shippingAddress,
          navigate,
          token
        )
      );
      const orderId = orderResponse.data.order._id;
      // Step 2: Proceed to payment
      await paymentHandler(orderId); // Pass the created order ID
    } catch (error) {
      console.error("Order Creation Error:", error.message || error);
      setMessage("An error occurred while creating the order");
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    const fetchPhotosAndPlant = async () => {
      const results = await searchPhotos(plantName);
      const data = await dispatch(getPlant(plantName));
      setPlant(data);
      setPhotos(results);
    };

    fetchPhotosAndPlant();
  }, [plantName]);

  return loading ? (
    <div className=" h-screen flex justify-center items-center">
      {" "}
      <Loader />
    </div>
  ) : (
    <div className="flex lg:flex-row flex-col justify-around p-5">
      <div>
        <img
          src={photos}
          className="lg:w-[400px] rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-lg object-cover h-1/2 shadow-green-100"
          alt="Plant"
        />
        <h1 className="poppins-bold text-3xl my-3 p-3">{plantName}</h1>
        <h1 className="poppins-bold my-3 p-3">
          Price: &#8377; {Quantity * Plant.price}
        </h1>
      </div>

      <div className="poppins-regular lg:w-[40%]">
        <div className="poppins-bold text-4xl">
          <h1>Create your Order!</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Shipping Address</label>
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300  focus:outline-green-800 focus:outline focus:outline-2 rounded-md"
              placeholder="Address"
              name="shippingAddress.address"
              value={shippingAddress.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300  focus:outline-green-800 focus:outline focus:outline-2 rounded-md mt-2"
              placeholder="City"
              name="shippingAddress.city"
              value={shippingAddress.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300  focus:outline-green-800 focus:outline focus:outline-2 rounded-md mt-2"
              placeholder="Postal Code"
              name="shippingAddress.postalCode"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="w-full p-2 border input-shadow border-gray-300 rounded-md  focus:outline-green-800 focus:outline focus:outline-2 mt-2"
              placeholder="Country"
              name="shippingAddress.country"
              value={shippingAddress.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Mobile Number</label>
            <input
              type="tel"
              className="w-full p-2 border input-shadow border-gray-300  focus:outline-green-800 focus:outline focus:outline-2 rounded-md"
              placeholder="Enter mobile number"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 poppins-bold">Quantity</label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-4 py-2  border border-green-300   rounded-full"
              >
                -
              </button>
              <input
                type="text"
                value={Quantity}
                readOnly
                className="w-12 text-center   focus:outline-green-800 focus:outline focus:outline-2 "
              />
              <button
                type="button"
                onClick={increaseQuantity}
                className="px-4 py-2  border border-green-300  rounded-full"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full p-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
