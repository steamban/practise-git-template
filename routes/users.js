const express = require('express');

const router = express.Router();

// All required actions are stored in the controllers folder with a dedicated file
const  usersController = require('../controllers/users_controller');

// the 'profile' function is run when the user is logs in to profile
router.get('/profile', usersController.profile);


module.exports = router;