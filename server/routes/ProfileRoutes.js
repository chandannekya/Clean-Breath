const express = require("express");
const { getUserProfile, getUserStats } = require("../controllers/Profile");
const { auth } = require("../middleware/auth");

const router = express.Router();

// Profile routes - all require authentication
router.get("/", auth, getUserProfile);
router.get("/stats", auth, getUserStats);

module.exports = router;
