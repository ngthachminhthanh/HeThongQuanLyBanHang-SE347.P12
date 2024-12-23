const ProductEntity = require("../../models/products.model");
const CustomerEntity = require("../../models/customers.model");
const { Parser } = require("json2csv");
const mongoose = require("mongoose");
require("dotenv").config();

// API handle for User
exports.getAllProducts = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = {
                $or: [{ name: { $regex: search, $options: "i" } }, { description: { $regex: search, $options: "i" } }, { category: { $regex: search, $options: "i" } }],
            };
        }

        const productList = await ProductEntity.find(query);
        res.json(productList);
    } catch (error) {
        console.error("Lỗi khi truy vấn sản phẩm:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy vấn sản phẩm" });
    }
};

exports.getProductsBaseOnCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await ProductEntity.find({ category: category });
        res.json(products);
    } catch (error) {
        console.error("Lỗi khi truy vấn sản phẩm:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy vấn sản phẩm" });
    }
};

// API handle for Admin
exports.exportFile = async (req, res) => {
    try {
        const { dataType } = req.params;
        const { format } = req.query;

        let data;
        let fields;

        // Fetch data based on dataType
        if (dataType === "customers") {
            data = await CustomerEntity.find({}, "-password");
            fields = ["username", "email", "phone"];
        } else if (dataType === "products") {
            data = await ProductEntity.find({});
            fields = ["name", "description", "price", "quantity", "category"];
        } else {
            return res.status(400).json({ error: "Kiểu dữ liệu không hợp lệ" });
        }

        // Format data based on requested format
        if (format === "json") {
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Content-Disposition", `attachment; filename=${dataType}_export.json`);
            return res.json(data);
        } else if (format === "csv") {
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(data);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=${dataType}_export.csv`);
            return res.send(csv);
        } else {
            return res.status(400).json({ error: "Định dạng tệp không hợp lệ" });
        }
    } catch (error) {
        console.error("Error exporting data:", error);
        res.status(500).json({ error: "An error occurred while exporting data" });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const customers = await CustomerEntity.find();
        const orders = customers.flatMap((customer) =>
            customer.orders.map((order) => ({
                _id: order.orderId,
                username: customer.username,
                address: order.address,
                phone: customer.phone,
                products: order.products,
                total_price: order.total_price,
                status: order.status || "waiting for confirmation",
            }))
        );
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedOrder = await CustomerEntity.findOneAndUpdate({ "orders.orderId": id }, { $set: { "orders.$.status": status } }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
        }

        res.json(updatedOrder);
    } catch (error) {
        console.error("Error updating order:", error);
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({ message: "ID đơn hàng không hợp lệ" });
        }
        res.status(500).json({ message: "Lỗi server" });
    }
};
