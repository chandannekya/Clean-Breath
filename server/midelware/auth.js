const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");
const asyncHandler=require("../utilities/asyncHandler")

exports.auth = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header("Authorization")?.replace("Bearer ", "");

  console.log(token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "TOken is missing",
    });
  }

  const decode = await jwt.verify(token, process.env.JWT_SECRET);
  console.log(decode);

  req.user = decode;
  next();
});
