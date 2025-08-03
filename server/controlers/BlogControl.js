const express = require("express");
const { User } = require("../models/user");
const { Blog } = require("../models/blog");
const mongoose = require("mongoose");
const asyncHandler=require("../utilities/asyncHandler")
exports.createBlog = asyncHandler(async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "User not authenticated" });
  }

  const blog = await Blog.create({ title, body, user: req.user.id });

  await User.findByIdAndUpdate(
    req.user.id,
    { $push: { blogs: blog._id } },
    { new: true }
  );

  res.status(201).json({ success: true, blog });
});

exports.getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().populate("user");

  res.status(200).json({ blogs });
});

exports.getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const blog = await Blog.findById(id).populate("user");

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.status(200).json({ message: "Blog fetched", blog });
});

