const express = require('express');
const router = express.Router();
const chiNhanhController = require('../app/controllers/ChiNhanhController');

router.use('/', chiNhanhController.index);

module.exports = router;
