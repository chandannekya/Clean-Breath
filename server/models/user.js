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
  token: {
    type: String,
  },

  //New Field: Articles the user has read
  articlesRead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog", 
    },
  ],

  //New Field: Plants the user has added/saved
  userPlants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
    },
  ],
});

exports.User = mongoose.model("User", userSchema);
