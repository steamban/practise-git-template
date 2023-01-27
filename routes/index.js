const express = require('express');

// route handler
const router = express.Router();
const homeController = require('../controllers/home_controller');

// for testing purposes
console.log('router loaded');

router.get('/', homeController.home);

module.exports = router;