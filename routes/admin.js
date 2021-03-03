const express = require('express');

const path = require('path');

const router = express.Router();

const routDir = require('../util/path')

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(routDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
});

exports.routes = router;
exports.products = products;