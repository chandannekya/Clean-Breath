const express= require("express");
const router= express.Router();
const User = require('../models/user');
const Plant = require('../models/Plant.model');

//dummy monodb data for  testing
//for storing user data
// also storing users last login time, last updated

router.post('/create-dummy', async (req, res) => {
  try {
    const dummyUser = new User({
      username: "testuser",
      email: "test@example.com",
      password: "password123"
    });

    const savedUser = await dummyUser.save();
    res.status(201).json({ message: "Dummy user created", user: savedUser });
  } catch (error) {
    console.error("Error creating dummy user:", error);
    res.status(500).json({ message: "Error creating dummy user", error: error.message });
  }
});

//Saving records of users plantId, quantity, price

router.post('/:userId/purchase', async (req, res) => {
  try {
    console.log('Incoming purchase request for user:', req.params.userId);
    console.log('Request body:', req.body);

    const user = await User.findById(req.params.userId);

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    const { plantId, quantity, price } = req.body;
    console.log('Purchase data:', { plantId, quantity, price });

    if (!user.pastPurchases) {
      user.pastPurchases = [];
    }

    user.pastPurchases.push({ plantId, quantity, price });
    await user.save();

    res.json({ message: 'Purchase added successfully', pastPurchases: user.pastPurchases });
  } catch (error) {
    console.error('Error adding purchase:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//saving records of users past viewed PLANTS

router.put('/:userId/viewed-item', async (req, res) => {
  console.log("PUT /:userId/viewed-item called");

  try {
    const user = await User.findById(req.params.userId);
    const { plantId } = req.body;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    if (!user.recentItemsViewed) {
      user.recentItemsViewed = [];
    }

    user.recentItemsViewed.push({ plantId });

    await user.save();

    res.json({ 
      message: 'Viewed item added successfully', 
      plantsViewed: user.recentItemsViewed 
    });

  } catch (error) {
    console.error('Error adding viewed item:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
