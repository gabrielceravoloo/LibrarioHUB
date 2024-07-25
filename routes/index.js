const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/sobre', homeController.sobre);

module.exports = router;
