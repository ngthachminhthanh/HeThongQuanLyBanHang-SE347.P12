const ProductEntity = require("../../models/products.model");
const CustomerEntity = require("../../models/customers.model");
const mongoose = require('mongoose');
require('dotenv').config();

// API handle for User
exports.getAllProducts = async (req, res) => {
	try {
		const { search } = req.query;
		let query = {};

		if (search) {
		query = {
			$or: [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } }
			]
		};
		}

		const productList = await ProductEntity.find(query);
		res.json(productList);
	} catch (error) {
		console.error('Lỗi khi truy vấn sản phẩm:', error);
		res.status(500).json({ message: 'Đã xảy ra lỗi khi truy vấn sản phẩm' });
	}
};

exports.getProductsBaseOnCategory = async (req, res) => {
	try {
		const category = req.params.category;
		const products = await ProductEntity.find({ category: category });
		res.json(products);
	} catch (error) {
		console.error('Lỗi khi truy vấn sản phẩm:', error);
		res.status(500).json({ message: 'Đã xảy ra lỗi khi truy vấn sản phẩm' });
	}
};


// API handle for Admin
// ...