const mongoose = require("mongoose");
const mailSender = require("../utilities/mailSender");

const otpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 10 * 60,
  },
});

async function sendVerificationMail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from  Clean Breath",
      otp
    );
    console.log("Email sent succesfully", mailResponse);
  } catch (error) {
    console.log("error occured while sending mails", error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  await sendVerificationMail(this.mail, this.otp);
  next();
});

module.exports = mongoose.model("OTP", otpSchema);
