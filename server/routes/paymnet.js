const express = require("express");

const { createPayment, verifySignature } = require("../controlers/Payment");

const router = express.Router();

const { auth } = require("../midelware/auth");

router.post("/createPayment", auth, createPayment);

router.post("/verifyPayment", auth, verifySignature);

module.exports = router;
