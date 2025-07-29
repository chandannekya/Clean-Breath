const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['visitor', 'nursery_admin', 'admin'],
    default: 'visitor'
  },

  nurseryName: {
    type: String,
  },

  location: {
    type: String,
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

  articlesRead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",  
    },
  ],
  articlesWritten: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],

  userPlants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
    },
  ],
});

exports.User = mongoose.model("User", userSchema);
