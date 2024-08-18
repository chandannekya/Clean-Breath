const Razorpay = require("razorpay");

exports.instance = new Razorpay({
  key_id: process.env.RazorPay_key_id,
  key_secret: process.env.RazorPay_key_secret,
});
