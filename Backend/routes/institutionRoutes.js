const express = require("express");
const router = express.Router();

const {
  getInstitution,
  upsertInstitution,
} = require("../controllers/institutionController");

const { authMiddleware } = require("../middleware/authMiddleware");

// Admin only
router.get("/", authMiddleware, getInstitution);
router.post("/", authMiddleware, upsertInstitution);

module.exports = router;
