const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Extended user schema with role-based access and location info
  role: {
    type: String,
    enum: ['visitor', 'nursery_admin', 'admin'],
    default: 'visitor'
  },

  nurseryName: {
    type: String
  },

  location: {
    type: String
  },

  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
  token: {
    type: String,
  },

  // Articles the user has read
  articlesRead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],

  // Articles the user has written
  articlesWritten: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    }
  ],

  // Plants the user has added/saved
  userPlants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
    },
  ],
});

exports.User = mongoose.model("User", userSchema);
