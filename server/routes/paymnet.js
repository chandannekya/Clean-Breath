const express = require("express");

const { createPayment, verifySignature } = require("../controllers/Payment");

const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/createPayment", auth, createPayment);

router.post("/verifyPayment", auth, verifySignature);

module.exports = router;
