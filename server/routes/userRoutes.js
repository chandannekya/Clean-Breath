const express = require("express");
const router = express.Router();

const { getMyProfile } = require('../controllers/userController');
const { auth } = require('../middleware/auth');

router.get('/me', auth, getMyProfile);

module.exports = router;