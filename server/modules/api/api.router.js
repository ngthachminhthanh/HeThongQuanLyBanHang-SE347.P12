const express = require("express");
const router = express.Router();

// Endpoint API router for User
router.post('/order', apiController.handleOrder);

// Endpoint API router for Admin
// ...

module.exports = router;