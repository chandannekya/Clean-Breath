const express = require("express");
const mongoose = require("mongoose");
const { User } = require("../models/user");
const { Blog } = require("../models/blog");
const { Like } = require("../models/like");
const cloudinary = require("../utilities/cloudinary");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    if (!title?.trim()) return res.status(400).json({ error: "Title is required" });
    if (title.trim().length > 200) return res.status(400).json({ error: "Title too long" });

    if (!description?.trim()) return res.status(400).json({ error: "Description is required" });
    if (description.trim().length > 500) return res.status(400).json({ error: "Description too long" });

    if (!content?.trim()) return res.status(400).json({ error: "Content is required" });
    if (content.trim().length > 50000) return res.status(400).json({ error: "Content too long" });

    if (!req.file) return res.status(400).json({ error: "Cover image is required" });

    const coverImg = req.file;
    const maxFileSize = 5 * 1024 * 1024;
    if (coverImg.size > maxFileSize) {
      return res.status(400).json({ error: "Image exceeds 5MB limit" });
    }

    const base64Image = `data:${coverImg.mimetype};base64,${coverImg.buffer.toString("base64")}`;

    let coverImgSrc;
    try {
      const uploadRes = await cloudinary.uploader.upload(base64Image, { folder: "blogs" });
      coverImgSrc = uploadRes.secure_url;
    } catch (uploadError) {
      console.error("Cloudinary error:", uploadError);
      return res.status(500).json({ error: "Image upload failed" });
    }

    const blog = await Blog.create({
      title: title.trim(),
      description: description.trim(),
      content: content.trim(),
      coverImg: coverImgSrc,
      author: req.user.id,
    });

    try {
      await User.findByIdAndUpdate(
        req.user.id,
        { $push: { blogs: blog._id } },
        { new: true }
      );
    } catch (userUpdateError) {
      console.error("User blog update failed:", userUpdateError);
    }

    res.status(201).json({
      success: true,
      message: "Blog created",
      blog,
    });
  } catch (error) {
    console.error("Create blog error:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};


exports.getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (page < 1 || limit < 1 || limit > 50) {
      return res.status(400).json({ success: false, error: "Invalid pagination params" });
    }

    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find()
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content")
      .lean();

    res.status(200).json({
      success: true,
      blogs,
      pagination: {
        currentPage: page,
        totalPages,
        totalBlogs,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Fetch blogs error:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username");
    if (!blog) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }
    
    // Get like count and check if current user has liked the blog
    const likeCount = await Like.countDocuments({ blog: blog._id });
    let hasLiked = false;
    
    if (req.user?.id) {
      hasLiked = await Like.exists({ user: req.user.id, blog: blog._id });
    }
    
    const blogWithLikes = {
      ...blog.toObject(),
      likeCount,
      hasLiked
    };
    
    res.status(200).json({ success: true, blog: blogWithLikes });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// Toggle like on a blog post
exports.toggleLike = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user.id;

    // Check if blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    // Check if user has already liked the post
    const existingLike = await Like.findOneAndDelete({ user: userId, blog: blogId });

    if (existingLike) {
      // Unlike the post
      const likeCount = await Like.countDocuments({ blog: blogId });
      return res.status(200).json({
        success: true,
        message: "Blog unliked successfully",
        likeCount,
        hasLiked: false
      });
    }

    // Like the post
    await Like.create({ user: userId, blog: blogId });
    const likeCount = await Like.countDocuments({ blog: blogId });

    res.status(200).json({
      success: true,
      message: "Blog liked successfully",
      likeCount,
      hasLiked: true
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// Get likes for a blog post
exports.getLikes = async (req, res) => {
  try {
    const blogId = req.params.id;
    
    // Check if blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }
    
    const likes = await Like.find({ blog: blogId })
      .populate('user', 'username')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      likes,
      count: likes.length
    });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};
