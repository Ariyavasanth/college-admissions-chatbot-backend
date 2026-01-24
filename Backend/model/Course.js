const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);
