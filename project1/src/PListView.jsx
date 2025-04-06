import React, { useState, useMemo } from "react";
import Sidebar from "./sidebar";

const PatientCardView = () => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Patient List</h1>
          <button 
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center"
          >
            Sort by Date {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or disease..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-green-300 text-gray-900 placeholder-gray-500 shadow-sm"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <div 
              key={patient.id} 
              className="bg-white rounded-lg shadow-md border border-green-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-500 px-4 py-2 text-white font-semibold">
                Appointment: {formatDate(patient.appointmentDate)}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-green-700 mb-2">{patient.name}</h2>
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    {patient.disease}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {patient.gender}, {patient.age} yrs
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {patient.notes}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(patient)}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPatients.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No patients match your search criteria.
          </div>
        )}
        
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
              <div className="grid grid-cols-1 gap-2 text-gray-700">
                <p><span className="font-semibold">Appointment:</span> {formatDate(selectedPatient.appointmentDate)}</p>
                <p><span className="font-semibold">Disease:</span> {selectedPatient.disease}</p>
                <p><span className="font-semibold">Age:</span> {selectedPatient.age}</p>
                <p><span className="font-semibold">Gender:</span> {selectedPatient.gender}</p>
                <p><span className="font-semibold">Contact:</span> {selectedPatient.contact}</p>
                <p><span className="font-semibold">Address:</span> {selectedPatient.address}</p>
                {selectedPatient.notes && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p><span className="font-semibold">Notes:</span></p>
                    <p className="text-gray-600 mt-1">{selectedPatient.notes}</p>
                  </div>
                )}
                {selectedPatient.reportUrl && (
                  <div className="mt-4">
                    <a 
                      href={selectedPatient.reportUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-center bg-green-100 hover:bg-green-200 text-green-700 py-2 px-4 rounded"
                    >
                      View Medical Report
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientCardView;