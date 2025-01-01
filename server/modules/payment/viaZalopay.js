const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment
const express = require('express');
const uuid = require('uuid'); // npm install uuid
const ProductEntity = require("../../models/products.model");
const CustomerEntity = require("../../models/customers.model");
const mongoose = require('mongoose');

const { config } = require('dotenv');
require('dotenv').config();


exports.createPaymentFromMyOrder  = async (req, res) => {
  const { 
    fullname,
    email,
    orderId,
    items,
    total_price,
  } = req.body ;
  
  //console.log("REQ body -------------------------------------------", req.body);

  const info =[{
    orderId,
    email,
    items
  }];

  const embed_data = {
    redirecturl	: "http://localhost:3000/myorders"
  };
  
  const transID = Math.floor(Math.random() * 1000000);

  const order = {
    app_id: process.env.app_id, 
    app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
    app_user: fullname, 
    app_time: Date.now(), // miliseconds
    item: JSON.stringify(info), 
    embed_data: JSON.stringify(embed_data), 
    amount: total_price, 
    description: "Thanh toán ZaloPay cho đơn hàng ",
    bank_code: "",
    callback_url:"https://e4a7-14-169-2-6.ngrok-free.app/api/callback"
  };
  //console.log("order: -------------------------------",order);
  try{
    const data = order.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data,  process.env.key1).toString();

    const result = await axios.post( process.env.endpoint, null, { params: order });
    res.send(result.data);
    console.log(result.data);
  }catch(error){
    console.log(error.msg)
  }
}

exports.createPayment = async (req, res) => {
  const { 
    email,
    fullName,
    phone,
    address,
    province,
    district,
    ward,
    note,
    items,
    total_price,
    date,
    payment_method
  } = req.body ;
 
  const embed_data = {
    redirecturl	: "http://localhost:5173/myorders"
  };

  const transID = Math.floor(Math.random() * 1000000);
 
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
      method: payment_method
    },
    status: "waiting for payment",
    note,
    customer_name: fullName,
  };

  const info =[{
    orderId: newOrder.orderId,
    email,
    items
  }];


  const order = {
    app_id: process.env.app_id, 
    app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
    app_user: fullName, 
    app_time: Date.now(), // miliseconds
    item: JSON.stringify(info), 
    embed_data: JSON.stringify(embed_data), 
    amount: total_price, 
    description: "Thanh toán ZaloPay cho đơn hàng ",
    bank_code: "",
    callback_url:"https://e4a7-14-169-2-6.ngrok-free.app/api/callback"
  };

  // appid|apptransid|appuser|amount|apptime|embeddata|item
  const data = process.env.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
  order.mac = CryptoJS.HmacSHA256(data,  process.env.key1).toString();


  try{
    let customer = await CustomerEntity.findOne({ email });
    if (!customer) {
      // Nếu khách hàng không tồn tại, tạo mới
      customer = new CustomerEntity({
        email,
        fullName,
        phone,
        address: `${address}, ${province}, ${district}, ${ward}`,
        orders: []
      });
    }
    
    // Thêm đơn hàng vào danh sách orders của khách hàng
    customer.orders.push(newOrder);
    await customer.save();
    const result = await axios.post( process.env.endpoint, null, { params: order })
    res.send(result.data)
  }catch(error){
    console.log(error.msg)
  }
};

exports.callBack = async (req, res) =>{
  let result = {};
  try {
    let dataStr = req.body.data;
    let reqMac = req.body.mac;
    let mac = CryptoJS.HmacSHA256(dataStr, process.env.key2).toString();
    console.log("mac =", mac);
    
    let dataJson = JSON.parse(dataStr, process.env.key2);
    console.log("datajosn content:",dataJson);
    const itemsArray = JSON.parse(dataJson.item);

  // Truy cập email
    const email = itemsArray[0]?.email;
    const orderid = itemsArray[0]?.orderId;

    //console.log('Email:-------------------------------------------------------', email);
      if (reqMac !== mac) {
        // callback không hợp lệ
        result.return_code = -1;
        result.return_message = "mac not equal";
        const customer = await CustomerEntity.findOne({ email });
        
        const order = customer.orders.find(o => o.orderId === orderid);
        if (order) {
          order.status = "Waiting for payment"; // Đánh dấu đã thanh toán
          await customer.save();
        }
    } 
      else {
        // thanh toán thành công
        // merchant cập nhật trạng thái cho đơn hàng
        result.return_code = 1;
        result.return_message = "success";
      
        const customer = await CustomerEntity.findOne({ email });
        
        const order = customer.orders.find(o => o.orderId === orderid);
        // console.log("-------------------------------------------------")
        // console.log(orderid );
        // console.log("-------------------------------------------------")
        // console.log(dataJson);

        if (order) {
          order.status = "paid"; // Đánh dấu đã thanh toán
          await customer.save();
        }

      }
    } catch (ex) {
      result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
      result.return_message = ex.message;
      const customer = await CustomerEntity.findOne({ email });
        
      const order = customer.orders.find(o => o.orderId === orderid);
      if (order) {
        order.status = "Waiting for payment"; // Đánh dấu đã thanh toán
        await customer.save();
      }
    }
    
    res.json(result);
};


