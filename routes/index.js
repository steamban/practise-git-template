const express = require('express');

// route handler
const router = express.Router();
const homeController = require('../controllers/home_controller');

// for testing purposes
console.log('router loaded');

// for homepage
// router.use('/routername', require('./routerfilename'));
router.get('/', homeController.home);

// for users (further mapping done in controllers folder with dedicated file)
router.use('/users', require('./users'))

module.exports = router;