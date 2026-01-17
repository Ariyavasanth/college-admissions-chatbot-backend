const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "../.env" });

const connectDB = require("../config/Db");
const Admin = require("../model/Admins");

connectDB()


async function createAdmin() {
  const existingAdmin = await Admin.findOne({
    email: "admin@college.com",
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    name: "Super Admin",
    email: "admin@college.com",
    password: hashedPassword,
  });

  console.log("Admin created successfully");
  process.exit();
}

createAdmin();
