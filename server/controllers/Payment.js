const express = require("express");
const { User } = require("../models/user");
const { instance } = require("../Connection/RazorPay");
const { Payment } = require("../models/Payment");
const Order = require("../models/OrderModel");
const crypto = require("crypto");
const asyncHandler=require("../utilities/asyncHandler")

exports.createPayment = asyncHandler(async (req, res) => {
  const amount = req.body.amount;
  const options = {
    amount: amount,
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  };

  const response = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    orderId: response.id,
    currency: response.currency,
    amount: response.amount,
    response,
  });
});

exports.verifySignature = asyncHandler(async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderId,
  } = req.body;

  console.log("Incoming Request Data:", {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderId,
  });

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(
      `${razorpay_payment_id.razorpay_order_id}|${razorpay_payment_id.razorpay_payment_id}`
    )
    .digest("hex");

  console.log("Generated Signature:", generatedSignature);
  console.log("Received Signature:", razorpay_signature);

  if (generatedSignature !== razorpay_payment_id.razorpay_signature) {
    return res.status(400).json({
      success: false,
      message: "Payment Failed",
      error: "Invalid Signature",
    });
  }

  const payment = await Payment.create({
    user: req.user.id,

    razorpayPaymentId: razorpay_payment_id.razorpay_payment_id,
    razorpayOrderId: razorpay_payment_id.razorpay_order_id,
    orderId: razorpay_payment_id.orderId,
    paymentStatus: "Success",
  });

  await Order.findOneAndUpdate(
    { _id: razorpay_payment_id.orderId },
    { paymentId: payment._id },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Payment Successful",
  });
});
