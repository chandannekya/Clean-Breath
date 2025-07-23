const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  articlesRead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    }
  ],
  userPlants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
    }
  ],
  token: {
    type: String,
  },
});

exports.User = mongoose.model("User", userSchema);
