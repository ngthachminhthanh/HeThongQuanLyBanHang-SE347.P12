const express = require("express");
const router = express.Router();
const apiController = require('./api.controller');
const prefixProducts = '/products';

// Endpoint API router for User
router.get(prefixProducts, apiController.getAllProducts);
router.get(`${prefixProducts}/:category`, apiController.getProductsBaseOnCategory);

// Endpoint API router for Admin
// ...

module.exports = router;