const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./modules/api/api.router.js')
const authRouter = require('./modules/auth/auth.router');
require('dotenv').config();

// Kết nối đến MongoDB
const connectDB = require("./database");
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // Chỉ cho phép từ nguồn này
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Các phương thức cho phép
  allowedHeaders: ['Content-Type', 'Authorization'], // Các header được phép
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('TEST SERVER from NODEJS + EXPRESSJS');
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});