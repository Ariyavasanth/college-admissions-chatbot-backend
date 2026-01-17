exports.adminDashbord = async (req, res) => {
  try {
    res.json({
      totalCourses: 0,
    });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
