
var express = require('express');
const router = express.Router();
const Product = require('../model/Product');

router.get('/', function (req, resp, next) {
    // Load all products from MySQL or MongoDB ( Non-blocking IO )
    Product.find(function (err, products) {
        if (err) throw err;
        resp.json(products);
    });
});


module.exports = router;