const express = require("express");

const { User } = require("../models/user");

const Order = require("../models/OrderModel");

exports.createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentId } = req.body;

    const user = req.user.id;
    console.log("User ID:", user);

    if (!orderItems || !shippingAddress || !paymentId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Order Items:", orderItems);
    console.log("Shipping Address:", shippingAddress);
    console.log("Payment ID:", paymentId);

    console.log("Order model:", Order); // Log to check if the Order model is defined

    const order = await Order.create({
      user,
      orderItems,
      shippingAddress,
      paymentId,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.findByIdAndDelete(id);

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
