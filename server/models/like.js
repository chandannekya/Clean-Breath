const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true
  }
}, { timestamps: true });

// Create a compound index to ensure one like per user per blog
likeSchema.index({ user: 1, blog: 1 }, { unique: true });

// Add a static method to check if a user has liked a blog
likeSchema.statics.hasLiked = async function(userId, blogId) {
  const like = await this.findOne({ user: userId, blog: blogId });
  return !!like;
};

// Add a static method to get like count for a blog
likeSchema.statics.getLikeCount = async function(blogId) {
  return await this.countDocuments({ blog: blogId });
};

exports.Like = mongoose.model("Like", likeSchema);
