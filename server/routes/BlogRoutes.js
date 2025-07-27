const express = require("express");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require("../controllers/BlogControl");

const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/create", auth, createBlog);

router.get("/blogs", getAllBlogs);

router.get("/blogdel:id", getBlogById);

module.exports = router;
