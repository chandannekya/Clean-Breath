const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },

    razorpayPaymentId: {
      type: String,
    },
    razorpayOrderId: {
      type: String,
    },
  },
  { timestamps: true }
);
exports.Payment = mongoose.model("Payment", paymentSchema);
