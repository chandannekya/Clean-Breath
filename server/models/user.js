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


lastLogin:{
  type:Date,
  default:Date.now,
},

pastPurchase: [{
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  purchaseDate: {
    type: Date,
    default: Date.now,
  },

  quantity: {
    type: Number,
    default: 1,
  },

  price: {
    type: Number,
    required: true,
  },

  recentItemsViewed: [{
    plantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
      required: true,
    },

    viewedAt: {
      type: Date,
      default: Date.now,
    },
  }],
}],
},
{
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;