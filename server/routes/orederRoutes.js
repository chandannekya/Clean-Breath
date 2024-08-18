const express = require("express");

const {
  createOrder,
  getAllOrders,
  cancelOrder,
} = require("../controlers/Order");

const router = express.Router();

const { auth } = require("../midelware/auth");

router.post("/createOrder", auth, createOrder);
router.get("/getAllOrders", getAllOrders);
router.post("/cancelOrder", auth, cancelOrder);

module.exports = router;
