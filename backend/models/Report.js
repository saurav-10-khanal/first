const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  reportType: { type: String, required: true },
  date: { type: Date, default: Date.now },
  fileUrl: { type: String, required: true }, // URL for report PDF/X-ray scan
});

module.exports = mongoose.model("Report", ReportSchema);
