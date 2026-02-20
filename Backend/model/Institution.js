const mongoose = require("mongoose");
const InstitutionSchema = new mongoose.Schema(
  {
    institutionName: { type: String, required: true },

    timings: {
      morningShift: String,
      eveningShift: String,
      general: String,
    },

    contactDetails: {
      phone: String,
      email: String,
      website: String,
      address: {
        text: String,
        mapLink: String,
      },
    },

    lastUpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Institution", InstitutionSchema);
