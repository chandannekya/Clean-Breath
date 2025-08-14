const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utilities/asyncHandler");
exports.sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const checkUserPresent = await User.findOne({ email });

  if (checkUserPresent) {
    return res.status(401).json({
      success: false,
      message: "User already exist",
    });
  }

  var otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  let result = await OTP.findOne({ otp });

  while (result) {
    otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    result = await OTP.findOne({ otp });
  }

  const otpPayload = { email, otp };

  const otpBody = await OTP.create(otpPayload);

  await mailSender(email, "OTP for registration", `Your OTP is ${otp}`);

  console.log(otpBody);

  res.status(200).json({
    success: true,
    message: "OTP sent",
    otp,
  });
});

exports.signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const haspassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, email, password: haspassword });

  res.status(201).json({ user });
});

exports.signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "20h",
    });
    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Logged in successfully",
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Password is incorrect",
    });
  }
});
