const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// Route to upload a new report
router.post("/upload", async (req, res) => {
  try {
    const { patientName, reportType, fileUrl } = req.body;
    const newReport = new Report({ patientName, reportType, fileUrl });
    await newReport.save();
    res.status(201).json({ message: "Report uploaded successfully!", report: newReport });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a specific report by ID
router.get("/:id", async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a report
router.delete("/:id", async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json({ message: "Report deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
