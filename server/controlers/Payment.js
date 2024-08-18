const express = require("express");

const { User } = require("../models/user");
const { instance } = require("../Connection/RazorPay");
const { Payment } = require("../models/Payment");
const crypto = require("crypto");
exports.createPayment = async (req, res) => {
  const amount = req.body.amount;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    const response = await instance.orders.create(options);

    res.status(200).json({
      response,
      success: true,
      orderId: response.id,
      currency: response.currency,
      amount: response.amount,
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

exports.verifySignature = (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
    } = req.body;

    const genrateSignature = crypto
      .createHmac("sha256", process.env.RazorPay_key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (genrateSignature !== razorpay_signature) {
      res.status(400).json({
        success: true,
        message: "Payment Failed",
        error: "Invalid Signature",
      });
    }

    const payment = new Payment({
      User: req.user.id,
      orderId: orderId,
      razorpayPaymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      paymentStatus: "Success",
    });

    res.status(200).json({
      success: true,
      message: "Payment Successful",
    });
    payment.save();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while verifying the payment",
      error: error.message,
    });
  }
};
