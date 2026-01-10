const express = require("express");
const upload = require("../utilities/upload");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  toggleLike,
  getLikes
} = require("../controllers/BlogControl");

const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/create", auth, upload.single("coverImg"), createBlog);

router.get("/blogs", getAllBlogs);

router.get("/blogdel/:id", getBlogById);

// Like routes
router.post("/:id/like", auth, toggleLike);
router.get("/:id/likes", getLikes);

module.exports = router;
