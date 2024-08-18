const express = require("express");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require("../controlers/BlogControl");

const router = express.Router();

const { auth } = require("../midelware/auth");

router.post("/create", auth, createBlog);

router.get("/blogs", getAllBlogs);

router.get("/blogdel:id", getBlogById);

module.exports = router;
