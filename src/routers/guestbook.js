const express = require('express');

const controller = require('../controllers/guestbook');

const router = express.Router();
router.post('/', controller.addEntry);
router.get('/', controller.getEntries);

module.exports = router;