const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();
router.get("/", getAllCourses);
router.post("/", authMiddleware, createCourse);
router.get("/:id", getCourseById);
router.put("/:id", authMiddleware, updateCourse);
router.delete("/:id", authMiddleware, deleteCourse);

module.exports = router;
