const Course = require("../model/Course");
const Admin = require("../model/Admins");

// Get all active courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).sort({
      updatedAt: -1,
    });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// get a single course By ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    console.log(req.admin);
    // ✅ Validate: ensure req.admin exists and has _id
    if (!req.admin || !req.admin.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Admin not authenticated" });
    }

    const { courseName, department, fees, duration, deadline, eligibility } =
      req.body;

    if (
      !courseName ||
      !department ||
      !fees ||
      !duration ||
      !deadline ||
      !eligibility
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = new Course({
      userId: req.admin.id, // ✅ Correct: matches your middleware
      courseName,
      fees,
      duration,
      eligibility,
      department,
      deadline,
      isActive: true,
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error("Create course error:", error); // helpful for debugging
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing course
exports.updateCourse = async (req, res) => {
  try {
    const id = req.params.id.trim();
    console.log(req.params.id);

    console.log("Request Body:", req.body); // Debugging line
    const updateData = req.body;

    console.log("Update Data:", updateData); // Debugging line

    const course = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error("UPDATE COURSE ERROR:", error); // 👈 ADD THIS
    res.status(500).json({
      message: "Server Error",
      error: error.message, // 👈 send error message
    });
  }
};

// Deactivate a course
exports.deleteCourse = async (req, res) => {
  try {
    const id = req.params.id.trim();
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({ message: "Course deleted permanently", deletedCourse: course });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
