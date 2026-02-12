const { User } = require("../models/user");
const asyncHandler = require("../utilities/asyncHandler");

// Get user profile with complete information
exports.getUserProfile = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await User.findById(userId)
      .populate("blogs")
      .populate("articlesRead")
      .populate("userPlants")
      .select("-password -token");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get user statistics
exports.getUserStats = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await User.findById(userId)
      .populate("blogs")
      .populate("articlesRead")
      .populate("userPlants");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const stats = {
      blogsCreated: user.blogs.length,
      articlesRead: user.articlesRead.length,
      plantsInCollection: user.userPlants.length,
      joinDate: user.createdAt || new Date('2024-01-01'), // Fallback for existing users
    };

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});
