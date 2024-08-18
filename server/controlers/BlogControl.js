const express = require("express");
const { User } = require("../models/user");
const { Blog } = require("../models/blog");
const mongoose = require("mongoose");
exports.createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Create the blog
    const blog = await Blog.create({ title, body, user: req.user.id });

    // Find the user and add the blog to their list
    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { blogs: blog._id } }, // Assuming 'blogs' is an array field
      { new: true } // Options
    );

    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the blog" });
  }
};
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user");

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const blog = await Blog.findById(id).populate("user");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog fetched", blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res
      .status(500)
      .json({ message: "Internal server error while fetching blog" });
  }
};
