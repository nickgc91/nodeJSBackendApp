const express = require('express');

const path = require('path');

const router = express.Router();

const routDir = require('../util/path')
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    res.render('shop')
});

module.exports = router;