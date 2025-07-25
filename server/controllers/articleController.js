const { User } = require("../models/user");
const { Article } = require("../models/blog");
const mongoose = require("mongoose");

exports.createArticle = async (req, res) => {
  try {
    const { title, introduction, body, conclusion } = req.body;

    if (!title || !introduction || !body || !conclusion) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user.id;

    const article = await Article.create({
      title,
      introduction,
      body,
      conclusion,
      user: userId,
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { articlesWritten: article._id } }, 
      { new: true }
    );

    res.status(201).json({ success: true, article });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the article" });
  }
};

exports.getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find().populate("user");

    res.status(200).json({ articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const article = await Article.findById(id).populate("user");

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article fetched", article });
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Internal server error while fetching article" });
  }
};
