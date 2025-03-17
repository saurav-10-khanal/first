import React, { useState } from "react";
import PatientSidebar from "./PSidebar";

const UploadReport = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [report, setReport] = useState({
    uploaded: false,
    doctorReview: "",
    medicines: [],
    additionalNotes: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setReport({
        uploaded: true,
        doctorReview: "Your report is under review. Please wait for the doctor's feedback.",
        medicines: [],
        additionalNotes: "",
      });
      alert("Report uploaded successfully!");
    }
  };

  return (
    <div className="flex h-screen bg-white text-gray-900">
      <PatientSidebar />
      <div className="flex-1 flex flex-col items-center p-6">
        <h2 className="text-4xl font-bold mb-6 text-green-700">Upload Medical Report</h2>
        <div className="bg-green-100 p-6 rounded-lg shadow-xl w-full max-w-2xl">
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            className="w-full p-3 mb-4 bg-white text-gray-900 rounded-lg border border-green-400 focus:ring focus:ring-green-300"
          />
          <button
            onClick={handleUpload}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Upload Report
          </button>
        </div>
        {report.uploaded && (
          <div className="bg-green-50 p-6 mt-6 rounded-lg shadow-xl w-full max-w-2xl">
            <h3 className="text-2xl font-semibold text-green-700">Report Details</h3>
            <p className="text-gray-700 mt-2">Doctor Review: {report.doctorReview}</p>
            <p className="text-gray-700 mt-2">Additional Notes: {report.additionalNotes || "No additional notes."}</p>
            <h4 className="text-xl font-semibold mt-4 text-green-700">Prescribed Medicines</h4>
            {report.medicines.length > 0 ? (
              <ul className="list-disc pl-5 mt-2 text-gray-800">
                {report.medicines.map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No medicines prescribed yet.</p>
            )}
            <div className="mt-4 flex gap-3">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                View Report
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                Delete Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadReport;
