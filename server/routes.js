const express = require('express');
const controllers = require('./controllers/controllers.js');

const router = express.Router();

router.post('/messages', controllers);

module.exports = router;
