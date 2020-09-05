const express = require('express');
const router = express.Router();

const test= require('./controllers/test');

router.get('/getall', test.getAllData);
module.exports = router;