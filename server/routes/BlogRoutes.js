const express = require("express");
const upload = require("../utilities/upload");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require("../controllers/BlogControl");

const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/create", auth, upload.single("coverImg"), createBlog);

router.get("/blogs", getAllBlogs);

// Optional auth middleware for blog detail - tracks reading for logged-in users
const optionalAuth = (req, res, next) => {
  const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
  
  console.log("Optional auth - Token received:", token ? "Yes" : "No");
  
  if (token) {
    try {
      const jwt = require("jsonwebtoken");
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("Optional auth - User decoded:", req.user.id);
    } catch (error) {
      // Invalid token, but continue without user context
      console.log("Optional auth - Token invalid:", error.message);
      req.user = null;
    }
  } else {
    console.log("Optional auth - No token provided");
  }
  next();
};

router.get("/blogdel/:id", optionalAuth, getBlogById);

module.exports = router;
