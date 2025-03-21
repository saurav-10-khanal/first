import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const mockHealthData = [
  { date: "Jan", bloodPressure: 120, heartRate: 72 },
  { date: "Feb", bloodPressure: 118, heartRate: 74 },
  { date: "Mar", bloodPressure: 122, heartRate: 70 },
  { date: "Apr", bloodPressure: 119, heartRate: 75 },
  { date: "May", bloodPressure: 121, heartRate: 73 },
];

const HealthSummary = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Lab & Reports</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Overall Summary</h2>
        <p className="text-gray-700">Your recent check-ups indicate stable health conditions with no major concerns. Maintain a healthy diet and exercise regularly.</p>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Health Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockHealthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bloodPressure" stroke="#ff7300" strokeWidth={2} />
              <Line type="monotone" dataKey="heartRate" stroke="#387908" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Detailed Report</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Blood Pressure:</strong> 121/80 mmHg (Normal)</p>
            <p><strong>Heart Rate:</strong> 73 bpm (Healthy)</p>
            <p><strong>Cholesterol Level:</strong> 180 mg/dL (Within Range)</p>
            <p><strong>Sugar Level:</strong> 95 mg/dL (Stable)</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Download Reports & Scans</h3>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Download X-Ray Scan</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Download Blood Test Report</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Download Full Health Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSummary;
