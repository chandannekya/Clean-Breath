const Razorpay = require("razorpay");

// Only initialize Razorpay if keys are provided
let instance = null;

if (process.env.RazorPay_key_id && process.env.RazorPay_key_secret) {
  instance = new Razorpay({
    key_id: process.env.RazorPay_key_id,
    key_secret: process.env.RazorPay_key_secret,
  });
} else {
  console.warn("Razorpay keys not found. Payment functionality will be disabled.");
}

exports.instance = instance;
