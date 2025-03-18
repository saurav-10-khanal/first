import React, { useState } from "react";
import PatientSidebar from "./PSidebar";

const paymentSlips = [
  { id: 1, doctor: "Dr. John Doe", date: "2025-03-10", amount: "$100", status: "Paid", slip: "receipt1.pdf" },
  { id: 2, doctor: "Dr. Jane Smith", date: "2025-03-12", amount: "$150", status: "Pending", slip: "receipt2.pdf" },
  { id: 3, doctor: "Dr. Alice Brown", date: "2025-03-15", amount: "$120", status: "Paid", slip: "receipt3.pdf" },
];

const PatientPaymentSlips = () => {
  const [selectedSlip, setSelectedSlip] = useState(null);

  const viewSlip = (slip) => {
    setSelectedSlip(slip);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <PatientSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">My Payment Slips</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-600">
                <th className="p-3">Doctor</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentSlips.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="p-3">{payment.doctor}</td>
                  <td className="p-3">{payment.date}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className={`p-3 font-bold ${payment.status === "Paid" ? "text-green-400" : "text-yellow-400"}`}>
                    {payment.status}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => viewSlip(payment.slip)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      View Slip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedSlip && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Payment Slip</h3>
            <p className="text-gray-300 mt-2">Viewing: {selectedSlip}</p>
            <a
              href={selectedSlip}
              download
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Download Slip
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPaymentSlips;