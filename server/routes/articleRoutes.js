const express = require("express");
const router = express.Router();
const {createArticle,getAllArticle,getArticleById} = require("../controllers/articleController");
const { auth } = require("../middleware/auth");

router.post("/create", auth, createArticle);

router.get("/articles", getAllArticle);

router.get("/articledel:id", getArticleById);

module.exports = router;
