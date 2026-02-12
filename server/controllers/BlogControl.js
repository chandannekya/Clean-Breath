const express = require("express");
const mongoose = require("mongoose");
const { User } = require("../models/user");
const { Blog } = require("../models/blog");
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
      // Use placeholder image when Cloudinary fails
      console.log("Using placeholder image for blog cover");
      coverImgSrc = "https://via.placeholder.com/800x400/4ade80/ffffff?text=Blog+Cover";
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
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(id).populate("author", "username");

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Track article reading for authenticated users
    if (req.user && req.user.id) {
      try {
        console.log(`Tracking article read: User ${req.user.id} read blog ${blog._id}`);
        const updateResult = await User.findByIdAndUpdate(
          req.user.id,
          { $addToSet: { articlesRead: blog._id } }, // $addToSet prevents duplicates
          { new: true }
        );
        console.log(`Article tracking successful for user ${req.user.id}`);
      } catch (trackingError) {
        console.error("Article tracking error:", trackingError);
        // Don't fail the request if tracking fails
      }
    } else {
      console.log("No user authentication found, skipping article tracking");
    }

    res.status(200).json({ message: "Blog fetched", blog });
  } catch (error) {
    console.error("Get blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
