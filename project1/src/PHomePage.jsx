import React, { useState } from "react";
import DoctorProfile from "./DocProfile";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", disease: "Heart Disease", experience: "10 years", rating: 4.8, image: "doctor1.jpg" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Endocrinologist", disease: "Diabetes", experience: "8 years", rating: 4.6, image: "doctor2.jpg" },
  { id: 3, name: "Dr. Alice Brown", specialty: "Pulmonologist", disease: "Asthma", experience: "12 years", rating: 4.9, image: "doctor3.jpg" },
];

const PatientHomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.disease.toLowerCase().includes(selectedDisease.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-100 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-green-700">Find Your Specialist</h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by doctor name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/3 p-3 rounded-lg bg-white border border-green-300 text-gray-900 placeholder-gray-500 shadow-sm"
          />
          <select
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
            className="w-full sm:w-1/4 p-3 rounded-lg bg-white border border-green-300 text-gray-900 shadow-sm"
          >
            <option value="">Filter by Disease</option>
            <option value="Heart Disease">Heart Disease</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Asthma">Asthma</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => <DoctorProfile key={doctor.id} doctor={doctor} />)
          ) : (
            <p className="text-center text-lg text-green-700 font-semibold">No doctors found. Try another search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientHomePage;
