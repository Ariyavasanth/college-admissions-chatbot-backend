const express = require("express");
const router = express.Router();
const {authMiddleware}  = require("../middleware/authMiddleware");
const {adminDashbord} = require("../controllers/adminDashboardController");

router.get("/stats", authMiddleware, adminDashbord);

module.exports = router;
