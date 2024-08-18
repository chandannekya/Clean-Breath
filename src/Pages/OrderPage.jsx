import React, { useState } from "react";
import axios from "axios";

const OrderPage = () => {
  // State to manage order form data
  const [orderItems, setOrderItems] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Sample order object
      const orderData = {
        orderItems: JSON.parse(orderItems), // Assuming orderItems is an array in JSON format
        shippingAddress,
        paymentId,
      };

      // Make POST request to backend to create the order
      const response = await axios.post("/api/orders", orderData);

      // Handle success
      if (response.data.success) {
        setSuccess(true);
        setOrderItems("");
        setShippingAddress("");
        setPaymentId("");
      }
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-800/10 p-8 border-2 border-green-950 rounded-md lg:w-[40%] w-full">
        <h1 className="text-3xl poppins-bold text-black/80 mb-6">
          Create Your Order
        </h1>

        {/* Order Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="poppins-regular text-black/60 block mb-2">
              Order Items (JSON format)
            </label>
            <textarea
              className="w-full p-2 border border-green-400 rounded-md"
              rows="4"
              value={orderItems}
              onChange={(e) => setOrderItems(e.target.value)}
              placeholder={`[{"item": "Plant 1", "quantity": 2}, {"item": "Plant 2", "quantity": 1}]`}
              required
            />
          </div>

          <div className="mb-4">
            <label className="poppins-regular text-black/60 block mb-2">
              Shipping Address
            </label>
            <input
              type="text"
              className="w-full p-2 border border-green-400 rounded-md"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="123 Green Street, Plantville"
              required
            />
          </div>

          <div className="mb-4">
            <label className="poppins-regular text-black/60 block mb-2">
              Payment ID
            </label>
            <input
              type="text"
              className="w-full p-2 border border-green-400 rounded-md"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              placeholder="payment_xyz_123"
              required
            />
          </div>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Order created successfully!</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mt-4"
            disabled={loading}
          >
            {loading ? "Creating Order..." : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
