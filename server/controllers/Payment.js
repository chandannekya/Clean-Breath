const express = require("express");
const { User } = require("../models/user");
const { instance } = require("../Connection/RazorPay");
const { Payment } = require("../models/Payment");
const Order = require("../models/OrderModel");
const crypto = require("crypto");

exports.createPayment = async (req, res) => {
  try {
    // Check if Razorpay is initialized
    if (!instance) {
      return res.status(500).json({
        success: false,
        message: "Payment service is not configured. Please contact administrator.",
      });
    }

    const amount = req.body.amount;
    const options = {
      amount: amount,
      currency: "INR",
      receipt: Math.random(Date.now()).toString(),
    };

    // Create an order using Razorpay instance
    const response = await instance.orders.create(options);

    // Respond with the order details
    res.status(200).json({
      success: true,
      orderId: response.id,
      currency: response.currency,
      amount: response.amount,
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the payment",
      error: error.message,
    });
  }
};

exports.verifySignature = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderId,
    } = req.body;

    // Log incoming data
    console.log("Incoming Request Data:", {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderId,
    });

    // Generate the signature using Razorpay key secret
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(
        `${razorpay_payment_id.razorpay_order_id}|${razorpay_payment_id.razorpay_payment_id}`
      )
      .digest("hex");

    // Log the generated and received signatures
    console.log("Generated Signature:", generatedSignature);
    console.log("Received Signature:", razorpay_signature);

    // Check if the generated signature matches the Razorpay signature
    if (generatedSignature !== razorpay_payment_id.razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment Failed",
        error: "Invalid Signature",
      });
    }

    // If valid, save payment details
    const payment = await Payment.create({
      user: req.user.id,

      razorpayPaymentId: razorpay_payment_id.razorpay_payment_id,
      razorpayOrderId: razorpay_payment_id.razorpay_order_id,
      orderId: razorpay_payment_id.orderId,
      paymentStatus: "Success",
    });

    await Order.findOneAndUpdate(
      { _id: razorpay_payment_id.orderId }, // Query to find the document
      { paymentId: payment._id }, // Update operation
      { new: true } // Return the updated document
    );
    // Respond with success

    res.status(200).json({
      success: true,
      message: "Payment Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while verifying the payment",
      error: error.message,
    });
  }
};
