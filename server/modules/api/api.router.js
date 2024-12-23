const express = require("express");
const router = express.Router();
const apiController = require("./api.controller");
const prefixProducts = "/products";
const prefixAdmin = "/admin";

// Endpoint API router for User
router.get(prefixProducts, apiController.getAllProducts);
router.get(`${prefixProducts}/:category`, apiController.getProductsBaseOnCategory);

// Endpoint API router for Admin
router.get(`${prefixAdmin}/export/:dataType`, apiController.exportFile);
router.get(`${prefixAdmin}/orders`, apiController.getAllOrders);
router.patch(`${prefixAdmin}/orders/:id`, apiController.updateOrderStatus);

module.exports = router;
