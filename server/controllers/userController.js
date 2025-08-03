const { User } = require("../models/user");

exports.getMyProfile = async (req,res) => {
  try {
    const user = await User.findById(req.user.id)
    .select('username email articlesRead userPlants')
      .populate('articlesRead', 'title _id')
      .populate('userPlants', 'name image');

    if(!user){
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        username: user.username,
        email: user.email,
        articlesRead: user.articlesRead,
        userPlants: user.userPlants
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server Error'
    })
  }
}