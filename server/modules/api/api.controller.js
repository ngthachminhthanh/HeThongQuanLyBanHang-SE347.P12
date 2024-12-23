const ProductEntity = require("../../models/products.model");
const CustomerEntity = require("../../models/customers.model");
const mongoose = require('mongoose');
require('dotenv').config();

// API handle for User
exports.handleOrder = async (req, res) => {
    try {
        const { email, address, province, district, ward, note, items, total_price } = req.body;

        if (!Array.isArray(items)) {
            return res.status(400).json({ message: 'Invalid items data' });
        }

        const newOrder = {
            orderId: new mongoose.Types.ObjectId().toString(),
            total_price,
            date_order: new Date(),
            address: `${address}, ${province}, ${district}, ${ward}`,
            products: items.map(item => ({
                name: item.product_name,
                price: item.product_price,
                quantity: item.quantity
            })),
            payment: {
                date_payment: new Date(),
                method: 'Cash on Delivery'
            },
            status: 'waiting for confirmation',
            note
        };

        let customer = await CustomerEntity.findOne({ email });

        customer.orders.push(newOrder);
        await customer.save();

        res.status(200).send("Order successfully!!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating order' });
    }
};
// API handle for Admin
// ...