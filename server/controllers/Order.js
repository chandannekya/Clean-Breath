const express = require("express");

const { User } = require("../models/user");

const Order = require("../models/OrderModel");
const asyncHandler=require("../utilities/asyncHandler")

exports.createOrder = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, mobile } = req.body;
  const user = req.user.id;

  console.log("User ID:", user);

  if (!orderItems || !shippingAddress || !mobile) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Order Items:", orderItems);
  console.log("Shipping Address:", shippingAddress);
  console.log("Order model:", Order);

  const order = await Order.create({
    user,
    orderItems,
    mobile,
    shippingAddress,
  });

  res.status(201).json({
    success: true,
    message: "Order created successfully",
    order,
  });
});

exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("user");

  res.status(200).json({ orders });
});

exports.cancelOrder = asyncHandler(async (req, res) => {
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
});
