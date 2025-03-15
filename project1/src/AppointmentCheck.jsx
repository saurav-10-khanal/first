import React, { useState } from "react";

const AppointmentStatusChecklist = () => {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Jane Doe",
      date: "2025-03-15",
      time: "10:00 AM",
      status: "Pending",
      details: "Your appointment request is under review.",
    },
    {
      id: 2,
      doctor: "Dr. John Smith",
      date: "2025-03-20",
      time: "2:00 PM",
      status: "Confirmed",
      details: "Your appointment has been confirmed. Please arrive 10 minutes early.",
    },
    {
      id: 3,
      doctor: "Dr. Alice Brown",
      date: "2025-03-22",
      time: "11:30 AM",
      status: "Rejected",
      details: "Unfortunately, the appointment was rejected. Please contact support for more info.",
    },
    {
      id: 4,
      doctor: "Dr. Emily White",
      date: "2025-03-10",
      time: "09:00 AM",
      status: "Completed",
      details: "Your appointment has been completed. Check your reports for further details.",
    },
  ]);

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-black";
      case "Confirmed":
        return "bg-green-600 text-white";
      case "Rejected":
        return "bg-red-600 text-white";
      case "Completed":
        return "bg-teal-600 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-900 mt-10 border border-green-500">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Appointment Status Checklist</h1>
      <ul className="space-y-4">
        {appointments.map((appt) => (
          <li key={appt.id} className="border border-green-300 rounded-lg p-4 hover:bg-green-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-700">{appt.doctor}</h2>
                <p className="text-sm text-gray-600">
                  {appt.date} at {appt.time}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusStyles(appt.status)}`}>
                  {appt.status}
                </span>
                <button
                  onClick={() => toggleExpand(appt.id)}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  {expandedId === appt.id ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {expandedId === appt.id && (
              <div className="mt-4 bg-green-100 p-4 rounded border border-green-300">
                <p>{appt.details}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentStatusChecklist;
