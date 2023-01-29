const express = require('express');

const router = express.Router();

// All required actions/functions are stored in the controllers folder with a dedicated file
// multiple actions can be defined there for different GET tasks
const  usersController = require('../controllers/users_controller');

// the 'profile' function is run when the user routes to profile page
router.get('/profile', usersController.profile);


module.exports = router;