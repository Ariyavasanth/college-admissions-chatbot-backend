const mongoose = require("mongoose");

const admissionProcessSchema = new mongoose.Schema(
  {
    // appliesTo: {
    //   type: String,
    //   default: "ALL"
    // },
    steps: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdmissionProcess", admissionProcessSchema);
