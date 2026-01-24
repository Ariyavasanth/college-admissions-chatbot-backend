const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes.js");
const adminDashboardRoutes = require("./routes/adminDashboardRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");

dotenv.config();

// Database connection setup
const connectDB = require("./config/Db.js");

const app = express();

// DB coonnetion establishment
connectDB();

// used to send the json data
app.use(express.json());

// FIX: JSON + URL encoded should be ABOVE all routes
app.use(express.urlencoded({ extended: true }));

// AUTHENTICATION ROUTES
app.use("/api/admin/auth", authRoutes);

// ADMIN DASHBOARD ROUTES
app.use("/api/admin/dashboard", adminDashboardRoutes);

app.use("/api/admin/coursemanagement", courseRoutes);

app.use("/api", require("./routes/chatRoutes"));

// Port is listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port ${process.env.PORT}`);
});
