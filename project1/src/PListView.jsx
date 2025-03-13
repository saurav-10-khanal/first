import React, { useState, useMemo } from "react";
import Sidebar from "./sidebar";

const PatientListView = () => {
  const [patients] = useState([
    {
      id: 1,
      name: "John Doe",
      appointmentDate: "2025-03-15",
      disease: "Hypertension",
      reportUrl: "https://example.com/report1.pdf",
      age: 45,
      gender: "Male",
      contact: "123-456-7890",
      address: "123 Main St, Cityville",
      notes: "Patient requires follow-up in two weeks.",
    },
    {
      id: 2,
      name: "Jane Smith",
      appointmentDate: "2025-03-16",
      disease: "Diabetes",
      reportUrl: "https://example.com/report2.pdf",
      age: 50,
      gender: "Female",
      contact: "987-654-3210",
      address: "456 Elm St, Townsville",
      notes: "Monitoring blood sugar levels regularly.",
    },
    {
      id: 3,
      name: "Alice Brown",
      appointmentDate: "2025-03-17",
      disease: "Asthma",
      age: 30,
      gender: "Female",
      contact: "555-123-4567",
      address: "789 Oak St, Villagetown",
      notes: "Prescribed inhaler, review in one month.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPatients = useMemo(() => {
    return patients
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.disease.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        return sortOrder === "asc"
          ? new Date(a.appointmentDate) - new Date(b.appointmentDate)
          : new Date(b.appointmentDate) - new Date(a.appointmentDate);
      });
  }, [patients, searchTerm, sortOrder]);

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatient(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-white text-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Patient List</h1>
        <input
          type="text"
          placeholder="Search by name or disease..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-100 border border-green-500 text-gray-900 placeholder-gray-500 mb-4"
        />
        <table className="min-w-full bg-green-50 rounded-lg border border-green-500">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Appointment Date</th>
              <th className="py-3 px-4 border-b">Disease</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-green-200 transition-colors">
                <td className="py-3 px-4 border-b">{patient.name}</td>
                <td className="py-3 px-4 border-b">{patient.appointmentDate}</td>
                <td className="py-3 px-4 border-b">{patient.disease}</td>
                <td className="py-3 px-4 border-b">
                  <button
                    onClick={() => openModal(patient)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && selectedPatient && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-green-700 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-green-700">{selectedPatient.name}</h2>
              <p><strong>Appointment Date:</strong> {selectedPatient.appointmentDate}</p>
              <p><strong>Disease:</strong> {selectedPatient.disease}</p>
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Gender:</strong> {selectedPatient.gender}</p>
              <p><strong>Contact:</strong> {selectedPatient.contact}</p>
              <p><strong>Address:</strong> {selectedPatient.address}</p>
              {selectedPatient.notes && <p><strong>Notes:</strong> {selectedPatient.notes}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientListView;
